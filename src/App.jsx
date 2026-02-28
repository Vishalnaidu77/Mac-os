import React, { act, useContext, useEffect, useState } from 'react'
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
import Calender from './Components/Windows/Calender'
import ContextMenu from './Components/ContextMenu'

const App = () => {

  const { activeWindow, setActiveWindow } = useContext(WindowContextData)

  const [positionX, setPositionX] = useState(null)
  const [positionY, setPositionY] = useState(null)
  const [activeContextMenu, setActiveContextMenu] = useState(false)

  console.log(positionX, positionY);

  // Disable context menu in browser
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setPositionX(e.x)
      setPositionY(e.y)
      setActiveContextMenu(true)
    }

    document.addEventListener("contextmenu", handleContextMenu)

    return function cleanup(){
      document.removeEventListener("contextmenu", handleContextMenu)
      setActiveContextMenu(false)
    }

  }, [])

  // const checkKey = () => {
  //   document.addEventListener("keydown", (e) => {
  //     console.log(e)
  //   })
  // }

  // checkKey()

  return (
    <main onClick={() => setActiveContextMenu(false)}>
      <Nav/>
      <ContextMenu x={positionX} y={positionY} activeContextMenu={activeContextMenu}/>
      <Dock />
      {activeWindow.github && <Github windowName="github" />}
      {activeWindow.note && <Note windowName="note" />}
      {activeWindow.resume && <Resume windowName="resume" />}
      {activeWindow.spotify && <Spotify windowName="spotify" />}
      {activeWindow.cli && <Cli windowName="cli" />}
      {activeWindow.calender && <Calender windowName="calender" />}
    </main>
  )
}

export default App
