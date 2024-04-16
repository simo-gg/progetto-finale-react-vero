import './App.css';
import Duel from './pages/Calculator/Duel/Duel'
import Footer from './common/Footer/Footer'
import Search from './pages/Deck/Search/Search'
import About from './pages/About/About'
import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  const [background_img, setBgImg] = React.useState("")
  const [deck, setDeck] = React.useState([])

  const [hp,setHp] = React.useState([8000, 8000])
  const [operand, setOperand] = React.useState("")
  const [operation, setOperation] = React.useState(2)
  const [chosen, setChosen] = React.useState(0)
  const [state_array, setStateArray] = React.useState([[8000,8000]])

  const [to_search,setToSearch] = React.useState("")
  const [showed_cards,setShowedCards] = React.useState([])
  const [selected_card,setSelectedCard] = React.useState("")
  const [selected_card_art, setCardArt] = React.useState("")
  const [wikiLink, setWikiLink] = React.useState("")

  let app_status = {
    background_img : background_img,
    setBgImg : setBgImg,
    deck : deck,
    setDeck : setDeck,

    hp : hp,
    setHp : setHp,
    operand : operand,
    setOperand : setOperand,
    operation : operation,
    setOperation : setOperation,
    chosen : chosen,
    setChosen : setChosen,
    state_array : state_array,
    setStateArray : setStateArray,

    to_search : to_search,
    setToSearch : setToSearch,
    showed_cards : showed_cards,
    setShowedCards : setShowedCards,
    selected_card : selected_card,
    setSelectedCard : setSelectedCard,
    selected_card_art : selected_card_art,
    setCardArt : setCardArt,
    wikiLink : wikiLink,
    setWikiLink : setWikiLink,

  }


  return (
      <div className='App' style={{backgroundImage : background_img, backgroundColor : 'transparent'}}>
        <Router>
          <Routes>
            <Route path='/' element={<Duel app_status={app_status}/>} />
            <Route path='/search' element={<Search data={[background_img, setBgImg]} app_status={app_status}/>} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;