import React, {Dispatch, SetStateAction} from 'react'
import {Box, Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    setValue1: Dispatch<SetStateAction<number>>
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        setValue1,
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const setValue1Handler = (e: number) => {
            setValue1(e.currentTarget.value)
        }


    return (
        <>
            <Box width={300}>
                <Slider
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={setValue1Handler}
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
//