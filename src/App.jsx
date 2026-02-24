import React from 'react'
import "./app.scss"
import Dock from './Components/Dock'
import Nav from './Components/Nav'
import MacWindow from './Components/Windows/MacWindow'
import Github from './Components/Windows/Github'
import Note from './Components/Windows/Note'
import Resume from './Components/Windows/Resume'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
      <Resume />
    </main>
  )
}

export default App
