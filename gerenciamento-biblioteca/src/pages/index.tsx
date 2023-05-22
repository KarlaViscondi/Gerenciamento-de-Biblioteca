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
    <main className='bg-[#201b2c] w-auto'>
      <Navbar></Navbar>
      <div className='flex flex-row mx-2 justify-center items-center'>
        <div >
          <Searchbox></Searchbox>
          <div className='flex flex-col mt-12'>
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
            <Button children={"Cancelar"} className='bg-red-500 rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold' />
          </div>
        </div>
        <div className='flex flex-col'>
          <Checkbox> </Checkbox>
          <Checkbox> </Checkbox>
          <Checkbox> </Checkbox>
        </div>
      </div>
      <Footerbar></Footerbar>
    </main>
  )
}