import React from 'react'
import MacWindow from './MacWindow'
import "./calender.scss"

const Calender = ({ windowName}) => {
  return (
    <MacWindow windowName={windowName}>
        <div className="calender-window">
            <iframe 
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=UTC&showPrint=0&src=ZGV2ZWxvcG1lbnQuZ2FyZ2llbnRlcnByaXNlc0BnbWFpbC5jb20&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%230b8043" 
            width="100%" height="100%"frameBorder="0" scrolling="yes"
            ></iframe>
        </div>
    </MacWindow>
  )
}

export default Calender
