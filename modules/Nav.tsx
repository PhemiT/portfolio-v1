const linkItems = [
    {label: "Home", key: "#home"},
    {label:"Work", key: "#work"},
    {label: "Resume", key: "resume"},
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
                <h3>OLUBUKUNMI OLUFEMI</h3>
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