import React from 'react'
import Button from '../components/common/Button'
import Checkbox from '../components/common/Checkbox'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/common/Navbar'
import Footerbar from '../components/common/Footerbar'
import Searchbox from '../components/common/Searchbox'
import Modal from '../components/common/Modal'
import BooksList from '../components/common/BooksList'
import { booklist } from '@/data/booklist'
import {GiBookmark} from 'react-icons/gi'
import Pagination from '../components/common/Pagination'
import { AiOutlinePlus } from 'react-icons/ai';

import BookSearch from './book'

export default function Home() {
  return (
    <div className='w-screen bg-white'>
      <header>
        <Navbar />
      </header>
      <main className=' pt-24 min-h-screen max-w-2xl mx-auto'>
          <nav className='flex justify-around font-bold text-black text-xl'>
            <a href='/' className='hover:text-[#1d0f3b]'>Livros</a>
            <a href='/' className='hover:text-[#1d0f3b]'>Usuários</a>
            <a href='/' className='hover:text-[#1d0f3b]'>Operações</a>
          </nav>
          <Searchbox placeholder={'Pesquisar'} className='mt-12'/>
          <div className=' mx-2 border border-gray-300 mt-6 h-auto rounded-lg md:mx-auto'>
            <div className='flex py-2 justify-end border-b border-gray-300 items-center'>
              <a href='' className='flex items-center'>
                Cadastrar Livro   
                <AiOutlinePlus className='mx-1'/>
              </a>
            </div>
            <ul className='mt-6  text-black'>
              <li className='flex flex-row gap-6 xm:gap-0 items-center text-black m-3 '>
                <div className='basis-1/6'  >
                  <GiBookmark />
                </div>
                <p className='basis-2/6 xm:basis-1/4 flex-grow'>Título</p>
                <p className='basis-2/6 xm:basis-1/4 flex-grow'>Autor</p>
                <p className='basis-1/6'>Detalhes</p>
              </li>
              {
                booklist.map((book) => (
                  <BooksList key={book.id} autor={book.autor} id={book.id} title={book.title} description={book.description}/>
                ))
              }
            </ul>
            {/* <Pagination/>
            <div className='flex mt-6 justify-center'>
              <Modal className="modal-button bg-[#ABDEE6]" action={'Reservar'} confirm={'Confirmar reserva'}>
                <h3>Livro(s) selecionado(s)</h3>
                <div className='flex flex-row mb-2 mt-2 space-x-12'>
                  <Checkbox/> <p> Livro 1 </p> <p> Autor 1 </p> <p> Descrição do Livro 1</p>
                </div>
                <div className='flex flex-row mb-2 mt-2 space-x-12'>
                  <Checkbox/> <p> Livro 2 </p> <p> Autor 2 </p> <p> Descrição do Livro 2</p>
                </div>
                <div className='flex flex-col mb-2'>
                  <Searchbox placeholder={'Pesquisar aluno'}/> 
                </div>
              </Modal>
            </div> */}
          </div>
      </main>
      <footer>
        <Footerbar />
      </footer>
    </div>
  )
}