import React from 'react'
import './entry.css'

const Entry = (props) => {
  return (
      <div>
        <div className="op">
          <div className='opImgBox'>
            <img className="opImg" src={props.src} alt="" />
          </div>
          <h2 className='opName'>{props.name}</h2>
        </div>
    </div>
  )
}

export default Entry