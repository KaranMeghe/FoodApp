import { useEffect, useState } from 'react';
import { MenuAccordion, MenuFilter } from "../index";
import { IMG_CDN_URL } from '../../utils/config';
import SearchInput from './SearchInput';
import { useMenuContext } from '../../Context/MenuContex';

const RestMenu = ({ resData }) => {
    const [searchInput, setSearchInput] = useState("");
    const { menu, setData } = useMenuContext();

    // Safely access cards and handle any missing data
    const cards = resData?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => card?.card?.card?.title) || [];

    useEffect(() => {
        setData(cards);
    }, []);

    console.log("RestMenuData:-", resData);
    console.log("Menu", menu);

    const handleChange = (e) => setSearchInput(e.target.value);


    return (
        <section id="menu" className="flex flex-col w-9/12">
            <div id="search" className="flex flex-col gap-4">
                <SearchInput value={searchInput} onChange={handleChange} />
                <MenuFilter />
                {menu.map((card) => {
                    const categories = card?.card?.card?.categories || [];
                    const itemCards = card?.card?.card?.itemCards || [];
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
