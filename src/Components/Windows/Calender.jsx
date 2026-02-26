import React from 'react'
import MacWindow from './MacWindow'
import "./calender.scss"

const Calender = ({ windowName}) => {
  return (
    <MacWindow windowName={windowName}>
        <div className="calender-window">
            <iframe 
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=UTC&showPrint=0&src=dm1pbm9yckBnbWFpbC5jb20&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%230b8043" 
            style={{border:"solid 1px #777"}} width="100%" height="100%" frameborder="0" scrolling="no">
            </iframe>
        </div>
    </MacWindow>
  )
}

export default Calender
