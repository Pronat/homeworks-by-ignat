import React from 'react'

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
            <input
            type={'range'}
            // onChange={onChangeCallback}
            // className={finalRangeClassName}
            //
            // {...restProps}
        />
        </>
    )
}

export default SuperDoubleRange
//