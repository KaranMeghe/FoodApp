import { Button } from "../../index";

const MenuFilter = ({ handleVegClick, handleNonVegClick, handleAllClick }) => {
    return <div className="flex gap-4 border-b-gray-500 py-2">
        <Button handleClick={handleVegClick} className="rounded-full border border-gray-400 px-4 bg-green-500 text-white bold">Veg</Button>
        <Button handleClick={handleNonVegClick} className="rounded-full border  border-gray-400  px-4 bg-red-500 text-white bold">Non-Veg</Button>
        <Button handleClick={handleAllClick} className="rounded-full border  border-gray-400  px-4 bg-blue-500 text-white bold">Refresh</Button>
    </div>;
};

export default MenuFilter;