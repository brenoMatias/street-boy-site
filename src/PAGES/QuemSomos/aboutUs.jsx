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

                <div className='aboutC'>
                    <img className='aboutMainI' src={streetClub} />
                </div>

                <div className='aboutC'>
                    <img src={boy} />
                </div>

            </div>

            sobre
            test
        </div>
    )
}

export default AboutUs