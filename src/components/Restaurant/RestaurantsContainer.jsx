import { Filter, RestaruntCard, Shimmer } from "../index";
import useFetchRestaruntList from "../../hooks/useFetchRestaruntList";

const RestaurantsContainer = () => {
    const { loading, restaurantList, handleVegOnlyRestarunt, handleTopRatedClick, error } = useFetchRestaruntList();

    if (error) return <p>{error} </p>;

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