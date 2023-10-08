
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
        } else if (selectedOption === 'reserves') {
            return url = `/operation/type/RESERVE`; // por título
        } else if (selectedOption === 'borrows') {
            return url = `/operation/type/BORROW`; // por título
        }
        return url=`/operation`
    }

    
}
  

export default search