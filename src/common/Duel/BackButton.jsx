import React from 'react'
import './ResetButton.css'
import img from "../Images/calc_button_back.png"

const BackButton = (props) => {

    let state_array = props.state.state_array
    let setStateArray = props.state.setar

    let setHp = props.state.sethp
    const handleClick = () => {
      if (state_array.length > 1) {
        let tmp = state_array.pop()
        console.log(state_array)
        setHp(tmp)
        setStateArray(state_array)
      }
    }

  return (
    <div>
        <button onClick={handleClick}>
            <img src={img} />
        </button>
        <h3>⠀Back</h3>
    </div>
  )
}

export default BackButton
