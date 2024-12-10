import axios from 'axios';

const BASE_URL = "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.098385&lng=79.068965&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

export const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;

export const fetchRestaurantList = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.log(`Error Fetching Restarunt List:`, error.message);
        throw error;
    }
};
