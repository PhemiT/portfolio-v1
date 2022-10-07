import { useState } from "react"
import Icon from "../components/Icon"
import ICONS from "../constants/ICONS"
import { useScrollPosition } from "../hooks/useScrollPosition"

const linkItems: {label:string; key: string}[] = [
    {label: "Home", key: "#home"},
    {label: "About", key: "#about"},
    {label:"Work", key: "#work"},
    {label: "Contact", key: "#contact"}
]

const Nav = () => {
    const scrollPosition = useScrollPosition()
    const changeStyle = scrollPosition > 200
    const [menuActive, setMenuActive] = useState(false)

    const toggleMenu = () => {
        setMenuActive(!menuActive)
    }

   
    return (
        <div className={`folio-nav mg-container ${changeStyle ? 'scrolled slide-in-top' : ''}`}>
            <div className="logo">
                <h3>{/* <Icon icon={ICONS.codelogo} size={25} color="#333332" /> */} O.O.</h3>
            </div>
            <div className="links">
               <span className="menu-btn" onClick={toggleMenu}>
                    <Icon icon={ICONS.menu} />
                </span>
            </div>
            <div className={`nav-menu ${menuActive ? '' : 'display-none'} `}>
                {linkItems.map((item) => {
                    return (
                        <a href={item.key} >{item.label}</a>
                    )
                })}
                <span className="menu-btn" onClick={toggleMenu}>
                    <Icon icon={ICONS.menu} />
                </span>
            </div>
        </div>
    )
}

export default Nav