import React from 'react'
import './Duel.css'
import Hp from '../../../common/Duel/Hp'
import ResetButton from '../../../common/Duel/ResetButton'
import BackButton from '../../../common/Duel/BackButton'
import buttons from '../../../common/Duel/calc-buttons.json'
import CalcButton from '../../../common/Duel/CalcButton'


const Duel = (props) => {

    let hp      = props.app_status.hp
    let operand =props.app_status.operand
    let operation =props.app_status.operation
    let chosen =props.app_status.chosen
    let state_array =props.app_status.state_array
    let setHp =props.app_status.setHp
    let setOperand =props.app_status.setOperand
    let setOperation =props.app_status.setOperation
    let setChosen = props.app_status.setChosen
    let setStateArray =props.app_status.setStateArray
        
    let state = {
        hp          : hp,
        operand     : operand,
        operation   : operation,
        chosen      : chosen,
        state_array : state_array,
        sethp       : setHp,
        setop       : setOperand,
        setip       : setOperation,
        setch       : setChosen,
        setar       : setStateArray
    }

  return (
    <div className="empty">
        

        <div className='wrapper2'>
            <div className='hp-class1'><Hp data={hp[0]} operation={[operand,operation]} current={chosen} alignment={'left'} setch={setChosen}/></div>
            <div><ResetButton state={state}></ResetButton></div>
            <div><BackButton state={state}></BackButton></div>
            <div className='hp-class2'><Hp data={hp[1]} operation={[operand,operation]} current={chosen} alignment={'right'} setch={setChosen}/></div>
        </div>
        <div className='calc-section'> 
            {
                buttons.map(item => <CalcButton data={item} app_status={props.app_status}/>)
            }
        </div>
    </div>
  )
}

export default Duel