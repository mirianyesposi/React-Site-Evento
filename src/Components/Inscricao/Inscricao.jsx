// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import inscricaoimg from '../../assets/increvase.png'

export const Inscricao = () => {
    return (
        <div className='container-inscricao' id="inscricao">
            <div className='section-inscricao'>
                <img src={inscricaoimg} alt="" />
                <div className='formulario'>
                    <h1>Faça sua inscrição</h1>
                    <h1>Não perca essa oportunidade</h1>
                    <input type="text" placeholder='Nome completo'/>
                    <input type="text" placeholder='Email'/>
                    <input type="text" placeholder='CPF'/>
                    <button type='submit' className='btn-inscricao'>Inscrever</button>
                </div>
            </div>
            


        </div>
    )
}