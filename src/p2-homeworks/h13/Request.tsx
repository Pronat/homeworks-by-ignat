import axios from "axios";
import {useState} from "react";

export const Request = () => {
    const instance = axios.create({
        baseURL: "https://neko-cafe-back.herokuapp.com/auth/test",
    })
    return (
        <>
            <input type={"checkbox"}/>
            <button>button</button>
        </>
    )
}

export const GetRequest = () => {
    const [state, setState] = useState<any>(null)

}