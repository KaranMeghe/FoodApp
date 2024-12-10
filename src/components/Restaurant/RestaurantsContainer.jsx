import { useState, useEffect } from "react";
import { fetchRestaurantList } from "../../utils/config";
import { RestaruntCard } from "../index";

const RestaurantsContainer = () => {
    const [loading, setLoading] = useState(true);
    const [restaurantList, setRestaruntList] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchList = async () => {
            try {
                setLoading(true);
                const data = await fetchRestaurantList();
                setRestaruntList(data?.data?.data?.cards);
                console.log(restaurantList);
            } catch (err) {
                console.log(`Error Fetching restarunt list: ${err.message}`);
                setError("Failed to fetch restaurants. Please try again later.");
            } finally {
                setLoading(false);
            }
        };
        fetchList();
    }, []); // Empty dependency array ensures this runs only once on mount

    if (loading) return <p>Loading....</p>;
    if (error) return <p>{error}</p>;

    return <section className="flex justify-center flex-wrap gap-6 my-10">
        {restaurantList.map((res) => (
            res?.card?.card?.info && <RestaruntCard
                key={res?.card?.card?.info?.id}
                info={res?.card?.card?.info}
            />
        ))}
    </section>;
};

export default RestaurantsContainer;

// min-width: min-content;