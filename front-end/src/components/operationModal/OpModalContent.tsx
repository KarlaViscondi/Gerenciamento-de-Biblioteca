import React, { useEffect, useState } from 'react';
import SearchBox from '../common/Searchbox';
import { bookOptions, operationOptions, userOptions } from '@/data/options';
import ResultUserBox from '../ResultUserBox';
import ResultBookBox from '../ResultBookBox';
import search from '@/src/utils/search';
import myfetch from '@/src/utils/myfetch';
import { IBookProps, IUserProps } from './OperationUpdateModal';

interface ISelectedUserProps {
    cpf: string | undefined;
    isChecked: boolean;
}
interface ISelectedBookProps {
    bookCode: string | undefined;
    isChecked: boolean;
}

export default function OpModalContent(){
    const options = (type:string) => {
        if(type === 'book') return  bookOptions 
        if(type === 'user') return  userOptions 
        return [{value: '', description: ''}]
    }

    const [selectedTypeOption, setSelectedTypeOption] = useState<string>('');
    const [selectedBookOption, setSelectedBookOption] = useState<string>('');
    const [selectedUserOption, setSelectedUserOption] = useState<string>('');
    const [searchUserValue, setSearchUserValue] = useState<string>('');
    const [searchBookValue, setSearchBookValue] = useState<string>('');
    const [doUserSearch, setDoUserSearch] = useState<boolean>(false);
    const [userResult, setUserResult] = useState();
    const [doBookSearch, setDoBookSearch] = useState<boolean>(false);
    const [bookResult, setBookResult] = useState();
    const [book, setBook] = useState<IBookProps>(); 
    const [user, setUser] = useState<IUserProps>();
    const [selectedUser, setSelectedUser] = useState<ISelectedUserProps>({
        cpf: undefined,
        isChecked: false,
    });
    const [selectedBook, setSelectedBook] = useState<ISelectedBookProps>({
        bookCode: undefined,
        isChecked: false,
    });
    const [userCheckedCPF, setUserCheckedCPF] = useState<undefined | string>()
    const [userCheckedBookCode, setUserCheckedBookCode] = useState<undefined | string>()
    const handleUserChange = (cpf:string | undefined) => {
        selectedUser.isChecked === true? cpf = undefined : cpf = cpf
        selectedUser.isChecked === true? setUserCheckedCPF(undefined) : setUserCheckedCPF(cpf)
        setSelectedUser({ cpf, isChecked: !selectedUser.isChecked });
    };

    const handleBookChange = (bookCode:string | undefined) => {
        selectedBook.isChecked === true? bookCode = undefined : bookCode = bookCode
        selectedBook.isChecked === true? setUserCheckedBookCode(undefined) : setUserCheckedBookCode(bookCode)
        setSelectedBook({ bookCode, isChecked: !selectedBook.isChecked });
    };

    useEffect(()=>{
        if (selectedUser.cpf != undefined){
            getUserResult(selectedUser.cpf);
        }
    },[selectedUser])

    useEffect(()=>{
        if (selectedBook.bookCode != undefined){
            getBookResult(selectedBook.bookCode);
        }
    },[selectedBook])

    async function getUserResult(CPF: string) {
        try {
            var response = await myfetch.get(`/user/cpf/${CPF}`)
            response = response.shift()
            setUser(response)
            return response
        } catch (error) {
            console.error('Erro na pesquisa:', error);
            return 'Erro na Pesquisa'
        }
    }

    async function getBookResult(bookCode: string) {
        try {
            var response = await myfetch.get(`/book/code/${bookCode}`)
            response = response.shift()
            setBook(response)
            return response
        } catch (error) {
            console.error('Erro na pesquisa:', error);
            return 'Erro na Pesquisa'
        }
    }

    async function handleSearchClick(type: string) {
        let url 
        if(type === "user"){
            url = search(type, selectedUserOption, searchUserValue)
            setDoUserSearch(true)
        }
        if(type === "book"){
            url = search(type, selectedBookOption, searchBookValue)
            setDoBookSearch(true)
        }
        await getResult(url as string, type)
        .then(() => {
            if(type === "user"){
                setDoUserSearch(false)
            }
            if(type === "book"){
                setDoBookSearch(false)
            }
        })
    };

    function handleSearchUserClick() {
        handleSearchClick("user")
    }

    function handleSearchBookClick() {
        handleSearchClick("book")
    }

    async function getResult(url:string, type: string){
        try {
            var response = await myfetch.get(url)
            if (type === "user"){
                setUserResult(response)
            }
            if (type === "book"){
                setBookResult(response)
            }
            return response
            } catch (error) {
            console.error('Erro na pesquisa:', error);
            return 'Erro na Pesquisa'
            }
    }

    async function handleCreateOperation() {
        if(selectedBook.bookCode != undefined && selectedUser.cpf != undefined && selectedTypeOption){
            try {
                console.log(selectedTypeOption)
                var body = {
                    type: selectedTypeOption,
                    bookCode: selectedBook.bookCode,
                    studentCPF: selectedUser.cpf
                }
                await myfetch.post('/operation', body)
                alert("Operação criada com sucesso!")
                return 
                } catch (error) {
                console.error('Erro na criação:', error);
                return 'Erro na criação'
            }
        }
        alert("Todas as informações precisam ser preenchidas")
        
    }
    
    return (
        <div className='flex-col text-black'>
            <h2 className='mb-3 mt-3'>Selecionar operação</h2>
            <select value={selectedTypeOption} onChange={e => setSelectedTypeOption(e.target.value)} className='rounded-md border bg-white border-gray-300'>
                <option value=""></option>
                <option value="RESERVE">Reserva</option>
                <option value="BORROW">Empréstimo</option>
            </select>
            <h2 className="mb-3 mt-3">Selecionar aluno</h2>
            <SearchBox options={options('user')} onSelectChange={(value: string) => setSelectedUserOption(value)} onSearchChange={(value: string) => setSearchUserValue(value)} className='mt-5' onSearchClick={handleSearchUserClick}/>
            {
                userResult? 
                    <ResultUserBox result={userResult} input={true} handleUserChange={handleUserChange} checkedUser={userCheckedCPF}/>
                :
                    <></>
            }
            <h2 className="mb-3 mt-3">Selecionar livro(s)</h2>
            <SearchBox options={options('book')} onSelectChange={(value: string) => setSelectedBookOption(value)} onSearchChange={(value: string) => setSearchBookValue(value)} className='mt-5' onSearchClick={handleSearchBookClick}/>
            {
                bookResult? 
                    <ResultBookBox result={bookResult} input={true} handleBookChange={handleBookChange} checkedBook={userCheckedBookCode}/>
                :
                    <></>
            }
            <div className='flex flex-col mt-8 space-y-4'>
                <p className='text-xl text-center pb-4'>Resumo da operação</p>
                <p>Nome do aluno: {user?.name}</p>
                <p>CPF do aluno: {user?.cpf}</p>
                <p>Título do livro: {book?.title}</p>
                <p>Autor do livro: {book?.author}</p>
                <p>Tipo de operação: {
                    selectedTypeOption === "reserve"? "Reserva" : 
                        selectedTypeOption === "borrow"? "Empréstimo" : ""
                    }
                </p>
            </div>
            <div className='flex flex-row space-x-8 justify-end mt-4'>
                <button className='btn' onClick={handleCreateOperation}>Confirmar operação</button>
            </div>
        </div>
    )
}

