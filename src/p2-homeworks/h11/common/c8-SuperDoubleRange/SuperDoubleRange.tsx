import React from 'react'
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

    return (
        <>
            <Box width={300}>
                <Slider
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                />
            </Box>
        </>
    )
}

export default SuperDoubleRange
//