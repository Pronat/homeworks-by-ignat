import React, {ChangeEvent, Dispatch, SetStateAction} from 'react'
import {Box, Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    // const setValue1Handler = (e: ChangeEvent<{}>, value: number) => {
    //         setValue1(+e.currentTarget.value)
    //     }

    //Array.isArray(value)
    return (
        <>
            <Box width={300}>
                <Slider
                    //defaultValue={70}
                    value={value}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    // onChange={(e: ChangeEvent<{}>, value: number | number[]) => {
                    //     setValue1(34)}}
                    // onChangeRange=(проверка number[] выше)
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
//