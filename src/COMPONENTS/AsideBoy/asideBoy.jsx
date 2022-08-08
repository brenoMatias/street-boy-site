import React from "react";
import './asideBoyCss.css'
import tshirt from './tshirt.png'
import cap from './cap.png'
import berma from './berma.png'
import regata from './regata.png'

function AsideBoy () {
    return (
        <div>
                     <div className='aside'>

                
            <a href="/streetBoy/acessorios"> 
                <div className='topicLink'>
                    Acessórios
                    <div className="asideI">
                        <img src={cap} />
                    </div>
                </div>
            </a>

            <a href="/streetBoy/tshirts"> 
                <div className='topicLink'>
                    T-shirts
                    <div className="asideI">
                        <img src={tshirt} />
                    </div>
                </div>
            </a>

            <a href="/streetBoy/bermudas"> 
                <div className='topicLink'>
                    T-shirts
                    <div className="asideI">
                        <img src={berma} />
                    </div>
                </div>
            </a>

            <a href="/streetBoy/bermudas"> 
                <div className='topicLink'>
                    Regatas
                    <div className="asideI">
                        <img src={regata} />
                    </div>
                </div>
            </a>
            
                <div className='topicLink'>
                    Shorts
                </div>


                <div className='topicLink'>
                    Moleton
                </div>

                <div className='topicLink'>
                    Calças
                </div>


            </div>


            <div className="filter">
                filtros
            </div>
        </div>
    )
}

export default AsideBoy;