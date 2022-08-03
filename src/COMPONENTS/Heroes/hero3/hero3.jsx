import React from "react";
import './hero3Css.css';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import doscria from './doscria.png';
import darkgirl3 from './darkgirl3.jpg'
import top from './top.png'
import girlsSpace_space1 from './girlsSpace_space1.png'
import plantHighBoy_nature2 from './plantHighBoy_nature2.jpeg'
import dosCria2 from './dosCria2.jpeg'

function Hero3() {

    let fn = function () {
        /* do you want */
      };
      
    return (
        <div className="hero3">

            <div className="mostselled">
             <div className="mostH1">
                 <h1> MAIS VENDIDOS</h1>
             </div>
            </div>
        
    <div className="coverF"> 
  
  <Coverflow
      width={960}
      height={700}
      displayQuantityOfSide={2}
      navigation={false}
      enableHeading={false}
      
      
    >
      <div
        onClick={() => fn()}
        onKeyDown={() => fn()}
        role="menuitem"
        tabIndex="0"
      >
  
      </div>
      <img
        src= { doscria }
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src= { darkgirl3 }
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src= { top }
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src= { girlsSpace_space1 }
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src= { plantHighBoy_nature2 }
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
      <img
        src= { dosCria2 }
        alt="title or description"
        data-action="http://andyyou.github.io/react-coverflow/"
      />
    </Coverflow>
    </div>
         </div>
    )
}

export default Hero3;