import React from 'react'
import "./app.scss"
import Dock from './Components/Dock'
import Nav from './Components/Nav'
import MacWindow from './Components/Windows/MacWindow'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <MacWindow>
        <h1>hello</h1>
      </MacWindow>
    </main>
  )
}

export default App
