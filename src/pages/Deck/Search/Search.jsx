import React from 'react'
import Card from './../../../common/Search/Card'
import cards from './../../../common/Images/cardinfo.php.json'
import './Search.css'


const Search = (props) => {
  let tmp = []
  var i = 0;

  let img_status = {
    selected_card : props.app_status.selected_card,
    setsc         : props.app_status.setSelectedCard,
    scart         : props.app_status.selected_card_art,
    setscart      : props.app_status.setCardArt,
    wiki          : props.app_status.wikiLink,
    setwk         : props.app_status.setWikiLink,
  }
  

  const setSearch = () => {
    tmp = []
    let id =document.getElementById("searchboxid");
    var i = 0;
    if (id != null) {
      var x = id.value.toLowerCase()
      if (x !== "") {
        for (let index = 0; index < cards.data.length; index++) {
          const element = cards.data[index].name.toLowerCase();
          if (element.match(x) != null)
            tmp[i++] = cards.data[index]
        }
      }
    }
    props.app_status.setToSearch(id.value)
    props.app_status.setShowedCards(tmp)
  }

  const setBackgroundImage = () => {
    props.data[1](props.app_status.selected_card_art)
    document.body.style.backgroundImage = "url('" + props.app_status.selected_card_art + "')";
    document.body.style.backgroundSize = "cover"
    document.body.style.filter = '1'
    console.log(props.data[0])
  }

  return (
    <div>
      <img className='big_card' src={props.app_status.selected_card} alt="Choose a card to show it"/>
      <div className="searchedCardsBox"> 
        {
            props.app_status.showed_cards.map(item => <Card data={item} status={img_status}/>)
        }
      </div>
      <button className='setBg_button' onClick={setBackgroundImage}>Set as BG</button>
      <a href={props.app_status.wikiLink} target="_blank"><button className='wiki_button' >Open Wiki</button></a>

      <div className='sticky'>
        <input className="searchBox" id="searchboxid" type="text" placeholder="Search Card"></input>
        <button className="sbutton" onClick={setSearch}>Search</button>
      </div>
    </div>
  )
}

export default Search
