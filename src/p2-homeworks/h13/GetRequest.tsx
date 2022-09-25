import axios from "axios";
import {useEffect, useState} from "react";

export type RootObject = {
    errorText: string;
    info: string;
    yourBody: {
        success: boolean;
    };
    yourQuery: {};
}


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
        <div>
            <input type={"checkbox"} checked={value} onChange={(e) => setValue(e.currentTarget.checked)}/>
            <button onClick={getFromButton}>axios.post</button>
            <div>{state}</div>


        </div>

    </div>
}

