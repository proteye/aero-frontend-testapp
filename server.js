/**
 * HTTP server for render
 */
process.env.TARGET = process.env.TARGET || 'node';
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');
const { Worker } = require('worker_threads');
const express = require('express');
const cookieParser = require('cookie-parser');
const httpProxy = require('http-proxy');
const config = require('./src/config.js');
const uniqid = require('uniqid');

const app = express();

// Отдача файлов кроме index.html
app.use(express.static(path.resolve('./dist/web'), { index: false /*dotfiles: 'allow'*/ }));
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

// Запросы на файлы, которых нет. Отдача 404, чтобы не рендерить страницу
app.get(/\.ico$/, (req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end('404');
});

// Прокси на внешний сервер по конфигу (обычно для апи)
const proxy = httpProxy.createProxyServer({});
for (const path of Object.keys(config.api.proxy)) {
  console.log(`Proxy ${path} => ${config.api.proxy[path].target}`);
  app.all(path, async (req, res) => {
    try {
      proxy.web(req, res, config.api.proxy[path]);
    } catch (e) {
      console.error(e);
      res.send(500);
    }
  });
}

let stateStorage = {};

app.get('/ssr/state/:key', async (req, res) => {
  const stateKey = req.params.key;
  const stateSecret = req.cookies.stateSecret;
  if (stateStorage[stateKey] && stateStorage[stateKey][stateSecret]) {
    res.json(stateStorage[stateKey][stateSecret]);
    delete stateStorage[stateKey];
  } else {
    res.json({});
  }
});

// Все остальные запросы - рендер страницы
app.get('/*', async (req, res) => {
  console.time('render');
  try {
    const stateKey = uniqid();
    const stateSecret = uniqid(stateKey);
    const result = await render({
      method: req.method,
      url: req.url,
      headers: req.headers,
      body: req.body,
      cookies: req.cookies,
      stateKey: stateKey,
    });
    // Запоминаем состояние на 5сек
    stateStorage[stateKey] = { [stateSecret]: result.state };
    setTimeout(() => {
      if (stateKey in stateStorage) {
        delete stateStorage[stateKey];
      }
    }, 15000);
    // По куке клиент получит своё состояние
    res.cookie('stateSecret', stateSecret, { expires: false, httpOnly: true /*, secure: true*/ });
    res.writeHead(result.status, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(result.out);
  } catch (e) {
    console.error(e);
    res.writeHead(500, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`ERROR ${e.toString()}`);
  }
  console.timeEnd('render');
});
app.listen(config.ssr.port, config.ssr.host);

/**
 * Рендер приложения в отдельном потоке
 * Запускается сборка приложения специально сделанная для node.js
 * @param params
 * @returns {Promise<Object>}
 */
function render(params) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./dist/node/main.js', {
      workerData: params,
      stdout: false,
      stderr: false,
    });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', code => {
      if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
}

process.on('unhandledRejection', function (reason /*, p*/) {
  console.error(reason);
  process.exit(1);
});

console.log(`Server run on http://${config.ssr.host}:${config.ssr.port}`);
