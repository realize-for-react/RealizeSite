import React from 'react';
import gifLogo from '../images/logoAnimateNoLoop.gif';

export default function Title() {
  return (
    <div className="title"><a id="title"></a>
      <div className="inner-align">
        <img className="logoGif" width="25%" src={gifLogo} />
        {/* <img src="https://media.giphy.com/media/Quanb2lrAWY0qXjSSq/giphy.gif" /><p></p> */}
        <div className="main-title">Realize</div>
        <div className="sub-title">Browser extension to visualize React state flow and component hierarchy </div>

      </div>
    </div>
  )
}
