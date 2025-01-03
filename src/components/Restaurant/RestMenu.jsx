import { useEffect } from 'react';
import { MenuAccordion, MenuFilter, SearchItems } from "../index";
import { IMG_CDN_URL } from '../../utils/services/config';
import SearchInput from './SearchInput';
import { useMenuContext } from '../../Context/MenuContex';

const RestMenu = ({ resData }) => {
    const { menu, setMenu, filteredMenu, setData, filterVeg, filterNonVeg, refreshAllMenu, searchInput, setSearchInput } = useMenuContext();

    // Safely access cards and handle any missing data
    const cards = resData?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => card?.card?.card?.title) || [];

    useEffect(() => {
        setData(cards);
    }, []);

    console.log("RestMenuData:-", resData);
    console.log("Menu", menu);

    const handleSearchMenu = (searchInput) => {
        const lowerCasedInput = typeof searchInput === "string" ? searchInput.toLowerCase() : "";

        const searchMenu = filteredMenu.map((menu) => {
            const categories = menu?.card?.card?.categories?.map((category) => {

                const filterCategories = category?.itemCards?.filter((item) => {
                    const itemName = item?.card?.info?.name?.toLowerCase() || ""; // Ensure name is a string
                    return itemName.includes(lowerCasedInput);
                });
                return { ...category, itemCards: filterCategories || [] };
            });
            // console.log("veg", categories);
            const itemCards = menu?.card?.card?.itemCards?.filter((item) => {
                const itemName = item?.card?.info?.name?.toLowerCase() || ""; // Ensure name is a string
                return itemName.includes(lowerCasedInput);
            });

            return {
                ...menu,
                card: {
                    ...menu.card,
                    card: {
                        ...menu.card.card,
                        itemCards: itemCards,
                        categories: categories
                    }
                }
            };
        });
        return setMenu(searchMenu);

    };

    const handleChange = (e) => {
        setSearchInput(e.target.value);
        console.log(searchInput);
        handleSearchMenu(searchInput);
    };

    const handleSearchSumbit = (e) => {
        e.preventDefault();
    };




    return (
        <section id="menu" className="flex flex-col w-9/12">
            <div id="search" className="flex flex-col gap-4">
                <SearchInput value={searchInput} onChange={handleChange} onSubmit={handleSearchSumbit} />
                <MenuFilter handleVegClick={filterVeg} handleNonVegClick={filterNonVeg} handleAllClick={refreshAllMenu} />
                {menu.map((card) => {
                    const categories = card?.card?.card?.categories || [];
                    const itemCards = card?.card?.card?.itemCards || [];
                    const topPick = card?.card?.card?.carousel || [];
                    console.log("Categpries", categories);
                    console.log("Item-Cards", itemCards);
                    return (
                        <MenuAccordion
                            key={card.card.card.title}
                            title={card.card.card.title}
                            itemCards={itemCards}
                            categories={categories}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default RestMenu;
