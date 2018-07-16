import React, {Component} from 'react'

export class Article1 extends Component { //if exporting here, you need curly braces in app.js

render() {

  return (

    <div className="articles">
      <h4>Hello WatchKit</h4>
      <p>
        Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.
      </p>
      <p className="comments">
        <span>12 comments</span>
        <span>124 likes</span>
      </p>
    </div>
  )
}
}
