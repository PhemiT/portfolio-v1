import { createContext } from "react";

interface NavContextInterface {
    menuActive: Boolean;
    setMenuActive: (active: boolean) => void;
}

export const NavContext = createContext<NavContextInterface>({
    menuActive: false,
    setMenuActive(active) {
        false
    },
})