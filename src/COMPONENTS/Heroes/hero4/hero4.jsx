import React from "react";
import './hero4Css.css'
import caue from './caue.png'
import skull from './skull.png'
import girl from './girl.png'
import flower from './flower-pot.png'
import glass1 from './glass1.png'
import athena from './athena.png'
import FlipCard from "../../FlipCards/flipCard";

function Hero4() {
    return (
        <div className="hero4">

            <div className="collectH1"> 
             <div className="coleH1"> 
                <h1> COLEÇÕES </h1>
                
                <h1 className="colectH11">( Artes e designs exclusivos ) </h1>
             </div>
            </div>
           

<div className="colecDiv">

            <div className="colectionss">
                <div className="colHe">
                    <h1> CRIAS</h1> 
                    <img className="coleIcon" src= { glass1 } />
                    </div>    

                    <FlipCard />

            </div>

            <div className="colectionss">
                <div className="colHe2">
                    <h1> NATU</h1> 
                    <img className="coleIcon" src= {  flower } />
                    </div>    
                    
                    <FlipCard />
            </div>

            <div className="colectionss">
                <div className="colHe2">
                    <h1> DARK </h1> 
                    <img className="coleIcon" src= {  skull } />
                    </div>    
                    
                    <img className="coleI" src= { caue } />
            </div>

            
            <div className="colectionss">
                <div className="colHe">
                    <h1> MITOS</h1> 
                    <img className="coleIcon" src= { athena } />
                    </div>    
                    <img className="coleI" src= { girl } />
            </div>
</div> 
        </div>
    )
}

export default Hero4;