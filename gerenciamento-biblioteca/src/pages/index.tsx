import React from 'react'
import Button from '../components/common/Button'
import Checkbox from '../components/common/Checkbox'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/common/Navbar'
import Footerbar from '../components/common/Footerbar'
import Searchbox from '../components/common/Searchbox'
import Modal from '../components/common/Modal'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-y-hidden">
      <header className="bg-[#201b2c]">
        <Navbar />
      </header>
      <main className='flex-grow bg-[#201b2c] overflow-y-auto '>
        <div className='flex flex-col h-full mx-2 justify-center items-center'>
          <div >
            <Searchbox></Searchbox>
            <div className="border border-gray-300 rounded-lg flex flex-col p-4 mt-6">
              {/* Conteúdo dos livros */}
              <div className='text-white'>
                <Checkbox> </Checkbox>
                <Checkbox> </Checkbox>
                <Checkbox> </Checkbox>
                <Checkbox> </Checkbox>
                <Checkbox> </Checkbox>
                <Checkbox> </Checkbox>
                <Checkbox> </Checkbox>
                <Checkbox> </Checkbox>
                <Checkbox> </Checkbox>
                <Checkbox> </Checkbox>
              </div>
            </div>

            <div className='flex mt-12'>
              {/* Modal 1 */}
              <Modal className="modal-button">
                <h3>Livros selecionados</h3>
                <div className='flex flex-col mb-2'>
                  <Checkbox> </Checkbox>
                  <Checkbox> </Checkbox>
                  <Checkbox> </Checkbox>
                  <Checkbox> </Checkbox>
                </div>
              </Modal>
              <Button children={"Cancelar"} className='bg-red-500 rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold mh-6 p-3 mb-6' />
            </div>
          </div>
          <div className='flex flex-col'>
            {/* <Checkbox> </Checkbox>
            <Checkbox> </Checkbox>
            <Checkbox> </Checkbox> */}
          </div>
        </div>
      </main>
      <footer className="bg-[#201b2c] text-center items-center">
        <Footerbar />
      </footer>
    </div>
  )
}