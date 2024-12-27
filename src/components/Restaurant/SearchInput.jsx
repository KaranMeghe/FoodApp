
import { Input } from '../index';
const SearchInput = ({ value, onChange }) => {
    return (
        <div id="search" className="flex flex-col gap-4">
            <span>Menu</span>
            <form>
                <Input type="text" value={value} onChange={onChange} placeholder="Search for dishes" className="border border-1 p-2 rounded-md text-center w-full placeholder-gray-600 placeholder-opacity-75 focus:placeholder-gray-400" />
            </form>
        </div>
    );
};

export default SearchInput;