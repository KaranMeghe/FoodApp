import { useState, useEffect } from "react";
import { fetchRestaurantList } from "../../utils/config";
import { Filter, RestaruntCard, Shimmer } from "../index";

const RestaurantsContainer = () => {
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

    if (error) return <p>{error}</p>;

    const handleVegOnlyRestarunt = () => {
        const updatedRestList = filteredrestaurantList.filter((res) => {
            return res?.card?.card?.info?.veg;
        });
        setRestaruntList(updatedRestList);
        console.log("ul", updatedRestList);
    };

    const handleTopRatedClick = () => {
        const updatedRestList = filteredrestaurantList.filter((res) => {
            return res?.card?.card?.info?.avgRating > 4.3;
        });
        setRestaruntList(updatedRestList);
    };


    return <section className="my-10" >
        {loading ? (<Shimmer />) : <> <Filter handleVegClick={handleVegOnlyRestarunt} handleTopRatedClick={handleTopRatedClick} />
            <div className="flex justify-center flex-wrap gap-6 my-10">
                {restaurantList.map((res) => (
                    res?.card?.card?.info && <RestaruntCard
                        key={res?.card?.card?.info?.id}
                        info={res?.card?.card?.info}
                    />
                ))}
            </div></>}
    </section>;
};

export default RestaurantsContainer;

// min-width: min-content;