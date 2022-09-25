import axios from "axios";
import {useEffect, useState} from "react";

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test",
})

export const GetRequest = () => {
    const [state, setState] = useState<any>(null)
    const [value, setValue] = useState<boolean>(false)

    const getFromButton = () => {
        let promise = axios.post("https://neko-cafe-back.herokuapp.com/auth/test", {success: value})
        promise.then((res) => {
            setState(res.data)
        })
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input type={"checkbox"} checked={value} onChange={(e) => setValue(e.currentTarget.checked)}/>
            <button onClick={getFromButton}>button</button>
        </div>

    </div>


}