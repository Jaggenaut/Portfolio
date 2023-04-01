import React, { Component } from 'react'
import "./Styles/Intro.css"

export class Intro extends Component {
  render() {
    return (
      <div className='Intro'>
        <div className='Topic'>Introduction</div>
        <div className='Container'>
          <div className='Introduction'>
            <div className='Img'>
            </div>
            <div className='Introtext'>
              <div className='Hello'>Hello</div>
              <div className='Name'>Aditya Singh here,</div>
              <div className='Am'>I am a Developer</div>
              <div className='Institute'>B-Tech (Indian Institute Of Technology)</div>
            </div>
          </div>
          <div className='Content'>Lörem ipsum olingar gigan nynat men ar sepybel. Tövis nypyv. Sere egogin diafant i rer
            prologi med ogen. Ons biktiga, iselogi då tist hökevis heteroling, parat gonnabe, valiga.
            Kimit kyspent soledes innan ivis, i kabel sysed utom tristat. Kronde airbaghjälm bektig,
            euvåsm. Juholtare kror, endopol anticism pås, ekotris esa höck umigening, doledes. </div>
        </div>
      </div>
    )
  }
}

export default Intro

