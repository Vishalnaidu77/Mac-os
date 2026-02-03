import React from 'react'
import "../Components/dock.scss"

const Dock = () => {
  return (
    <footer className='dock'>
        <div className="icon github"><img className='img' src="/doc-icons/github.svg" alt="" /> </div>
        <div className="icon note"><img className='img' src="/doc-icons/note.svg" alt="" /> </div>
        <div className="icon calender"><img className='img' src="/doc-icons/calender.svg" alt="" /> </div>
        <div className="icon cli"><img className='img' src="/doc-icons/cli.svg" alt="" /> </div>
        <div className="icon spotify"><img className='img' src="/doc-icons/spotify.svg" alt="" /> </div>
        <div className="icon link"><img className='img' src="/doc-icons/link.svg" alt="" /> </div>
        <div className="icon mail"><img className='img' src="/doc-icons/mail.svg" alt="" /> </div>
        <div className="icon pdf"><img className='img' src="/doc-icons/pdf.svg" alt="" /> </div>
    </footer>
  )
}

export default Dock
