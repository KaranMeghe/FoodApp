import { createContext, useContext, useEffect, useState } from "react";
import SearchInput from "../components/Restaurant/SearchInput";
import { filterNonVeg as filterNonVegUtil, filterVeg as filterVegUtil, refreshAllMenu as refreshAllMenuUtil } from "../utils/config";


const MenuContext = createContext();

export const useMenuContext = () => {
    return useContext(MenuContext); // Custom Hook To Use The Context
};

export const MenuProvider = ({ children, resData }) => {
    const [menu, setMenu] = useState([]);
    const [filteredMenu, setFilteredMenu] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    console.log("Fm", filteredMenu);

    const setData = (resData) => {
        setMenu(resData || []);
        setFilteredMenu(resData || []);
    };



    const filterVeg = () => filterVegUtil(filteredMenu, setMenu);
    const filterNonVeg = () => filterNonVegUtil(filteredMenu, setMenu);
    const refreshAllMenu = () => refreshAllMenuUtil(filteredMenu, setMenu);


    return (
        <MenuContext.Provider value={{
            menu, setMenu, filteredMenu, setData, filterVeg, filterNonVeg, refreshAllMenu, searchInput, setSearchInput,
        }} >
            {children}
        </MenuContext.Provider>
    );
};