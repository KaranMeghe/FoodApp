import { useState, useEffect, createContext } from 'react';
import { fetchRestaurantList } from '../utils/services/config';

const RestaruntContext = createContext();

const Provider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);

    useEffect(() => {
        const fetchList = async () => {
            try {
                setLoading(true);
                const data = await fetchRestaurantList();
                const list = data?.data?.data?.cards || [];
                setFilteredRestaurantList(list);
                setRestaurantList(list);
            } catch (err) {
                setError("Failed to fetch restaurants. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchList();
    }, []);

    const handleVegOnlyRestarunt = () => {
        const updatedRestList = filteredRestaurantList.filter((res) => {
            return res?.card?.card?.info?.veg;
        });
        return setRestaurantList(updatedRestList);
    };

    const handleTopRatedClick = () => {
        const updatedRestList = filteredRestaurantList.filter((res) => {
            return res?.card?.card?.info?.avgRating > 4.3;
        });
        return setRestaurantList(updatedRestList);
    };

    const handleSearch = (searchInput) => {
        const updatedList = filteredRestaurantList.filter((res) =>
            res?.card?.card?.info?.name?.toLowerCase().includes(searchInput.toLowerCase())
        );
        setRestaurantList(updatedList);
    };

    const valueToShare = {
        loading,
        error,
        restaurantList,
        filteredRestaurantList,
        setFilteredRestaurantList,
        handleVegOnlyRestarunt,
        handleTopRatedClick,
        handleSearch
    };

    return <RestaruntContext.Provider value={valueToShare}>
        {children}
    </RestaruntContext.Provider>;
};

export { Provider };
export default RestaruntContext;