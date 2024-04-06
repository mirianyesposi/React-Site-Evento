// eslint-disable-next-line no-unused-vars
import React from "react";
import './style.css'
import logodev from '../../assets/logo-miriany-white.png'
import imginstagram from '../../assets/instagram.png'
import imgfacebook from '../../assets/facebook.png'
import imgyoutube from '../../assets/youtube.png'
import imgwhatsapp from '../../assets/whatsapp.png'


export const Footer = () =>{
    return(
        <>
        <div className="container-rodape">
            <div className="container-informacoes">
                <div className="informacoes">
                    <h1>Mais informações?</h1>
                    <p>Acesse nossas redes sociais</p>
                </div>
                <div className="redes">
                    <a href=""><img style={{width:'50px', height:'50px' }} src={imginstagram} alt="" /></a>
                    <a href=""><img style={{width:'50px', height:'50px' }} src={imgfacebook} alt="" /></a>
                    <a href=""><img style={{width:'50px', height:'50px' }} src={imgyoutube} alt="" /></a>
                    <a href=""><img style={{width:'50px', height:'50px' }} src={imgwhatsapp} alt="" /></a>
                </div>
        </div>
        </div>
        <div className="desenvolvedor">
            <div className="logo-dev"><img style={{width:'50px', height:'50px' }} src={logodev} alt="" /></div>
            <div className="dados-dev">
                <p>Produzido por: Miriany Esposi F. N. - miriany.esposi@gmail.com</p>
                <p>IFPR Campus Ivaipora - Rua Max Arthur Greipel, nº 505 - Parque Industrial, Ivaiporã - PR, 86870-000</p>
            </div>
        </div>
        </>
    )
}