import { useContext } from "react";
import RestaruntContext from "../../Context/RestaruntContext";
import { Filter, RestaruntCard, Shimmer } from "../index";
import { Link } from "react-router";

const RestaurantsContainer = () => {
    const { loading, restaurantList, handleVegOnlyRestarunt, handleTopRatedClick, error } = useContext(RestaruntContext);

    if (error) return <p>{error} </p>;

    return <section className="my-10" >
        {loading ? (<Shimmer col={4} row={3} gap={30} />) : <>
            <Filter handleVegClick={handleVegOnlyRestarunt} handleTopRatedClick={handleTopRatedClick} />
            <div className="flex justify-center flex-wrap gap-6 my-10">
                {restaurantList.map((res) => (
                    res?.card?.card?.info && <Link to={`/restaurants/${res?.card?.card?.info?.id}`} key={res?.card?.card?.info?.id}>
                        <RestaruntCard info={res?.card?.card?.info} />
                    </Link>
                ))}
            </div>
        </>
        }
    </section >;
};

export default RestaurantsContainer;

// min-width: min-content;