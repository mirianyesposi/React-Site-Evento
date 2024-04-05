// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Header } from './Components/Header/Header'
import { Evento } from './Components/Evento/Evento'
import { Palestrantes } from './Components/Palestrantes/Palestrantes'
import { Oficinas } from './Components/Oficinas/Oficinas'
import { Cronograma } from './Components/Cronograma/Cronograma'
import { Inscricao } from './Components/Inscricao/Inscricao'
import { Footer } from './Components/Footer/Footer'
import parceria from '../../projetoSemanaFisica/src/assets/parceria.png'
import imgmenu from '../../projetoSemanaFisica/src/assets/imagem-inicio.png'

const App = () => {
  return (
    <div>
      <Header/>

      <div className='inicio'>
        <div className='bemvindo'>
          <h1>Semana de física e Tecnologia</h1>
          <h2>Inscreva-se para participar</h2>
          <button className='btnInsc'>Inscreva-se</button>
        </div>
        <div>
          <img src={imgmenu} alt="logo do evento" />
        </div>
      </div>
      
      <Evento/>

      <div className='parcerias'>
        <h1>Nossas Parcerias</h1>
        <div className='imgParceria'>
          <img style={{width:'200px', height:'78px' }} src={parceria} alt="" />
          <img style={{width:'200px', height:'78px' }} src={parceria} alt="" />
          <img style={{width:'200px', height:'78px' }} src={parceria} alt="" />
          <img style={{width:'200px', height:'78px' }} src={parceria} alt="" />
        </div>
      </div>

      <Palestrantes/>

      <Oficinas/>

      <Cronograma/>

      <Inscricao/>

      <Footer/>

    </div>
  )
}

export default App