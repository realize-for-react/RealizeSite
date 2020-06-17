import React from 'react'
import GitHubButton from 'react-github-btn'

export default function Contribute() {
  return (
    <div className="contribute"><a id="contribute"></a>

      <center>
        <GitHubButton href="https://github.com/oslabs-beta/Realize" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-size="large" aria-label="Follow @oslabs-beta on GitHub">Follow @oslabs-beta</GitHubButton>
        &nbsp;&nbsp;&nbsp;
        <GitHubButton href="https://github.com/ntkme/github-buttons" href="https://github.com/oslabs-beta/Realize" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</GitHubButton>

      </center>

</div>
  )
}
