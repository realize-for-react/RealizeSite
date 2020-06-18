import React from 'react';
import gifLogo from '../images/logoAnimateNoLoop.gif';
// import gifLogoo from '../images/realizeLogoPNG.png';

export default function Title() {
  return (
    <div className="title"><a id="title"></a>
      <div className="inner-align">
        <img className="logoGif" width="25%" src="https://i.imgur.com/oJcCqL9.gif" />
        <div className="main-title">Realize</div>
        <div className="sub-title">Browser extension to visualize React state flow and component hierarchy</div>

      </div>
    </div>
  )
}
