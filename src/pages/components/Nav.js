import React from 'react'
import GitHubButton from 'react-github-btn'

export default function Nav() {
  return (
    <div className="nav">
        <span className="navlink"><a href="#home">Home</a></span>
        <span className="navlink"><a href="#about">About</a></span>
        <span className="navlink"><a href="#installation">Installation</a></span>
        <span className="navlink"><a href="#demo">Demo</a></span>      
        <span className="navlink"><a href="#authors">Authors</a></span>
        <span className="navlink"><a href="#contribute">Contribute</a></span>
        <span className="navButton"><GitHubButton href="https://github.com/ntkme/github-buttons" href="https://github.com/oslabs-beta/Realize" data-color-scheme="no-preference: dark; light: dark; dark: dark;" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub"> Realize @ Github </GitHubButton>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    </div>
  )
}
