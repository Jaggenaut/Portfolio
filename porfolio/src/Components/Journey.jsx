import React, { Component, useEffect, useState } from 'react'
import "./Styles/Journey.css"

function Journey() {
  const [num, setnum] = useState(0)
  let DummyData = [
    "Lorem 1",
    "Lorem 2",
    "Lorem 3",
    "Lorem 4",
    "Lorem 5",
    "Lorem 6",
  ];
  function HandleClick(){
    if (num < (DummyData.length - 1)){
      setnum(num+1)
    }
    else {
      setnum(0)
    }
  }
  function TextField(props) {
    console.log(props[0])
    return <div className='Journeytext'>{props.data[num]}</div>
  }
  useEffect(() =>{
    setnum(num+1);
  },1000)
  return (
    <div className='Journey'>
        <div className='Topic'>Journey</div>
        <div className='JourneyDescription'>
          <TextField data={DummyData}/>
        </div>
        <div className='Button' onClick={HandleClick}>Next</div>
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

export default Journey
