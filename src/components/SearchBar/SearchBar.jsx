
import { useState } from 'react';
import { Input } from '../index';

const SearchBar = () => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("");
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return (
        <form className="flex justify-center" onSubmit={handleSubmit}>
            <Input value={input} type="text" placeholder="Search" className="border flex p-2" handleChange={handleChange} />
        </form>
    );
};

export default SearchBar;