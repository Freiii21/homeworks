import React from "react";
import s from "./HW12.module.css";
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeAC} from './bll/themeReducer';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, string>(store => store.theme.theme); // useSelector
    const dispatch = useDispatch();
    const onChangeOption = (color: string) => {
        dispatch(changeThemeAC(color));
    };

    return (
        <div className={s[theme]}>
            <hr/>
            <div className={`${s.common} ${s[theme + '-text']}`}>
                homeworks 12
            </div>
            <div className={s.common}>
                <span className={s.settingName}>Background color:</span>
                <SuperSelect
                    options={themes}
                    value={theme}
                    onChangeOption={onChangeOption}
                    style={{backgroundColor:"antiquewhite",width:"75px",height:"30px",borderRadius:"10px",padding:"5px"}}
                />
            </div>
            <hr/>
        </div>
    );
}

export default HW12;
