import React from 'react'
import "./contextMenu.scss"
import { PiTriangleLight } from "react-icons/pi";

const ContextMenu = ({ x, y, activeContextMenu }) => {
  return (
    <section>
      {activeContextMenu ? <div className='context-menu' style={{ top: y, left: x}}>
          <div className="context-content">
              <h3 className='options'>New <PiTriangleLight style={{ rotate: "90deg", height: "15px"}}/></h3>
              <h3 className='options'>Copy</h3>
              <h3 className='options'>Paste</h3>
              <hr />
              <h3 className='options'>View <PiTriangleLight style={{ rotate: "90deg", height: "15px"}}/></h3>
              <h3 className='options'>Sort by <PiTriangleLight style={{ rotate: "90deg", height: "15px"}}/></h3>
              <h3 className='options'>Personalized</h3>
              <h3 className='options'>Display settings</h3>
              <hr />
              <h3 className='options'>Refresh</h3>
          </div>
      </div> : null}
    </section>
  )
}

export default ContextMenu
