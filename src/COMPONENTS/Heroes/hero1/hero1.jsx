import React from 'react';
import './hero1css.css';
import boyCentral from './boyCentral.png';
import boy from './boy.png';
import girl from './girl.png';
import streetboy from './streetboy.png';
import login from './login.png';
import signup from './signup.png';
import cart from './cart.png';

function Hero1() {

    return (

        <div>

            <div className='frete'>
                Frete grátis para compras acima de: xx,xx - animação 'pulse' pulsante
            </div>
            
           <div className='contHero1'>

               <div className='contH11'>

                   <div>
                       <div className='login'> 
                       <img src={login} className="loginI" alt="" />

                       <h1 className='h1h'> Já tenho conta</h1>
                    </div>


                    <div className='login'> 
                       <img src={signup} className="loginI" alt="" />

                       <h1 className='h1h'> Não tenho conta</h1>
                    </div>

                   </div>
               </div>

               <div className='contH1'>

                   <a href='/'> 

                   <div className='homDiv'> 
                        <h1 className='home'> Início</h1>
                   </div>

                        <img src={boyCentral} className="boyCentral" alt="" />

                    <div className='search'> 
                        <h1> buscar</h1>  
                    </div>   

                   </a>
               </div>

               <div className='contH11'>
                   <div>

                   <div className='login'> 
                       <img src={cart} className="loginI" alt="" />

                       <h1 className='h1h'> Carrinho</h1>
                    </div>

                   
                   <div className='contact'> 

                       <h1 className='h1A'> Contato/Sobre</h1>

                 </div>

        </div>

               </div>

           </div>



           <div className='girlAndBoy'>

               <div className='girl'>
                 <a href='/'> 
                    <div className='girl1'> 

              
                        <div> 
                                <img  src={girl} className="boy" alt="" />
                            </div>

                            <div className='modM'> 
                                    <h1 > Moda Feminina</h1>
                            </div>
                        </div>
                  </a>
                    </div>

                    <div className='girl'>
                    <a href='/'>  
                        <div className='girl1'> 
                            <div> 
                                <img  src={boy} className="boy" alt="" />
                            </div>

                        <div className='modM'> 
                            <h1> Moda Masculina</h1>
                        </div>
                     </div>           
                  </a>     
               </div>


           </div>




        </div>

    )
}

export default Hero1;