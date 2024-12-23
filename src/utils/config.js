import axios from 'axios';

const BASE_URL = "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.098385&lng=79.068965&collection=80463&tags=&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

export const IMG_CDN_URL = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/`;

export const REST_MENU_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.098385&lng=79.068965&restaurantId=790839&catalog_qa=undefined&query=Chinese&submitAction=ENTER`;

export const fetchRestaurantList = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response;
    } catch (error) {
        console.log(`Error Fetching Restarunt List:`, error.message);
        throw error;
    }
};

export const fetchMenu = async (restId) => {
    try {
        const response = await axios.get(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.098385&lng=79.068965&restaurantId=${restId}&catalog_qa=undefined&query=Chinese&submitAction=ENTER`);
        return response;
    } catch (error) {
        console.log(`Error Fetching Menu List:`, error.message);
        throw error;
    }
};
