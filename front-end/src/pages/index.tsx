import React, { useState } from 'react'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/common/Navbar'
import Footerbar from '../components/common/Footerbar'
import Results from '../components/Results';
import classNames from 'classnames';

export default function Home() {
  const [content, setContent] = useState<string>();
 
  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>  {
    e.preventDefault();
    const newContent = e.currentTarget.getAttribute('data-content');
    if(newContent) {
      setContent(newContent);
    }
  };
 
  return (
    <div className='w-screen bg-white'>
      <header>
        <Navbar />
      </header>
      <main className=' pt-24 min-h-screen max-w-2xl mx-auto'>
          <nav className='flex justify-around font-bold text-black text-xl'>
            <button className={classNames('hover:text-[#1d0f3b] relative', content === 'book'? 'after:absolute after:w-full after:h-1 after:bg-black after:bottom-0 after:-translate-x-full' : '')} onClick={handleButtonClick} data-content='book'>Livros</button>
            <button className={classNames('hover:text-[#1d0f3b] relative', content === 'user'? 'after:absolute after:w-full after:h-1 after:bg-black after:bottom-0 after:-translate-x-full' : '')} onClick={handleButtonClick} data-content='user'>Usuários</button>
            <button className={classNames('hover:text-[#1d0f3b] relative', content === 'operation'? 'after:absolute after:w-full after:h-1 after:bg-black after:bottom-0 after:-translate-x-full' : '')} onClick={handleButtonClick} data-content='operation'>Operações</button>
          </nav>
          <div>
            {content? 
              <Results type={content}/> : ""
            }
          </div>
          {/* <Searchbox placeholder={'Pesquisar'} className='mt-12'/>
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
            </ul> */}
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
          {/* </div> */}
      </main>
      <footer>
        <Footerbar />
      </footer>
    </div>
  )
}