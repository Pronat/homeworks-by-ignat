import React, {ChangeEventHandler, MouseEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e:ChangeEventHandler<HTMLInputElement>)=>void // need to fix any
    addUser: (e:MouseEventHandler<HTMLButtonElement>)=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div className={s.greeting}>
            <input
                value={name}
                onChange={setNameCallback}
                className={inputClass}/>
                onKeyPress={onEnter}
                onBlur={setNameCallback}
            <div className={s.error}>{error}</div>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <div className={s.count}>{totalUsers}</div>
        </div>

    )
}

export default Greeting
