
import { MenuAccordion, MenuFilter } from "../index";
import { IMG_CDN_URL } from '../../utils/services/config';
import SearchInput from './SearchInput';
import { useMenuContext } from '../../Context/MenuContex';
import useRestMenu from '../../hooks/useRestMenu';


const RestMenu = ({ resData }) => {
    const { menu, filterVeg, filterNonVeg, refreshAllMenu, searchInput } = useMenuContext();
    const { handleChange, handleSearchSumbit } = useRestMenu(resData);

    return (
        <section id="menu" className="flex flex-col w-9/12">
            <div id="search" className="flex flex-col gap-4">
                <SearchInput value={searchInput} onChange={handleChange} onSubmit={handleSearchSumbit} />
                <MenuFilter handleVegClick={filterVeg} handleNonVegClick={filterNonVeg} handleAllClick={refreshAllMenu} />
                {menu.map((card) => {
                    const categories = card?.card?.card?.categories || [];
                    const itemCards = card?.card?.card?.itemCards || [];
                    const topPick = card?.card?.card?.carousel || [];

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
