import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from './RoutesComp'
import s from './Header.module.css'

function Header() {

    return (
        <div className={s.all}>
            <div className={s.items}>
                <NavLink to={PATH.PRE_JUNIOR}
                         className={({isActive}) => (isActive ? `${s.activeClass} ${s.links}` : s.links)}>Pre-junior </NavLink>
                <NavLink to={PATH.JUNIOR}
                         className={({isActive}) => (isActive ? `${s.activeClass} ${s.links}` : s.links)}>Junior </NavLink>
                <NavLink to={PATH.JUNIOR_PLUS}
                         className={({isActive}) => (isActive ? `${s.activeClass} ${s.links}` : s.links)}>Junior+ </NavLink>
            </div>
            <img src={'https://pngimg.com/uploads/burger_sandwich/burger_sandwich_PNG4135.png'} className={s.icon}/>
        </div>
    )
}

export default Header
