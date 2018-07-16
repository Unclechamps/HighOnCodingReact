import React, {Component} from 'react'

export class Menu extends Component { //if exporting here, you need curly braces in app.js

render() {

  return (

    <div className="header">
      <h1>HighOnCoding</h1>
      <ul>
        <li><a id="home" href="index.html">Home</a></li>
        <li><a href="categories.html">Categories</a></li>
      </ul>
    </div>
  )
}
}
