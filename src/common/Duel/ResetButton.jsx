import React from 'react'
import img from "../Images/calc_button_reset.png"
import './ResetButton.css'

const ResetButton = (props) => {
    let state_array = props.state.state_array
    let setStateArray = props.state.setar

    let setHp = props.state.sethp

    const handleClick = () => {
        setHp([8000,8000])
        setStateArray([[8000,8000]])
    }
    return (
        <div>
            <button onClick={handleClick}>
                <img src={img} />
            </button>
            <h3>Reset</h3>
        </div>
    )
}

export default ResetButton