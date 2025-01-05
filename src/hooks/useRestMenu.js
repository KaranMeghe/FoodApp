import { useMenuContext } from "../Context/MenuContex";
import { useEffect } from "react";

const useRestMenu = (resData) => {
    const { setMenu, setData, filteredMenu, searchInput, setSearchInput, handleSearchMenu } = useMenuContext();

    // Safely access cards and handle any missing data
    const cards = resData?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => card?.card?.card?.title) || [];

    useEffect(() => {
        setData(cards);
    }, []);

    useEffect(() => {
        handleSearchMenu(filteredMenu, setMenu, searchInput);
    }, [searchInput, filteredMenu]);

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        console.log(searchInput);
    };

    const handleSearchSumbit = (e) => {
        e.preventDefault();
    };

    return { handleChange, handleSearchSumbit };

};
export default useRestMenu;