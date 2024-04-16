import React from 'react'
import './Card.css'
import '../../App.css'

const Card = (props) => {
    
    let data = props.data
    let img_status = props.status
    let selected_card = img_status.selected_card
    let setSelectedCard = img_status.setsc

    let small_icon = data.card_images[0].image_url_small
    let big_icon = data.card_images[0].image_url
    let art_icon = data.card_images[0].image_url_cropped
    let wiki_link = data.ygoprodeck_url

    let handleClick = () => {
        setSelectedCard(big_icon)
        props.status.setscart(art_icon)
        props.status.setwk(wiki_link)
        console.log(wiki_link)
    }

    return (
        <img className='simg' src={small_icon} onClick={handleClick}/>
    )
}

export default Card
