import { createContext, useContext, useEffect, useState } from "react";

const MenuContext = createContext();

export const useMenuContext = () => {
    return useContext(MenuContext); // Custom Hook To Use The Context
};

export const MenuProvider = ({ children, resData }) => {
    const [menu, setMenu] = useState([]);
    const [filteredMenu, setFilteredMenu] = useState([]);

    const setData = (resData) => {
        return setMenu(resData);
    };

    return (
        <MenuContext.Provider value={{
            menu, filteredMenu, setData
        }} >
            {children}
        </MenuContext.Provider>
    );
};