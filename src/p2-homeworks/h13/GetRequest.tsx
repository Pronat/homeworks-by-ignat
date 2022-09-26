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
    const [error, setError] = useState<any>(null)
    const getFromButton = () => {
        axios.post<RootObject>("https://neko-cafe-back.herokuapp.com/auth/test", {success: value})
            .then((res) => {
                setState(res.data)
                console.log(res.data.errorText)
                setError(res.data.errorText)
            })
            .catch((error) => {
                setError(error.message)
                console.log(error.message)
            })
    }

    return (
        <div>
            <div>
                <input type={"checkbox"} checked={value} onChange={(e) => setValue(e.currentTarget.checked)}/>
                <button onClick={getFromButton}>axios.post</button>
            </div>
            {error}
        </div>
    )
}

