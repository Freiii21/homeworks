import React from "react";
import s from "./HW13.module.css";
import HW12 from '../h12/HW12';
import {Request} from './request/Request';

export const HW13 = () => {
    return (
        <div className={s.common}>
            <div className={s.title}>homeworks 13</div>
            <Request />
        </div>
    )
}