import React from 'react';
import './girlMain.css'
import AsideGirl from '../AsideBoy/asideBoy'
import shining from './shining.png'

function GirlMain () {
    return (
        <div className='boyMain'>

        <div className='aside2'>
            
           <AsideGirl />

        </div>

        <div className='mainContent'>
            
            <div className='mostSellBoy'>

                <div className='highlights'>
                    <h1 className='h1High'> Destaques</h1>
                    <img className='imgH' src={shining}  alt="" />          

                </div>
                       <div className='highDivs'>

                           <div className='highDiv1'>
                               {/* <img src={boy} /> */}
                           </div>

                           <div className='high2'>
                               <div className='highDiv2'>
                                   {/* <img className='hig3' src={crias} /> */}
                               </div>
                               <div className='highDiv2'>
                                    {/* <img className='hig3' src={tshirt} /> */}

                               </div>
                               
                           </div>


                       </div>
            </div>

                            
            <div className='promotions'>
                <div className='highlights'>
                    <h1 className='h1High'> Promoções</h1>
                    {/* <img className='imgH' src={loudspeaker}  alt="" />           */}
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

export default GirlMain