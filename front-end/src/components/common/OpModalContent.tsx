import React from 'react';

interface OpModalContentProps {
    selectedOption: string;
    searchValue: string;
    result: string; 
    handleSearch: (value: string) => void;
}

const OpModalContent: React.FC<OpModalContentProps> = ({
    selectedOption,
    searchValue,
    result,
    handleSearch,
}) => {
    return (
        <div>
            <h2>Selecione tipo de operação</h2>
            <select value={selectedOption} onChange={(e) => handleSearch(e.target.value)}>
                <option value="">Selecione uma operação</option>
                <option value="reserve">Reserva</option>
                <option value="borrow">Empréstimo</option>
            </select>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Pesquisar..."
            />
            <div>
                
            </div>
        </div>
    );
};

export default OpModalContent;
