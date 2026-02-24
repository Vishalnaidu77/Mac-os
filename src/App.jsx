import React from 'react'
import "./app.scss"
import Dock from './Components/Dock'
import Nav from './Components/Nav'
import MacWindow from './Components/Windows/MacWindow'
import Github from './Components/Windows/Github'
import Note from './Components/Windows/Note'
import Resume from './Components/Windows/Resume'
import Spotify from './Components/Windows/Spotify'
import Cli from './Components/Windows/Cli'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
      <Resume />
      <Spotify />
      <Cli />
    </main>
  )
}

export default App
