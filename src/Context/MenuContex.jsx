import { createContext, useContext, useEffect, useState } from "react";
import { filterNonVeg as filterNonVegUtil, filterVeg as filterVegUtil, refreshAllMenu as refreshAllMenuUtil } from "../utils/config";


const MenuContext = createContext();

export const useMenuContext = () => {
    return useContext(MenuContext); // Custom Hook To Use The Context
};

export const MenuProvider = ({ children, resData }) => {
    const [menu, setMenu] = useState([]);
    const [filteredMenu, setFilteredMenu] = useState([]);

    const setData = (resData) => {
        setMenu(resData || []);
        setFilteredMenu(resData || []);
    };

    const filterVeg = () => filterVegUtil(filteredMenu, setMenu);
    const filterNonVeg = () => filterNonVegUtil(filteredMenu, setMenu);
    const refreshAllMenu = () => refreshAllMenuUtil(filteredMenu, setMenu);


    return (
        <MenuContext.Provider value={{
            menu, filteredMenu, setData, filterVeg, filterNonVeg, refreshAllMenu
        }} >
            {children}
        </MenuContext.Provider>
    );
};