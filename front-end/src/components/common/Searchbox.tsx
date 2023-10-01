import React from 'react';
import Button from './Button';
import { ImSearch } from 'react-icons/im';
import classNames from 'classnames';
import { IOptionProps } from '@/data/options';

interface ISearchBoxProps{
    placeholder?: string;
    className?: string;
    options: IOptionProps[];
    onChange: (selectedValue: string) => void;
}

const SearchBox = ({placeholder, className, options, onChange}:ISearchBoxProps) => {
       
    return (
        <div className={classNames("flex items-center", className)}
        >
            <div className='px-4 py-3 flex-grow rounded-md border bg-white border-gray-300 w-4/5 flex items-center space-x-4'>
                <input
                    type="text"
                    placeholder={placeholder}
                    className="flex-grow bg-white focus:outline-none focus:ring-2 focus:ring-[#ABDEE6]"
                > 
                </input>
                <div>
                    <select id="escolhaOpcao" name="opcao" className='bg-white focus:outline-none focus:ring-2 focus:ring-[#ABDEE6]'  onChange={(e) => onChange(e.target.value)}>
                        <option value=""></option>
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>{option.description}</option>
                        ))}
                    </select>
                </div>
                <Button className="px-3.5 py-1.5 text-center tracking-wider font-extrabold ">
                    <ImSearch className="h-5 w-5"/>
                </Button>
            </div>
        </div>
    );
};

export default SearchBox;
