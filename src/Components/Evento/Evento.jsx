// eslint-disable-next-line no-unused-vars
import React from "react";
import './style.css'
import imgEvento1 from '../../assets/imgEvento1.png'
import imgEvento2 from '../../assets/imgEvento2.png'
import imgEvento3 from '../../assets/imgEvento3.png'
import check from '../../assets/check.svg'

export const Evento = () =>{
    return(
        <section>
            <div className="limite">
                <div className="descricao">
                    <h1>Evento</h1>
                    <p>Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse lobortis 
                    vitae quis vehicula pellentesque sit id. 
                    Urna posuere consequat velit vulputate faucibus pretium arcu accumsan sit. 
                    Vel venenatis sapien.
                    </p>
                </div>
                <div className="partedebaixo">
                    <div className="imagens">
                        <img style={{width:'100px', height:'100px' }} src={imgEvento1} alt="" />
                        <img style={{width:'230px', height:'230px' }}src={imgEvento3} alt="" />
                        <img style={{width:'150px', height:'150px' }}src={imgEvento2} alt="" />
                    </div>
                    <div className="lista">
                        <ul>
                            <li><img style={{width:'15px', height:'15px' }} src={check} alt="" /> Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.</li>
                            <li><img style={{width:'15px', height:'15px' }} src={check} alt="" /> Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.</li>
                            <li><img style={{width:'15px', height:'15px' }} src={check} alt="" /> Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.</li>
                            <li><img style={{width:'15px', height:'15px' }} src={check} alt="" /> Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.</li>
                            <li><img style={{width:'15px', height:'15px' }} src={check} alt="" /> Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.</li>
                            <li><button className='btnlista'>Inscreva-se</button></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
        </section>
    )
}