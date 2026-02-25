import React, { useContext } from 'react'
import "../Components/dock.scss"
import { WindowContextData } from '../context/WindowContext'

const Dock = () => {

  const { setActiveWindow } = useContext(WindowContextData)

  return (
    <footer className='dock'>
        <div 
          className="icon github"
          onClick={() => setActiveWindow((state) => ({...state, github: true}))}
        >
          <img className='img' src="/doc-icons/github.svg" alt="" /> 
        </div>
        <div 
          className="icon note"
          onClick={() => setActiveWindow((state) => ({...state, note: true}))}
        >
          <img className='img' src="/doc-icons/note.svg" alt="" /> 
        </div>
        <div 
        className="icon calender"
        onClick={() => setActiveWindow((state) => ({...state, calender: true}))}
        >
          <img className='img' src="/doc-icons/calender.svg" alt="" />
        </div>
        <div className="icon cli" onClick={() => setActiveWindow((state) => ({...state, cli: true}))}><img className='img' src="/doc-icons/cli.svg" alt="" /> </div>
        <div className="icon spotify" onClick={() => setActiveWindow((state) => ({...state, spotify: true}))}><img className='img' src="/doc-icons/spotify.svg" alt="" /> </div>
        <div className="icon link" onClick={() => window.open("https://www.linkedin.com/in/vishal-naidu-46603834a/", "_blank")}><img className='img' src="/doc-icons/link.svg" alt="" /> </div>
        <div className="icon mail" onClick={() => window.open("mailto:vishalnaidu221@gmail.com")}><img className='img' src="/doc-icons/mail.svg" alt="" /> </div>
        <div className="icon pdf" onClick={() => setActiveWindow((state) => ({...state, resume: true}))}><img className='img' src="/doc-icons/pdf.svg" alt="" /> </div>
    </footer>
  )
}

export default Dock
