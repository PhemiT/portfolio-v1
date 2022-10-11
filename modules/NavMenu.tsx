import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { NavContext } from '../helpers/NavContext';

const linkItems: {label:string; key: string}[] = [
    {label: "Home", key: "#head"},
    {label: "About", key: "#about"},
    {label:"Work", key: "#work"},
    {label: "Contact", key: "#contact"}
]

const NavMenu = () => {
    const {menuActive} = useContext(NavContext)
    const [menuToggled, setMenuToggled] = useState(false)

    useEffect(() => {
      menuActive ? setMenuToggled(true) : null
    }, [menuActive])

  return (
    <div className={`nav-menu ${menuToggled === true ? '' : 'display-none'} ${menuActive ? 'nav-menu bounce-in-bottom' : `bounce-out-top`} `}>
                {linkItems.map((item) => {
                    return (
                        <a 
                        key={item.key}
                        href={item.key} 
                        className='gradient-text'
                        >
                          {item.label}
                        </a>
                    )
                })}
    </div>
  )
}

export default NavMenu