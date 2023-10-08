import React, { MouseEventHandler } from 'react';
import Button from './Button';
import { ImSearch } from 'react-icons/im';
import classNames from 'classnames';
import { IOptionProps } from '@/data/options';

interface ISearchBoxProps{
    placeholder?: string;
    className?: string;
    options: IOptionProps[];
    onSelectChange: (selectedValue: string) => void;
    onSearchChange: (searchValue: string) => void;
    onSearchClick: MouseEventHandler<HTMLButtonElement>;
}

const SearchBox = ({placeholder, className, options, onSelectChange, onSearchChange, onSearchClick}:ISearchBoxProps) => {
       
    return (
        <div className={classNames("flex items-center", className)}
        >
            <div className='px-4 py-3 flex-grow rounded-md border bg-white border-gray-300 w-4/5 flex items-center space-x-4'>
                <input
                    type="text"
                    placeholder={placeholder}
                    className="flex-grow bg-white focus:outline-none focus:ring-2 focus:ring-[#ABDEE6]"
                    onChange={(e) => onSearchChange(e.target.value)}
                > 
                </input>
                <div>
                    <select id="escolhaOpcao" name="opcao" className='bg-white focus:outline-none focus:ring-2 focus:ring-[#ABDEE6]'  onChange={(e) => onSelectChange(e.target.value)}>
                        <option value=""></option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>{option.description}</option>
                        ))}
                    </select>
                </div>
                {/* <Button  
                ={onSearchClick}>
                    <ImSearch className="h-5 w-5"/>
                </Button> */}
                <button className="px-3.5 py-1.5 text-center tracking-wider font-extrabold" onClick={onSearchClick}>
                    <ImSearch className="h-5 w-5"/>
                </button>
            </div>
        </div>
    );
};

export default SearchBox;
