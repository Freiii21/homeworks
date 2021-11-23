import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'
import garbage from '../../assets/images/garbage.png'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.line}>
            <div className={s.name}>
                {props.affair.name}
            </div>
            <div className={s[props.affair.priority]}>
                {props.affair.priority}
            </div>
            <div>
                <input onClick={deleteCallback} type="image"
                       src={garbage}/>
            </div>
        </div>
    )
}

export default Affair
