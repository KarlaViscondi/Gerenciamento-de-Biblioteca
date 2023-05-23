import React from 'react';
import Button from './Button';
import { ImSearch } from 'react-icons/im';

const SearchBox = () => {
    return (
        <div className="flex items-center">
        <input
            type="text"
            placeholder="Pesquisar"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mt-3 w-4/5"
        />
        <Button children={<ImSearch className="h-5 w-5"/>} className="px-3.5 py-1.5 bg-[#00ff88] rounded-md text-center uppercase tracking-wider font-extrabold mt-3 ml-3 "></Button>
        </div>
    );
};

export default SearchBox;
