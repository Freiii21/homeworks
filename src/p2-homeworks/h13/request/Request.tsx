import React, {ChangeEvent, useState} from 'react';
import {RequestAPI} from './api/RequestAPI';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';

export const Request = () => {
    const [status, setStatus] = useState(false);
    const [response, setResponse] = useState<string[]>([]);

    const onChangeCheckbox = (e: ChangeEvent<HTMLInputElement> ) => {
        const value = e.currentTarget.checked;
        setStatus(value);
    }
    const onClickButton = () => {
        RequestAPI.sendRequest(status)
            .then(res => {
                const newResponse1 = res.data.errorText;
                const newResponse2 = res.data.info;
                setResponse ([newResponse1, newResponse2]);
            })
            .catch(err => {
                const newResponse1 = err.response.data.errorText;
                const newResponse2 = err.response.data.info;
                setResponse ([newResponse1, newResponse2]);
            })
    }

    return (
        <div>
            {/*<button onClick={() => onClickButton(status)}>Send request</button>*/}
            <SuperButton onClick={onClickButton}
                         style={{backgroundColor:"darkcyan", width:"120px", marginBottom:"10px"}}
            >Send request</SuperButton>
            <SuperCheckbox checked={status} onChange={onChangeCheckbox}/>
            <div>{response[0]}</div>
            <div>{response[1]}</div>
        </div>
    )
}