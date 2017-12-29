import React, { Component } from 'react'
import { SiteHeader } from './Components/Organisms'

class App extends Component {
  render () {
    return (
      <div>
        <SiteHeader />
        <h1>Hello World</h1>
        <p>
          As the Technical Lead at Mindgame I've got the main responsibility for
          all technical aspects of Mindgame. This includes but is not limited to:
          Train junior programmers; Manage our servers; Maintain internal
          infrastructure; Design software; Innovate; and Quality Assurance (QA).
          My personal challenge in my job is keeping up with new technologies
          while main.
        </p>
      </div>
    )
  }
}

export default App
