export interface IBook {
    id: number;
    title: string;
    autor: string;
    description: string;
}

export const booklist: IBook[] = [
    {
        id: 1,
        title: "Livro 1",
        autor: "Autor 1",
        description: "Descrição do Livro 1",
    },
    {
        id: 2,
        title: "Livro 2",
        autor: "Autor 2",
        description: "Descrição do Livro 2",
    },
    {
        id: 3,
        title: "Livro 3",
        autor: "Autor 3",
        description: "Descrição do Livro 3",
    },
    {
        id: 4,
        title: "Livro 4",
        autor: "Autor 4",
        description: "Descrição do Livro 4",
    },
    {
        id: 5,
        title: "Livro 5",
        autor: "Autor 5",
        description: "Descrição do Livro 5",
    },
];