// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import oficinaImg from '../../assets/imgEvento2.png'

export const Oficinas = () => {
    return (
        <div className='container-oficinas'>
            <h1>Oficinas</h1>
            <div className='oficinas-grade'>
                <div className='oficina'>
                    <h1 className='tituloOfic'>Oficina 1</h1> 
                    <p className='descricaoProf'>Descrição da Oficina de exemplo. Ministrada pelo professor Exemplo</p>
                    <div className='professor'>
                        <img style={{width:'70px', height:'70px' }} src={oficinaImg} alt="" />
                        <div className='prof'>
                            <p className='nomeProf'>Professora Exemplo</p>
                            <p className='titulo'>Doutora</p>
                        </div>
                    </div>
                </div>
                
                <div className='oficina'>
                    <h1 className='tituloOfic'>Oficina 2</h1> 
                    <p className='descricaoProf'>Descrição da Oficina de exemplo. Ministrada pelo professor Exemplo</p>
                    <div className='professor'>
                        <img style={{width:'70px', height:'70px' }} src={oficinaImg} alt="" />
                        <div className='prof'>
                            <p className='nomeProf'>Professora Exemplo</p>
                            <p className='titulo'>Doutora</p>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}