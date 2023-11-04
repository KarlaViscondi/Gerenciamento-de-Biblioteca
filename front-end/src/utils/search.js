
// Lê o endereço do back-end a partir do arquivo .env.local
// MODIFICADO: atualizar import para VITE_API_BASE

function search(type, selectedOption, searchValue){

    if(type === 'operation'){
        let url 
        if (selectedOption === 'cpf') {
            return url = `/operation/student/${encodeURIComponent(searchValue)}`; // disponíveis
        } else if (selectedOption === 'bookCode') {
            return url = `/operation/book/${encodeURIComponent(searchValue)}`; // emprestados
        } else if (selectedOption === 'id') {
            return url = `/operation/id/${encodeURIComponent(searchValue)}`; // reservados
        } else if (selectedOption === 'reserve') {
            return url = `/operation/type/RESERVE`; // por título
        } else if (selectedOption === 'borrow') {
            return url = `/operation/type/BORROW`; // por título
        }
        return url=`/operation`
    }

    if(type === 'user'){
        let url 
        if (selectedOption === 'cpf') {
            return url = `/user/cpf/${encodeURIComponent(searchValue)}`; // disponíveis
        } else if (selectedOption === 'name') {
            return url = `/user/name/${encodeURIComponent(searchValue)}`; // emprestados
        } else if (selectedOption === 'code') {
            return url = `/user/code/${encodeURIComponent(searchValue)}`; // reservados
        }
        return url=`/user`
    }

    if(type === 'book'){
        let url 
        if (selectedOption === 'title') {
            return url = `/book/title/${encodeURIComponent(searchValue)}`; // disponíveis
        } else if (selectedOption === 'author') {
            return url = `/book/author/${encodeURIComponent(searchValue)}`; // emprestados
        } else if (selectedOption === 'code') {
            return url = `/book/code/${encodeURIComponent(searchValue)}`; // reservados
        } else if (selectedOption === 'available') {
            return url = `/book/available`; 
        } else if (selectedOption === 'borrowed') {
            return url = `/book/borrowed`; 
        } else if (selectedOption === 'reserved') {
            return url = `/book/reserved`; 
        }
        return url=`/book`
    }
    
}
export default search