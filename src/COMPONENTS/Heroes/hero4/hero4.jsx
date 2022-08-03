import React from "react";
import './hero4Css.css'
import caue from './caue.png'

function Hero4() {
    return (
        <div className="hero4">

            <div className="collectH1"> 
             <div className="coleH1"> 
                <h1> COLEÇÕES </h1>
             </div>
            </div>
           

<div className="colecDiv">
            <div className="colectionss">

           <div>
               <h1> DARK</h1> 
               </div>     
            <img className="coleI" src= { caue } />
            </div>

            <div className="colectionss">
                Lala
            </div>

            <div className="colectionss">
                Lala
            </div>

            <div className="colectionss">
                doscrias
            </div>
</div> 
        </div>
    )
}

export default Hero4;