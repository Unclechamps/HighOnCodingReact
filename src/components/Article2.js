import React, {Component} from 'react'

export class Article2 extends Component { //if exporting here, you need curly braces in app.js

render() {

  return (

    <div className="articles">
      <h4>Introduction to Swift</h4>
      <p>
        Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.
      </p>
      <p className="comments">
        <span>15 comments</span>
        <span>45 likes</span>
      </p>
      </div>
  )
}
}
