import React from 'react';
import Button from './Button';

const SearchBox = () => {
    return (
        <div className="flex items-center">
        <input
            type="text"
            placeholder="Pesquisar"
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Button children={"Buscar"} className='bg-[#00ff88] rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold text-base block'></Button>
        </div>
    );
};

export default SearchBox;
