// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import logo from '../../assets/ciencia-white.png'

export const Header = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="" className='logo'/>
            <ul>
                <li><button className='btn'>Início</button></li>
                <li><button className='btn'>Evento</button></li>
                <li><button className='btn'>Palestrantes</button></li>
                <li><button className='btn'>Oficinas</button></li>
                <li><button className='btn'>Cronograma</button></li>
                <li><button className='btn2'>Inscrição</button></li>
            </ul>
        </nav>
    )
}
