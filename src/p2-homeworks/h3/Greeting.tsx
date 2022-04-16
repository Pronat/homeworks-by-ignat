import React, {ChangeEventHandler, KeyboardEventHandler} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: ChangeEventHandler<HTMLInputElement> // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: KeyboardEventHandler<HTMLInputElement>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.input// need to fix with (?:)

    return (
        <div className={s.greeting}>
            <input value={name}
                   onChange={setNameCallback}
                   className={inputClass}
                   onKeyPress={onKeyPressHandler}
                   onBlur={setNameCallback}
            />

            <div className={s.error}>{error}</div>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
