// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import imgOficina from '../../assets/oficina.png'
import Card from '../Card/Card'

export const Palestrantes = () => {
    return (
        <div className='plalestrantes' id="palestrantes">
            <h1>Palestrantes</h1>
            <div className='center'>
                <div className='palestras'>

                    <Card img={imgOficina} titulo={'Humans are much more smarter than AI'} descricao={'Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.'} />
                    
                    <Card img={imgOficina} titulo={'Humans are much more smarter than AI'} descricao={'Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.'} />

                    <Card img={imgOficina} titulo={'Humans are much more smarter than AI'} descricao={'Lorem ipsum dolar sit amet consectetur. Lorem ipsum dolar sit amet consectetur.'} />

                </div>
                <a href='#cronograma'><button className='btnCron'>Cronograma</button></a>
            </div>
        </div>
    )
}