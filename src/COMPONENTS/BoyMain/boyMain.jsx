import React from 'react';
import './boyMainCss.css';
import AsideBoy from '../AsideBoy/asideBoy';

function BoyMain() {
    return (
        <div className='boyMain'>

            <div className='aside2'>
                
               <AsideBoy />

            </div>

            <div className='mainContent'>
                
                <div className='mostSellBoy'>
                           Destaques
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