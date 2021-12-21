import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true);
    }
    const onMouseLeave = () => {
        setShow(false);
    }

    const stringTime = date?.toLocaleTimeString() || <div>Click start...</div>
    const stringDate = date?.toLocaleDateString() || <br/>

    return (
        <div>
            <div style={{marginLeft: '10px',marginBottom:"10px",fontWeight:"bold", color:"green",width:"100px"}}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}

                >
                    {stringTime}
                </div>

                {show ? (
                    <div>
                        {stringDate}
                    </div>
                ) : (
                    <br/>
                )}
            </div>

            <SuperButton onClick={start} style={{backgroundColor:"snow"}}>start</SuperButton>
            <SuperButton onClick={stop} style={{backgroundColor:"snow"}}>stop</SuperButton>

        </div>
    )
}

export default Clock
