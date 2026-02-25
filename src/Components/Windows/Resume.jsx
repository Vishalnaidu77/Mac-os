import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName }) => {
  return (
    <div>
      <MacWindow windowName={windowName} >
        <div className="resume-window">
            <embed src="VishalNaidu.pdf" frameborder="0"></embed>
        </div>
      </MacWindow>
    </div>
  )
}

export default Resume
