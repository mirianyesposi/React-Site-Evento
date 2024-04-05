// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'
import imgOficina from '../../assets/oficina.png'

export const Palestrantes = () => {
    return (
        <div className='plalestrantes'>
            <h1>Palestrantes</h1>
            <div className='center'>    
                    <div className='palestras'>
                    <div className='ofc'>
                        <img src={imgOficina} alt="" /> 
                        <h1>Humans are much more smarter than AI</h1> 
                        <p>Lorem ipsum dolar sit amet consectetur. 
                            Lorem ipsum dolar sit amet consectetur.</p>
                        <button className='btnLearn'>Learn more</button>
                    </div>
                    <div className='ofc'>
                    <img src={imgOficina} alt="" /> 
                        <h1>Humans are much more smarter than AI</h1> 
                        <p>Lorem ipsum dolar sit amet consectetur. 
                            Lorem ipsum dolar sit amet consectetur.</p>
                        <button className='btnLearn'>Learn more</button>  
                    </div>
                    <div className='ofc'>
                    <img src={imgOficina} alt="" /> 
                        <h1>Humans are much more smarter than AI</h1> 
                        <p>Lorem ipsum dolar sit amet consectetur. 
                            Lorem ipsum dolar sit amet consectetur.</p>
                        <button className='btnLearn'>Learn more</button>  
                    </div>
                </div>
                <button className='btnCron'>Cronograma</button>
            </div>
        </div>
    )
}