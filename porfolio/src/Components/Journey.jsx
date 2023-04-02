import React, { Component } from 'react'
import "./Styles/Journey.css"

export class Journey extends Component {
  render() {
    return (
      <div className='Journey'>
        <div className='Topic'>Journey</div>
        <div className='JourneyDescription'>
          <div className='Journeytext'>Laqwertyuiopasdfghjklzxcvbnm,q
wertyuioasdfghjklzxcvbnm,qwertyui
qwertyuiopasdfghjklzxcvbnm</div>
        </div>
        <div className='wave'>
          <div className='waves' id='wave1'></div>
          <div className='waves' id='wave2'></div>
          <div className='Ship'></div>
          <div className='waves' id='wave3'></div>
          <div className='waves' id='wave4'></div>
        </div>
      </div>
    )
  }
}

export default Journey
