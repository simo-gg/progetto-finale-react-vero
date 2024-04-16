import React from 'react'
import './About.css'
import logo from "../../logo.png"

const About = () => {
  return (
    <div>
        <img src={logo} className='logo'/>
        <div className='info'>
            <h1> <a href="https://www.yugioh-card.com/eu/it/" target='_blank'>Yu-Gi-Oh!</a> è una proprietà di Konami e questo progetto non è in nessun modo affiliato ad essi.</h1>
            <h2>API utilizzata per il database di carte offerta da: <a href="https://ygoprodeck.com/" target="_blank">YGOPRODeck</a> </h2>
            <h2 style={{fontSize:18}}>Si precisa che questo progetto è a scopo puramente educativo e non prevede un profitto economico.</h2>
            <h2 style={{fontSize:18}}>Questo progetto è posto a replicare alcune funzionalità dell'applicazione <a href="https://www.konami.com/games/eu/it/products/yugioh_neuron/" target="_blank">Yu-Gi-Oh! NEURON</a> rilasciata per dispositivi cellulari nel 2020. </h2>
            <h4>Nessun aggiornamento previsto nel futuro.</h4>
        </div>
    </div>
  )
}

export default About
