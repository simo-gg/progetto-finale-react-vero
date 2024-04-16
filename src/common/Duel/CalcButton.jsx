import React from 'react'
import './CalcButton.css'

const CalcButton = (props) => {

    let type = props.data.type
    let item = props.data.item
    
    var hp1 = props.app_status.hp[0]
    var hp2 = props.app_status.hp[1]
    var operand = props.app_status.operand
    var operation = props.app_status.operation
    var chosen = props.app_status.chosen
    var state_array = props.app_status.state_array

    const handleClick = () => {
        switch (type) {
            case 0:
                props.app_status.setOperand("")
                props.app_status.setOperation(2)
            break;
            case 1:
                if (operand == "" && item == "0") {}
                else props.app_status.setOperand(operand + item)
            break;
            case 2:
                //do nothing
                console.log(props.app_status)
            break;
            case 3:
                props.app_status.setOperation(1)
                props.app_status.setOperand("")
                console.log(operation)
            break;
            case 6:
                props.app_status.setOperation(2)
                props.app_status.setOperand("")
                console.log(operation)
            break;
            case 4:
                props.app_status.setOperation(2)
                props.app_status.setOperand(Math.ceil(props.app_status.hp[chosen] / 2))
                console.log(operation)
            break;
            case 5:
                let tmp;
                if (operation == 2) {
                    if (chosen == 0)
                        tmp = [hp1 - Number(operand), hp2]
                    else tmp = [hp1, hp2 - Number(operand)]
                } else {
                    if (chosen == 0)
                        tmp = [hp1 + Number(operand), hp2]
                    else tmp = [hp1, hp2 + Number(operand)]
                }
                tmp[0] = (tmp[0] < 0 ) ? 0 : ((tmp[0] > 99999) ? 99999 : tmp[0])
                tmp[1] = (tmp[0] < 0 ) ? 0 : ((tmp[1] > 99999) ? 99999 : tmp[1])
                props.app_status.setHp(tmp)
                if (operand != "") {
                    props.app_status.setStateArray(state_array)
                    state_array[state_array.length] = [hp1, hp2]
                }
                props.app_status.setOperation(2)
                props.app_status.setOperand("")
            break;
        }
    }

    return (
        <div>
            <button id={item} onClick={handleClick} className='calc-button'>
                {item}
            </button>
        </div>
    )
}

export default CalcButton
