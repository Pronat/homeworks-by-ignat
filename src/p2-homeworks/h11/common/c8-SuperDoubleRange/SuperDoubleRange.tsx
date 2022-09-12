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


    //Array.isArray(value)
    const onChangeCallback = () => {
        if (Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
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