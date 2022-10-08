import { useContext, useState } from "react"
import { NavContext } from "../helpers/NavContext"
import Icon from "../components/Icon"
import ICONS from "../constants/ICONS"
import { useScrollPosition } from "../hooks/useScrollPosition"

const Nav = () => {
    const {menuActive, setMenuActive} = useContext(NavContext)
    const scrollPosition = useScrollPosition()
    const changeStyle = scrollPosition > 200
    const toggleMenu = () => {
        setMenuActive(!menuActive)
        console.log(menuActive)
    }

   
    return (
        <div className={`folio-nav mg-container ${changeStyle ? 'scrolled slide-in-top' : ''} ${menuActive ? 'position-static' : ''}`}>
            <div className="logo">
                <h3>{/* <Icon icon={ICONS.codelogo} size={25} color="#333332" /> */} O.O.</h3>
            </div>
            <div className="links">
               <span className="menu-btn" onClick={toggleMenu} >
                    <Icon icon={ICONS.menu} />
                </span>
            </div>
            
        </div>
    )
}

export default Nav