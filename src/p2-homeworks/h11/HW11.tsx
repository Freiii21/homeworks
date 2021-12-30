import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(50)
    const [value2, setValue2] = useState(75)

    const onChangeRange = (value:number) => {
        setValue1(value);
    }

    const onChangeRange2 = (value: [number, number]) => {
        if(value[0] !== value1){
            setValue1(value[0]);
        }
        if(value[1] !== value2){
            setValue2(value[1]);
        }
    }

    return (
        <div className={s.common}>
            <hr/>
            <div className={s.title}>homeworks 11</div>

            <div className={s.inputField}>
                <span className={s.value1_1}>{value1}</span>
                <SuperRange
                    onChangeRange={onChangeRange}
                    value1={value1}
                />
            </div>

            <div className={s.inputField}>
                <span className={s.value1_2}>{value1}</span>
                <SuperDoubleRange
                    value={[value1,value2]}
                    onChangeRange={onChangeRange2}
                />
                <span className={s.value2}>{value2}</span>
            </div>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
