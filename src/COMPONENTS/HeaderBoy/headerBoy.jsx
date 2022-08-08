import React from 'react';
import './headerBoy.css';
import login from './login.png';
import signup from './signup.png';
import cart from './cart.png';
import boy from './boy.png';
import girl from './girl.png';
import street from './street.png'
import home from './home-button.png'

function HeaderGirl() {
    return (
        <div>


            
           <div className='contHeader'>

               <div className='contH111'>

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

                        <img src={street} className="boyCentralStreet" alt="" />

                    <div className='search'> 
                        <h1> buscar</h1>  
                    </div>   

                   </a>
               </div>

               <div className='contH111'>
                   <div>

                   <div className='login'> 
                       <img src={cart} className="loginI" alt="" />

                       <h1 className='h1h'> Carrinho</h1>
                    </div>

                   
                <a href='/sobre'> 
                   <div className='contact'> 
                       <h1 className='h1A'> Contato/Sobre</h1>
                  </div>
                </a>

        </div>

               </div>

           </div>



           <div className='girlAndBoyHeader'>

           <div className='girl'>
                    <a href='/streetBoy' className='boyF'>  
                        <div className='girl11'> 
                            <div> 
                                <img  src={boy} className="boy" alt="" />
                            </div>
                        <div className='girlf'> 
                            <h1  > Moda Masculina</h1>
                        </div>
                     </div>           
                  </a>     
               </div>

               <div className='divIB'>
                   <img className='inicioI' src={home} />
                   <h1 className='inicioB'> Início</h1>
               </div>

               <div className='girl'>
                 <a href='/streetGirl' className='boyF'> 
                    <div className='girl11'> 
                            <div> 
                                <img  src={girl} className="boy" alt="" />
                            </div>
                            <div className='girlf'> 
                                    <h1 > Moda Feminina</h1>
                            </div>
                        </div>
                  </a>
                    </div>




           </div>




        </div>
    ) 
}

export default HeaderGirl;