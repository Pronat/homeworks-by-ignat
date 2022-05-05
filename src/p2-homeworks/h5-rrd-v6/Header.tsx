import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from "./Header.module.css"

function Header() {
    return (
        <div>
            {/*// add NavLinks*/}
            <NavLink to={PATH.PRE_JUNIOR} className={s.color} activeClassName={s.active}>pre-junior</NavLink>---
            <NavLink to={PATH.JUNIOR}>junior</NavLink>---
            <NavLink to={PATH.JUNIOR_PLUS}>junior+</NavLink>---
        </div>
    )
}

export default Header
