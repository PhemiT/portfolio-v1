import Icon from "../components/Icon"
import ICONS from "../constants/ICONS"

const linkItems = [
    {label: "Home", key: "#home"},
    {label: "About", key: "#about"},
    {label:"Work", key: "#work"},
    {label: "Contact", key: "#contact"}
]

const Nav = () => {
    /* const [isActive, setIsActive] = useState(false)

    const setAsActive = () => {
        setIsActive(() => false)
        setIsActive(() => true)
    } */

    return (
        <div className="folio-nav">
            <div className="logo">
                <h3><Icon icon={ICONS.codelogo} size={25} color="#333332" /> OLUBUKUNMI OLUFEMI</h3>
            </div>
            <div className="links">
                {linkItems.map((item) => {
                    return (
                        <a href={item.key} className="">{item.label}</a>
                    )
                })}
            </div>
        </div>
    )
}

export default Nav