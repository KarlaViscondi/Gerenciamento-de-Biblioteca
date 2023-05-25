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

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-y-hidden ">
      <header className="bg-[#201b2c]">
        <Navbar />
      </header>
      <main className='flex-grow bg-[#201b2c] overflow-y-auto '>
        <div className='flex flex-col h-full mx-2 justify-center items-center'>
          <div className='mt-20 border border-gray-300 w-2/5 p-3 rounded-lg '>
            <Searchbox></Searchbox>
            <ul className='border border-gray-300 mt-6 rounded-lg divide-y'>
              <li className='flex flex-row text-white m-3 space-x-12 '>
                  <GiBookmark className='mt-1.5'></GiBookmark>
                  <p>Título</p>
                  <p>Autor</p>
                  <p>Descrição</p>
              </li>
              {
                booklist.map((book) => (
                  <BooksList autor={book.autor} id={book.id} title={book.title} description={book.description} className='flex justify-evenly'/>
                ))
              }
            </ul>
            <Pagination></Pagination>
            <div className='flex mt-12'>
              <Modal className="modal-button">
                <h3>Livros selecionados</h3>
                <div className='flex flex-col mb-2'>
                  <Checkbox> </Checkbox>
                </div>
              </Modal>
              <Button children={"Cancelar"} className='bg-red-500 rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold mh-6 p-3 mb-6' />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footerbar />
      </footer>
    </div>
  )
}