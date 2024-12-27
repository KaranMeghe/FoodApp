import { useState } from 'react';
import { MenuAccordion, MenuFilter } from "../index";
import { IMG_CDN_URL } from '../../utils/config';
import SearchInput from './SearchInput';

const RestMenu = ({ resData }) => {
    const [searchInput, setSearchInput] = useState("");

    // Safely access cards and handle any missing data
    const cards = resData?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((card) => card?.card?.card?.title) || [];
    console.log("Cards:", cards);

    const handleChange = (e) => setSearchInput(e.target.value);

    // Function to safely access categories and itemCards 
    const getCategoryItemCards = (category) => category?.card?.card?.categories || [];
    const getItemCards = (card) => card?.card?.card?.itemCards || [];

    return (
        <section id="menu" className="flex flex-col w-9/12">
            <div id="search" className="flex flex-col gap-4">
                <SearchInput value={searchInput} onChange={handleChange} />
                <MenuFilter />
                {cards.map((card) => {
                    const categories = getCategoryItemCards(card);
                    const itemCards = getItemCards(card);
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
