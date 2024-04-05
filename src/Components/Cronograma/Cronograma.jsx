// eslint-disable-next-line no-unused-vars
import React from 'react'
import './style.css'

export const Cronograma = () => {
    return (
        <div className='container-cronograma'>
            <h1>Cronograma</h1>
                <div className='tabela-cronograma'>
                <table>
                    <tr>
                        <th>Horário/Dia</th>
                        <th>06/05/2024</th>
                        <th>07/05/2024</th>
                        <th>08/05/2024</th>
                        <th>09/05/2024</th>
                        <th>10/05/2024</th>
                    </tr>
                    <tr>
                        <td style={{fontWeight:'bold'}}>19:30</td>
                        <td>Palestra</td>
                        <td>Palestra</td>
                        <td>Palestra</td>
                        <td>Palestra</td>
                        <td>Palestra</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight:'bold'}}>20:30</td>
                        <td style={{fontWeight:'bold'}}>Intervalo</td>
                        <td style={{fontWeight:'bold'}}>Intervalo</td>
                        <td style={{fontWeight:'bold'}}>Intervalo</td>
                        <td style={{fontWeight:'bold'}}>Intervalo</td>
                        <td style={{fontWeight:'bold'}}>Intervalo</td>
                    </tr>
                    <tr>
                        <td style={{fontWeight:'bold'}}>21:00</td>
                        <td >Oficina</td>
                        <td>Oficina</td>
                        <td>Oficina</td>
                        <td>Oficina</td>
                        <td>Oficina</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}