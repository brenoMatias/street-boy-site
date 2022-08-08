import React from 'react';
import './tshirtCSS.css';
import AsideBoy from '../../AsideBoy/asideBoy';
import boy from './boy.png'
import img from './img.png'

function TshirtMain() {
    return (
        <div className='boyMain'>

            <div className='aside2'>
                
               <AsideBoy />

            </div>

            <div className='mainContent'>

            <div className='navBarSec'>
                 <img  src={boy} className="boyMainI" alt="" />
                 <img  src={img} className="boyMainII" alt="" />

            </div>

                
                <div className='tshirtMain'>

                    <div className='highT'>

                        <div className='tshirtH1'>
                                 <h1 className='h1High1'> T-shirts</h1>
                        </div>

                        {/* <img className='imgH' src={award}  alt="" />           */}

                    </div>
                           <div className='highDivs'>

                               <div className='highDiv1'>
                                   {/* <img src={he} /> */}
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

export default TshirtMain;