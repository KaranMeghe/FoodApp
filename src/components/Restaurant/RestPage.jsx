import { useLoaderData } from "react-router";
import { fetchMenu } from "../../utils/config";
import { RestInfo, RestMenu, RestOffer } from '../index';



export const menuLoader = async ({ params }) => {
    const { resId } = params;
    console.log(resId);
    const menu = await fetchMenu(resId); // Pass the `resId` to fetch the menu
    return menu;
};

// When you use the React Router loader mechanism, you don’t need to manually use useParams in your component. The loader automatically receives the route parameters (params) and processes them for you. Here's why:

// Why Not useParams in This Case?
// Loader Responsibilities: React Router's loader handles fetching and preparing the data based on the route's parameters before rendering the component.
// Cleaner Code: By offloading the parameter handling to the loader, your component can focus solely on rendering the UI, without concern for fetching logic or route parameters.
// Centralized Data Handling: This keeps data-fetching logic within the loader, making it reusable and easier to test.


const RestPage = () => {
    const response = useLoaderData(); // we use this custom hook to get data into component (react-router-dom)
    console.log('menu:-', response);

    const resData = response.data.data.cards;
    console.log("data", resData);

    return (
        <section className="flex flex-col w-[80%] mx-auto">
            <RestInfo resData={resData} />
            {resData[3]?.card?.card?.gridElements?.infoWithStyle?.offers ? <h3 className="text-2xl font-bold my-4">Deals for you</h3> : null}
            <RestOffer resData={resData[3]} />
            <RestMenu resData={resData[4]} />
        </section>
    );
};
export default RestPage;