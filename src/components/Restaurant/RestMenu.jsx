import { useState } from 'react';
import { Input } from "../index";
const RestMenu = () => {
    const [searchInput, setSearchInput] = useState("");

    const handleChange = (e) => {
        return setSearchInput(e.target.value);
    };


    return <section id="menu" className="flex flex-col w-9/12">
        <div id="search" className="flex flex-col gap-4">
            <span>Menu</span>
            <form>
                <Input type="text" value={searchInput} onChange={handleChange} placeholder="Search for dishes" className="border border-1 p-2 rounded-md text-center w-full" />
            </form>
        </div>
    </section>;
};

export default RestMenu;