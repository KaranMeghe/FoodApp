import { Provider } from '../../Context/RestaruntContext';
import { SearchBar, RestaurantsContainer } from '../index';

const Body = () => {

    return (
        <>
            <Provider>
                <SearchBar />
                <RestaurantsContainer />
            </Provider>
        </>
    );
};

export default Body;