import axios from "axios";
import {useEffect, useState} from "react";

export const Request = () => {
    const instance = axios.create({
        baseURL: "https://neko-cafe-back.herokuapp.com/auth/test",
    })
    return (
        <>
            <input type={"checkbox"}/>
            <button onClick={GetRequest}>button</button>
        </>
    )
}

export const GetRequest = () => {
    const [state, setState] = useState<any>(null)
    useEffect( () => {
      let promise = axios.get("https://neko-cafe-back.herokuapp.com/auth/test")
        promise.then( (res) => {
            setState(res.data)
            alert(state)
        })
    })
}