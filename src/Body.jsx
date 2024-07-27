import React from 'react'
import './Body.css'
import Hero from './hero.png'
 
function Body() {
  return (
    <div className="body">
      <div className="right">
        <div className="welcomes">
          <p className="welcome">Welcome!</p> 
          <h1 className="book">
            <span className="span"> Book an</span> <br /> event now
          </h1>
          <p className="pass">
            Get your digital tickets instantly from evento.com.ng <br />
            your number one booking platform.
          </p>
        </div>
        <div className="button">
          <button className="but">Get Ticket</button>
        </div>
      </div>
      <div className="left">
        <div className="pics">
          <img src={Hero} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Body
