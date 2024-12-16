import { useState, useEffect } from 'react';
import { fetchRestaurantList } from '../utils/config';

const useFetchRestaruntList = () => {
    const [loading, setLoading] = useState(true);
    const [restaurantList, setRestaruntList] = useState([]);
    const [filteredrestaurantList, setfilteredrestaurantList] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchList = async () => {
            try {
                setLoading(true);
                const data = await fetchRestaurantList();
                setRestaruntList(data?.data?.data?.cards);
                setfilteredrestaurantList(data?.data?.data?.cards);
                console.log(`rl`, restaurantList);
                console.log('flr', filteredrestaurantList);
            } catch (err) {
                console.log(`Error Fetching restarunt list: ${err.message}`);
                setError("Failed to fetch restaurants. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchList();
    }, []); // Empty dependency array ensures this runs only once on mount

    const handleVegOnlyRestarunt = () => {
        const updatedRestList = filteredrestaurantList.filter((res) => {
            return res?.card?.card?.info?.veg;
        });
        console.log("ul", updatedRestList);
        return setRestaruntList(updatedRestList);
    };

    const handleTopRatedClick = () => {
        const updatedRestList = filteredrestaurantList.filter((res) => {
            return res?.card?.card?.info?.avgRating > 4.3;
        });
        return setRestaruntList(updatedRestList);
    };

    return { loading, setLoading, restaurantList, setRestaruntList, filteredrestaurantList, setfilteredrestaurantList, error, setError, handleTopRatedClick, handleVegOnlyRestarunt };
};

export default useFetchRestaruntList;