import React from 'react';
import './boyMainCss.css';
import AsideBoy from '../AsideBoy/asideBoy'
import award from './award.png'
import boy from './boy.png'

function BoyMain() {
    return (
        <div className='boyMain'>

            <div className='aside2'>
                
               <AsideBoy />

            </div>

            <div className='mainContent'>
                
                <div className='mostSellBoy'>

                    <div className='highlights'>
                        <h1 className='h1High'> Destaques</h1>
                        <img className='imgH' src={award}  alt="" />          

                    </div>
                           <div className='highDivs'>

                               <div className='highDiv1'>
                                   <img src={boy} />
                               </div>

                               <div className='high2'>
                                   <div className='highDiv2'>
                                       lala
                                   </div>
                                   <div className='highDiv2'>
                                       lala
                                   </div>
                                   
                               </div>


                           </div>
                </div>

                                
                <div className='promotions'>
                    Promoções     
                </div>

                                                
                <div className='colections'>
                    Colections     
                </div>


            </div>

        </div>
    )
}

export default BoyMain;