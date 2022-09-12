import React, {ChangeEvent, Dispatch, SetStateAction} from 'react'
import {Box, Slider} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    // onChangeRange?: (value: [number, number]) => void
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    setValue1: Dispatch<SetStateAction<number>>
    setValue2: Dispatch<SetStateAction<number>>
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        setValue1,
        setValue2,
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки


    //Array.isArray(value)
    const onChangeCallback = (e: ChangeEvent<{}>, value: number | number[]) => {
        if (Array.isArray(value)) {
            onChangeRange && onChangeRange(+e.currentTarget.value)
        }
    }

    return (
        <>
            <Box width={300}>
                <Slider
                    //defaultValue={70}
                    value={value}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                    onChange={onChangeCallback}
                    // onChangeRange=(проверка number[] выше)
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
//