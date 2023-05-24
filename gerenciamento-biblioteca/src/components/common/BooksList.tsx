import React from "react";
import Checkbox from "./Checkbox";

interface IBook {
    id: number;
    title: string;
    autor: string;
    description: string;
    }

    export const Books: IBook[] = [
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

    export default function BookList() {
    const [selectedBooks, setSelectedBooks] = React.useState<number[]>([]);
    const handleCheckboxChange = (id: number) => {
        if (selectedBooks.includes(id)) {
        setSelectedBooks(selectedBooks.filter((bookId) => bookId !== id));
        } else {
        setSelectedBooks([...selectedBooks, id]);
        }
    };
    return (
        <div className="border border-gray-300 rounded-lg flex flex-col p-4 mt-6">
        {/* Conteúdo dos livros */}
        <div className="text-white">
            <table className="text-white">
            <thead>
                <tr>
                <th>Título</th>
                <th>Autor</th>
                <th>Descrição</th>
                </tr>
            </thead>
            <tbody>
                {Books.map((book) => (
                <tr key={book.id}>
                    <td>
                    <Checkbox
                        onChange={() => handleCheckboxChange(book.id)}
                        checked={selectedBooks.includes(book.id)}
                    >
                    </Checkbox>
                    </td>
                    <td>{book.title}</td>
                    <td>{book.autor}</td>
                    <td>{book.description}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        </div>
    );
    }
