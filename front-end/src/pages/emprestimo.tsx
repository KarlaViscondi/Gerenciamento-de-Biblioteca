// import React from 'react'
// import Button from '../components/common/Button'
// import Checkbox from '../components/common/Checkbox'
// import 'tailwindcss/tailwind.css'
// import Navbar from '../components/common/Navbar'
// import Footerbar from '../components/common/Footerbar'
// import Searchbox from '../components/common/Searchbox'
// import Modal from '../components/common/Modal'
// import BooksList from '../components/common/BooksList'
// import { booklist } from '@/data/booklist'
// import {GiBookmark} from 'react-icons/gi'
// import Pagination from '../components/common/Pagination'
// import { reservelist } from '@/data/reservelist'

// export default function Home() {
//   return (
//     <div className='w-screen h-screen flex flex-col'>
//       <header>
//         <Navbar />
//       </header>
//       <main className='bg-[#eae6df] py-10 flex-grow h-full'>
//           <div className=' mx-2 border border-gray-300 max-w-2xl p-3 rounded-lg md:mx-auto'>
//             <Searchbox placeholder={'Pesquisar'}/>
//             <ul className='border border-gray-300 mt-6 rounded-lg divide-y divide-gray-300 text-black'>
//               <li className='flex flex-row gap-6 xm:gap-0 items-center text-black m-3 '>
//                 <div className='basis-1/4 xm:basis-1/6'  >
//                   <GiBookmark />
//                 </div>
//                 <p className='basis-1/4 xm:basis-1/4'>Código Reserva</p>
//                 <p className='basis-1/4 xm:basis-1/4'>Aluno</p>
//                 <p className='hidden xm:block xm:basis-1/3'>Livro</p>
//               </li>
//               {
//                 reservelist.map((reserve) => (
//                   <BooksList key={reserve.cod} autor={reserve.name} title={reserve.cod} description={reserve.title} id={reserve.cod}/>
//                 ))
//               }
//             </ul>
//             <Pagination/>
//             <div className='flex mt-6 justify-center '>
//               <Modal className="modal-button bg-[#ABDEE6]" action={'Realizar empréstimo'} confirm={'Confirmar empréstimo'}>
//               <h3>Livro(s) selecionado(s) para empréstimo</h3>
//                 <div className='flex flex-row mb-2 mt-2 space-x-12'>
//                   <Checkbox/> <p> Código 1 </p> <p> Aluno 1 </p> <p> Título do Livro 1</p>
//                 </div>
//                 <div className='flex flex-row mb-2 mt-2 space-x-12'>
//                   <Checkbox/> <p> Código 2 </p> <p> Aluno 2 </p> <p> Título do Livro 2</p>
//                 </div>
//               </Modal>
//             </div>
//           </div>
//       </main>
//       <footer>
//         <Footerbar />
//       </footer>
//     </div>
//   )
// }