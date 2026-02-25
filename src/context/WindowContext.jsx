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

  return (
    <WindowContextData.Provider value={{ activeWindow, setActiveWindow }}>
      {children}    
    </WindowContextData.Provider>
  )
}

export default WindowContext
