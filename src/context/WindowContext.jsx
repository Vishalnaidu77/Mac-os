import React, { createContext, useState } from 'react'

export const WindowContextData = createContext()

const WindowContext = ({ children }) => {

      const [activeWindow, setActiveWindow] = useState({
            github: false,
            note: false,
            resume: false,
            spotify: false,
            cli: false,
            calender: false
        })

      const [index, setIndex] = useState({
        github: 1,
        note: 1,
        resume: 1,
        spotify: 1,
        cli: 1,
        calender: 1
      })

  return (
    <WindowContextData.Provider value={{ activeWindow, setActiveWindow, index, setIndex }}>
      {children}    
    </WindowContextData.Provider>
  )
}

export default WindowContext
