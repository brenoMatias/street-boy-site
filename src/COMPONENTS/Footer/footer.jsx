import React from "react";
import './footerCss.css'
import instagram from './instagram.png'
import tik from './tik-tok.png'
import facebook from './facebook.png'

function Footer() {
    return (
        <div className="footer">

        <div className="contsFoot">   
            <div className="contsFoot1">
                <h1> Newsletter</h1>
                <p> Informe seu email</p>
            </div>

            <div className="contsFoot1">
                <h1> Ajuda </h1>
                <p> Pedidos </p>
                <p> Quem somos</p>
                <p> Trocas e Devoluções </p>
                <p> Perguntas Frequentes</p>
                <p> Política de Privacidade</p>
            </div>

            <div className="contsFoot1">
              <h1> Siga nossas redes</h1>

              <div className="footIcons">

                  <div> 
                        <img src={instagram}  alt="" />
                  </div>

                  <div>
                    <img src={tik}  alt="" />          
                </div>

                <div>
                    <img src={facebook}  alt="" />          
                </div>
    


              </div>

            </div>         
                </div>
        </div>
    )
}

export default Footer;