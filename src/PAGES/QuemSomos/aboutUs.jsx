import React from 'react'
import './aboutCSS.css'
import streetClub from './streetClub.png'
import boy from './boy.png'
import girl from './girl.png'

function AboutUs() {
    return (
        <div  className='aboutMain1'>

            <div className='aboutHDiv'>
                
                <div className='aboutC'>
                    <img src={girl} />
                </div>
              
              <a href='/'> 
                <div className='aboutC'>
                    <img className='aboutMainI' src={streetClub} />
                </div>
             </a>


                <div className='aboutC'>
                    <img src={boy} />
                </div>

            </div>


            <div className='aboutText'>
                <div className='aboutMainDiv'> 

                <div>
                    <h1> Sobre nós</h1>
                    <p> A Street Club Brazil nasceu para para amantes da moda streetwear. Seja 
                      no morro, no asfalto ou na natureza, existe uma peça da Street Club para 
                      você portar conforto e estilo. Nascemos da correria do dia a dia e 
                    </p>

                    <p> 
                        De Minas Gerais para o Brasil e mundo
                    </p>

                    <p> 
                        CNPJ - registro
                    </p>
                </div>

                </div>
            </div>


            <div className='aboutText'>
                <div className='aboutMainDiv'> 

                <div>
                    <h1> Contato</h1>
                    <p> formas de contato
                    </p>
                </div>
                </div>
            </div>



     
        </div>
    )
}

export default AboutUs