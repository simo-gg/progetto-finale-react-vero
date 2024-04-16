import React from 'react'
import './Hp.css'

const Hp = (props) => {
    let hp = props.data
    let alignment = props.alignment

    let operand = props.operation[0]
    let operation = props.operation[1]

    let current = (props.current == 0) ? "left" : "right"
    let user = ""
    if (current == alignment) {
        user = "<"
    }

    let toWrite = "";
    if (operand != "" && current == alignment) {
        let sign = "-"
        if (operation < 2)
            sign = "+"
        toWrite += "\n" + sign + " " + operand
    }

    const handleClick = () => {
        props.setch(0)
        if (alignment == "right") {
            props.setch(1)
        }
    }

    return (
        <div>
            <button id={alignment} className={alignment} onClick={handleClick}>
                {hp}{user}<br/>{toWrite}
            </button>
        </div>
    )
}

export default Hp
