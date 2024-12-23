import { useState, useContext } from "react";
import RestaruntContext from "../../Context/RestaruntContext";
import { Input, Button } from "../index";

const SearchBar = () => {
    const [searchInput, setSearchInput] = useState("");
    const { handleSearch } = useContext(RestaruntContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(searchInput); // Call search logic on form submit
        setSearchInput(""); // Clear the input field
    };

    const handleChange = (e) => {
        setSearchInput(e.target.value); // Update state on input change
    };

    return (
        <form className="flex gap-2 justify-center" onSubmit={handleSubmit}>
            <Input
                value={searchInput}
                type="text"
                placeholder="Search"
                className="border flex p-2"
                handleChange={handleChange}
            />
            <Button className="border-2 py-1 px-4">Search</Button>
        </form>
    );
};

export default SearchBar;
