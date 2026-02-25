import React, { act, useContext, useState } from 'react'
import "./app.scss"
import Dock from './Components/Dock'
import Nav from './Components/Nav'
import MacWindow from './Components/Windows/MacWindow'
import Github from './Components/Windows/Github'
import Note from './Components/Windows/Note'
import Resume from './Components/Windows/Resume'
import Spotify from './Components/Windows/Spotify'
import Cli from './Components/Windows/Cli'
import { WindowContextData } from './context/WindowContext'

const App = () => {

  const { activeWindow, setActiveWindow } = useContext(WindowContextData)

  return (
    <main>
      <Nav />
      <Dock />
      {activeWindow.github && <Github windowName="github" />}
      {activeWindow.note && <Note windowName="note" />}
      {activeWindow.resume && <Resume windowName="resume" />}
      {activeWindow.spotify && <Spotify windowName="spotify" />}
      {activeWindow.cli && <Cli windowName="cli" />}
    </main>
  )
}

export default App
