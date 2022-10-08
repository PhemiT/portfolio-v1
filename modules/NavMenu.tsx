import React, { useState } from 'react'
import ICONS from '../constants/ICONS';
import Icon from '../components/Icon';
import { useContext } from 'react';
import { NavContext } from '../helpers/NavContext';

const linkItems: {label:string; key: string}[] = [
    {label: "Home", key: "#home"},
    {label: "About", key: "#about"},
    {label:"Work", key: "#work"},
    {label: "Contact", key: "#contact"}
]

const NavMenu = () => {
    const {menuActive} = useContext(NavContext)
    const [hoverTrue, setHoverTrue] = useState(false)

  return (
    <div className={`nav-menu ${menuActive ? 'bounce-in-bottom' : 'roll-out-left'} `}>
                {linkItems.map((item) => {
                    return (
                        <a href={item.key} className={`${hoverTrue ? 'wobble-hor-bottom' : ''}`} >{item.label}</a>
                    )
                })}
    </div>
  )
}

export default NavMenu