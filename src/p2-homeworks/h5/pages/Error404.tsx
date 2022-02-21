import React from 'react'
import pageNotFound from './../../../assets/images/404.png'
import s from './Error404.module.css'

function Error404() {
    return (
        <div className={s.common}>
            <img src={pageNotFound} className={s.image}/>
        </div>
    )
}

export default Error404
