import React from 'react';
import Button from './Button';
import { ImSearch } from 'react-icons/im';

interface ISearchBoxProps{
    placeholder: string
}

const SearchBox = ({placeholder}:ISearchBoxProps) => {
    return (
        <div className="flex items-center">
            <input
                type="text"
                placeholder={placeholder}
                className="px-4 py-2 flex-grow rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 mt-3 w-4/5 justify-center"
            />
            <Button className="px-3.5 py-1.5 bg-[#ABDEE6] rounded-md text-center uppercase tracking-wider font-extrabold mt-3 ml-3 ">
                <ImSearch className="h-5 w-5"/>
            </Button>
        </div>
    );
};

export default SearchBox;
