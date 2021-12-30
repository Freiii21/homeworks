import React, {ChangeEvent} from 'react'
import Slider from '@material-ui/core/Slider';

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
    const onChange = (e:ChangeEvent<{}>, newValue: number | number[]) => {
        debugger;
        if (Array.isArray(newValue)){
            onChangeRange && onChangeRange([newValue[0],newValue[1]])
        }
    }

    return (
        <>
            <Slider
                value={value}
                onChange={onChange}
                // valueLabelDisplay="auto"
                // aria-labelledby="range-slider"
                // getAriaValueText={valuetext}
            />
        </>
    )
}

export default SuperDoubleRange
