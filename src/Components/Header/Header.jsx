// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import logo from '../../assets/ciencia-white.png'

export const Header = () => {
    return (
        <nav className='container'>
            <img src={logo} alt="" className='logo'/>
            <ul>
                <li><a href='#inicio'><button className='btn'>Início</button></a></li>
                <li><a href='#evento'><button className='btn'>Evento</button></a></li>
                <li><a href='#palestrantes'><button className='btn'>Palestrantes</button></a></li>
                <li><a href='#oficinas'><button className='btn'>Oficinas</button></a></li>
                <li><a href='#cronograma'><button className='btn'>Cronograma</button></a></li>
                <li><a href='#inscricao'><button className='btn2'>Inscrição</button></a></li>
            </ul>
        </nav>
    )
}
