
import React from 'react'
import './time.css'


// const timers=(milliseconds)=>{
//   let seconds =  parseInt((milliseconds / 1000) % 60) ;
//   let minutes =  parseInt((milliseconds / (1000*60)) % 60);
//   let hours   =  parseInt((milliseconds / (1000*60*60)) % 24);
//   return{
//       hours,
//       minutes,
//       seconds
//   }
// }
// const time = timers(120000);

let milliseconds = 121000
let seconds =  parseInt((milliseconds / 1000) % 60) ;
let minutes =  parseInt((milliseconds / (1000*60)) % 60);
let hours   =  parseInt((milliseconds / (1000*60*60)) % 24);

const Timer = () => {
  return<div className="top-class"> 
          <h1 className="title">Timer</h1>
          <div className="boxe">
          <div className="time-app">
              <h1 className="items">{hours.toString().padStart(2,'0')}</h1>
              <h1 className="item">:</h1>
              <h1 className="items">{minutes.toString().padStart(2,'0')}</h1>
              <h1 className="item">:</h1>
              <h1 className="items">{seconds.toString().length<2 ? "0"+seconds:seconds}</h1>
          </div>
          </div>
          {/* <div className="btn">
              <button className="buttons">Start</button>
              <button className="buttons">Reset</button>
          </div> */}
      </div>
}
export default Timer;