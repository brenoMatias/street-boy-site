import React from 'react';
import './boyMainCss.css';
import AsideBoy from '../AsideBoy/asideBoy'
import award from './award.png'
import boy from './boy.png'
import crias from './crias.png'
import tshirt from './tshirt.jpeg'
import loudspeaker from './loudspeaker.png'
import he from './he.png'
import homeI from './homeI.png'

function BoyMain() {
    return (
        <div className='boyMain'>

            <div className='aside2'>
                
               <AsideBoy />

            </div>

            <div className='mainContent'>

            <div className='navBarSec'>
                 <img  src={boy} className="boyMainI" alt="" />
                 <img  src={homeI} className="boyMainII" alt="" />

            </div>

                
                <div className='mostSellBoy'>

                    <div className='highlights'>
                             <h1 className='h1High'> Destaques</h1>

                        <img className='imgH' src={award}  alt="" />          

                    </div>
                           <div className='highDivs'>

                               <div className='highDiv1'>
                                   <img src={he} />
                               </div>

                               <div className='high2'>
                                   <div className='highDiv2'>
                                       <img className='hig3' src={crias} />
                                   </div>
                                   <div className='highDiv2'>
                                        <img className='hig3' src={tshirt} />

                                   </div>
                                   
                               </div>


                           </div>
                </div>

           
                                
                <div className='promotions'>
                    <div className='highlights'>
                        <h1 className='h1High'> Promoções</h1>
                        <img className='imgH' src={loudspeaker}  alt="" />          
                    </div>

                    <div className='promos'>
                        <div className='promos1'>
                            haha
                        </div>
                        <div className='promos1'>
                            haha
                        </div>
                    </div>
                </div>

                                                
                <div className='colections'>
                    Colections     
                </div>


            </div>

        </div>
    )
}

export default BoyMain;