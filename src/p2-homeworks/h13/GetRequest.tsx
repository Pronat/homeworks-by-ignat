import axios from "axios";
import {useEffect, useState} from "react";

const instance = axios.create({
    baseURL: "https://neko-cafe-back.herokuapp.com/auth/test",
})

export const GetRequest = () => {
    const [state, setState] = useState<any>(null)
    const getFromButton = () => {
        let promise = axios.get("https://neko-cafe-back.herokuapp.com/auth/test")
        promise.then((res) => {
            setState(res.data)
        })
    }

    return <div>
        {JSON.stringify(state)}
        <div>
            <input type={"checkbox"}/>
            <button onClick={getFromButton}>button</button>
        </div>

    </div>


}