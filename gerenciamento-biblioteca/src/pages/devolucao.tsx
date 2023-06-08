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
import { reservelist } from '@/data/reservelist'

export default function Home() {
  return (
    <div className='w-screen h-screen flex flex-col'>
      <header>
        <Navbar />
      </header>
      <main className='bg-[#eae6df] py-10 flex-grow h-full'>
          <div className=' mx-2 border border-gray-300 max-w-2xl p-3 rounded-lg md:mx-auto'>
            <Searchbox></Searchbox>
            <ul className='border border-gray-300 mt-6 rounded-lg divide-y divide-gray-300 text-black'>
              <li className='flex flex-row gap-6 xm:gap-0 items-center text-black m-3 '>
                <div className='basis-1/4 xm:basis-1/6'  >
                  <GiBookmark />
                </div>
                <p className='basis-1/4 xm:basis-1/4'>Código Empréstimo</p>
                <p className='basis-1/4 xm:basis-1/4'>Aluno</p>
                <p className='hidden xm:block xm:basis-1/3'>Livro</p>
              </li>
              {
                reservelist.map((reserve) => (
                    <BooksList key={reserve.cod} autor={reserve.name} title={reserve.cod} description={reserve.title} id={reserve.cod}/>
                  ))
              }
            </ul>
            <Pagination></Pagination>
            <div className='flex mt-6'>
              <Modal className="modal-button" action={'Realizar devolução'} confirm={'Confirmar devolução'}>
                <h3>Livros selecionados</h3>
                <div className='flex flex-col mb-2'>
                  <Checkbox/> 
                </div>
              </Modal>
            </div>
          </div>
      </main>
      <footer>
        <Footerbar />
      </footer>
    </div>
  )
}