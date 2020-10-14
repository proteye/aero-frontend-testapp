import React, { Component } from 'react';
import preloaderImg from './img/preloader.gif';

import './style.less';

class Preloader extends Component {
  render() {
    return (
      <div className="Preloader">
        <img src={preloaderImg} />
      </div>
    );
  }
}

export default Preloader;
