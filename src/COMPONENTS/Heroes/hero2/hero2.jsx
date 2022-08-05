import React from 'react';
import './hero2css.css';
import bag from './bag.gif'

function Hero2() {
   return (
       <div className='hero2'>

      <img src={bag} className="boyandgirl" alt="" />
    
        <div className='tribo'> 
             <h1>Vem pra Tribo da Rua! </h1>
        
        </div> 
      

       </div>
   )

}

export default Hero2;