import React from 'react';
import './boyMainCss.css';

function BoyMain() {
    return (
        <div className='boyMain'>

            <div className='aside'>
                
                <div className='topicLink'>
                    T-shirts
                </div>

                <div className='topicLink'>
                    Bermudas
                </div>

                <div className='topicLink'>
                    Regatas
                </div>

                <div className='topicLink'>
                    Shorts
                </div>


                <div className='topicLink'>
                    Moleton
                </div>

                <div className='topicLink'>
                    Calças
                </div>

                <div className='topicLink'>
                    Acessórios
                </div>

            </div>

            <div className='mainContent'>
                
                <div className='mostSellBoy'>
                           Mais Vendidos
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