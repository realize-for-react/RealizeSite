import React from 'react';
import gifLogo from '../images/logoAnimateNoLoop.gif';

export default function Title() {
  return (
    <div className="title"><a id="title"></a>
      <div className="inner-align">
        <img className="logoGif" width="25%" src={gifLogo} />
        <div className="main-title">Realize</div>
        <div className="sub-title">Browser extension to visualize React state flow and component hierarchy </div>

      </div>
    </div>
  )
}
