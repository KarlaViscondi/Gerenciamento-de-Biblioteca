import React from 'react';
import classNames from 'classnames';
import { ImSearch } from 'react-icons/im';
import SearchBox from './Searchbox';
import { bookOptions, operationOptions, userOptions } from '@/data/options';

interface OpModalContentProps {
    selectedOption: string;
    searchValue: string;
    result: string; 
    handleSearch: (value: string) => void;
    handleSelectChange: (value: string) => void;
    handleSearchClick: () => void; 
    type: string;
}

const OpModalContent: React.FC<OpModalContentProps> = ({
    selectedOption,
    searchValue,
    result,
    handleSearch,
    handleSelectChange,
    handleSearchClick,
    type,
}) => {
    const options = () => {
        if(type === 'book') return  bookOptions 
        if(type === 'user') return  userOptions 
        return [{value: '', description: ''}]
    }
    return (
        <div className='flex-col'>
            <h2 className='mb-3 mt-3'>Selecionar operação</h2>
            <div className='px-4 py-3 flex-grow rounded-md border bg-white border-gray-300 w-4/5 flex items-center space-x-4'>
                <select value={selectedOption} onChange={(e) => handleSelectChange(e.target.value)}>
                    <option value="">-</option>
                    <option value="reserve">Reserva</option>
                    <option value="borrow">Empréstimo</option>
                </select>
            </div>
            <h2 className="mb-3 mt-3">Selecionar aluno {type === 'user'}</h2>
            <SearchBox options={options()} onSelectChange={handleSelectChange} onSearchChange={handleSearch} className='mt-5' onSearchClick={handleSearchClick}/>
            <h2 className="mb-3 mt-3">Selecionar livro(s) {type === 'book'}</h2>
            <SearchBox options={options()} onSelectChange={handleSelectChange} onSearchChange={handleSearch} className='mt-5' onSearchClick={handleSearchClick}/>
            <div>
                {/* Renderize os resultados aqui */}
            </div>
        </div>
    );
};

export default OpModalContent;
