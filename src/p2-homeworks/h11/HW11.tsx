import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'



function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    //функция, принимает массив двух чисел и вызов двух setState с передачей туда нужных чисел (SuperDoubleRange)
    //и сетаем setValue1, setValue2
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={setValue1}
                    // сделать так чтоб value1 изменялось
                />
                <span>{value2}</span>
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                    value={[value1, value2]}
                    setValue1={setValue1}
                    setValue2={setValue2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
