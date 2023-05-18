import Button from '../components/common/Button'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <main className='bg-[#201b2c]'>
      <div className='flex flex-row mx-2 justify-center items-center'>
        <div >
        </div>
        <div >
          <div >
            <h1 className='text-center text-[#00ff88] font-extrabold text-2xl'>Bem vindo a biblioteca virtual</h1>
          </div>
          <div className='flex flex-col mt-12'>
            <Button children={"Confirmar"} className='bg-[#00ff88] rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold text-base block' />
            <Button children={"Cancelar"} className='bg-[#00ff88] rounded-lg	w-4/5 text-center uppercase tracking-wider font-extrabold mt-12 hover:bg-slate-700' />
          </div>
        </div>
      </div>
    </main>
  )
}
