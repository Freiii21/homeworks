import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import s from './HW6.module.css'

function HW6() {
    const [value, setValue] = useState<string>('')

    const save = () => {
        saveState<string>('editable-span-value', value)
    }
    const restore = () => {
        const newState = restoreState<string>('editable-span-value', value);
        setValue(newState);
    }

    return (
        <div>
            <hr/>
            <div className={s.title}>homeworks 6</div>

            {/*should work (должно работать)*/}
            <div>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <div className={s.buttons}>
                <SuperButton onClick={save} style={{backgroundColor:"cadetblue", borderColor:"white"}}>save</SuperButton>
                <SuperButton onClick={restore} style={{backgroundColor:"cadetblue", borderColor:"white"}}>restore</SuperButton>
            </div>

            {/*<hr/>*/}
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
