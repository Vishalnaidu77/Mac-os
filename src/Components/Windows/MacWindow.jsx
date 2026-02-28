import React, { useContext, useState } from 'react'
import { Rnd } from "react-rnd"
import "../Windows/window.scss"
import { WindowContextData } from '../../context/WindowContext'

const MacWindow = ({ children, width="40vw", height="40vh", windowName }) => {

    const  { setActiveWindow, index, setIndex } = useContext(WindowContextData)
    let currIndex = 1;
    
    Object.keys(index).forEach(key => {
        if (key === windowName) {
            currIndex = index[key]
        }
    })

  return (
    <div style={{ position: "absolute", zIndex: currIndex }}>
        <Rnd
        default={{
            width: width,
            height: height,
            x: 300,
            y: 200,
        }}
        >
            <div 
            className="window" 
            onMouseDown={() => {
              Object.keys(index).forEach(key => {
                if (key === windowName) {
                    setIndex(state => ({ ...state, [key]: 1 }))
                } else {
                    setIndex(state => ({ ...state, [key]: 0 }))
                }
              })  
            }}
            >
                <div className="nav">
                    <div className="dots">
                        <div className="dot red" onClick={() => setActiveWindow(state => ({ ...state, [windowName]: false}))}></div>
                        <div className="dot yellow"></div>
                        <div className="dot green"></div>
                    </div>

                    <div className="title">
                        <p>vishalnaidu - zsh</p>
                    </div>
                </div>
                <div className="main-component">
                    {children}
                </div>
            </div>
        </Rnd>
    </div>
  )
}

export default MacWindow
