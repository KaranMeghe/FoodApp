import { Button } from "../../index";

const MenuFilter = () => {
    return <div className="flex gap-4 border-b-gray-500 py-2">
        <Button className="rounded-full border border-gray-400 px-4 bg-green-500 text-white bold">Veg</Button>
        <Button className="rounded-full border  border-gray-400  px-4 bg-red-500 text-white bold">Non-Veg</Button>
        {/* <Button>BestSeller</Button> */}
    </div>;
};

export default MenuFilter;