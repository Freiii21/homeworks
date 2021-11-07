import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error === '' ? s.someClass : `${s.someClass} ${s.someClassError}`;
    const addUserByEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addUser();
        }
    }

    return (
        <div>
            <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={addUserByEnter}/>
            <button onClick={addUser} className={s.button}>add</button>
            <span className={s.number}>{totalUsers}</span>
            <div className={s.error}>{error}</div>
        </div>
    )
}

export default Greeting
