const isWeb = process.env.TARGET === 'web';

let config = {
  // Сервер разработки (локальный)
  dev: {
    port: 8031,
  },
  //  Сервер для рендера
  ssr: {
    host: 'localhost',
    port: 8132,
    preloadState: true,
  },
  api: {
    // Обычно хост на апи относительный и используется прокси для устранения CORS
    baseURL: isWeb ? '' : 'http://front.example.com',
    tokenHeader: 'X-Token',

    // Прокси на апи, если режим разработки или ssr без nginx
    proxy: {
      '/api/**': {
        target: 'http://front.example.com',
        secure: true,
        changeOrigin: true,
      },
    },
  },

  navigation: {
    basename: '/', // если фронт доступен по вложенному пути
    type: isWeb ? 'browser' : 'memory',
  },
};

module.exports = config;
