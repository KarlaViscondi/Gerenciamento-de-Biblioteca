export interface IOptionProps{
    value: string;
    description: string;
}

export const bookOptions: IOptionProps[] = [
    {
        value: "all",
        description: "Todos os livros",
    },
    {
        value: "title",
        description: "Por título",
    },
    {
        value: "author",
        description: "Por autor",
    },
    {
        value: "code",
        description: "Por código",
    },
    {
        value: "available",
        description: "Livro disponíveis",
    },
    {
        value: "borrowed",
        description: "Livros emprestados",
    },
    
    {
        value: "reserved",
        description: "Livro reservados",
    },
];

export const userOptions: IOptionProps[] = [
    {
        value: "todos",
        description: "Todos os usuários",
    },
    {
        value: "name",
        description: "Por nome",
    },
    {
        value: "cpf",
        description: "Por CPF",
    },
    {
        value: "code",
        description: "Por código",
    },
];

export const operationOptions: IOptionProps[] = [
    {
        value: "all",
        description: "Todas as operações",
    },
    {
        value: "cpf",
        description: "Por CPF",
    },
    {
        value: "bookCode",
        description: "Por código do livro",
    },
    {
        value: "id",
        description: "Por código da operação",
    },
    {
        value: "reserve",
        description: "Reservas",
    },
    
    {
        value: "borrow",
        description: "Empréstimos",
    },
];