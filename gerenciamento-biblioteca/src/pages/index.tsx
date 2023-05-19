import React from 'react'
import Button from '../components/common/Button'
import Checkbox from '../components/common/Checkbox'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/common/Navbar'
import Footerbar from '../components/common/Footerbar'
import Searchbox from '../components/common/Searchbox'

export default function Home() {
  return (
    <main className='bg-[#201b2c]'>
      <Navbar></Navbar>
      <div className='flex flex-row mx-2 justify-center items-center'>
        <div >
          <div >
            <h1 className='text-center text-[#00ff88] font-extrabold text-2xl'>Bem vindo a biblioteca virtual</h1>
          </div>
          <Searchbox></Searchbox>
          <div className='flex flex-col mt-12'>
            <Button children={"Confirmar"} className='bg-[#00ff88] rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold text-base block ' />
            <Button children={"Cancelar"} className='bg-[#00ff88] rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold mt-12' />
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
