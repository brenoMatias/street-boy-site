import React from "react";
import './asideBoyCss.css'
import tshirt from './tshirt.png'

function AsideBoy () {
    return (
        <div>
                     <div className='aside'>

                
                <div className='topicLink'>
                    Acessórios

                    <div>
                        
                    </div>
                </div>
                
                <div className='topicLink'>
                    T-shirts

                    <div className="asideI">
                        <img src={tshirt} />
                    </div>
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


            </div>


            <div className="filter">
                filtros
            </div>
        </div>
    )
}

export default AsideBoy;