import React, {ChangeEvent, DetailedHTMLProps, Dispatch, InputHTMLAttributes, SetStateAction} from 'react'
import s from './SuperRange.module.css'
import {Box, Slider} from "@material-ui/core";

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type SuperRangePropsType = DefaultInputPropsType & { // и + ещё пропсы которых нет в стандартном инпуте
    onChangeRange?: (value: number) => void
    setValue1: Dispatch<SetStateAction<number>>
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeRange,
        className,
        setValue1,
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e) // сохраняем старую функциональность

        onChangeRange && onChangeRange(+e.currentTarget.value)
    }

    const finalRangeClassName = `${s.range} ${className ? className : ''}`

    const setValue1Handler = (e: ChangeEvent<{}>, value: number | number[]) => {
        setValue1(45)
    }


    return (
        <>
            <input
                type={'range'}
                onChange={onChangeCallback}
                className={finalRangeClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (value например там внутри)
            />
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

export default SuperRange
