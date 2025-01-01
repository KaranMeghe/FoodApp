
// filter veg
export const filterVeg = (filteredMenu, setMenu) => {
    const vegMenu = filteredMenu.map((menu) => {
        const categories = menu?.card?.card?.categories?.map((category) => {
            const filterCategories = category?.itemCards?.filter((item) => {
                return item?.card?.info?.isVeg;
            });
            return { ...category, itemCards: filterCategories || [] };
        });
        // console.log("veg", categories);
        const itemCards = menu?.card?.card?.itemCards?.filter((item) => item?.card?.info?.isVeg) || [];


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

    setMenu(vegMenu);

};

// filter Non veg
export const filterNonVeg = (filteredMenu, setMenu) => {
    const nonVegMenu = filteredMenu.map((menu) => {
        const categories = menu?.card?.card?.categories?.map((category) => {
            const filteredCategories = category?.itemCards?.filter((item) => !item?.card?.info.isVeg);
            return { ...category, itemCards: filteredCategories || [] };
        });
        console.log("NVC", categories);

        const itemCards = menu?.card?.card?.itemCards?.filter((item) => !item?.card?.info?.isVeg);

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
    console.log("Nonveg", nonVegMenu);
    setMenu(nonVegMenu);
};

//   Referesh
export const refreshAllMenu = (filteredMenu, setMenu) => {
    const allMenu = filteredMenu.map((menu) => {
        const categories = menu?.card?.card?.categories?.map((category) => {
            const resetCategories = category.itemCards;
            return { ...category, itemCards: resetCategories };
        });

        const itemCards = menu?.card?.card?.itemCards;

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

    setMenu(allMenu);
};
