import React from 'react'

const index = ({setIsNextPage}) => {

  const NEXT_PAGE = () => setIsNextPage(3)
  const BACK_PAGE = () => setIsNextPage(1)

  return (
    <div className='flex flex-col w-[440px] h-[500px] bg-white py-8 px-12 rounded-xl'>
      <h1 className='text-slate-900 text-4xl font-["Blacker"] mt-6 mb-3'>
        Qual será a data?
      </h1>
      <p className='text-gray-500 mb-12'>Nos informe a data do evento. Coloque o dia, mês e ano!</p>
      
      <input className='outline-0 py-3 px-5 text-lg border-solid border-b-2 border-rose-500 bg-rose-100 placeholder:text-sm' placeholder='Ex: 13/09/2024' type='text'/>
      <div className='flex flex-rol w-full mt-auto'>
        <button onClick={BACK_PAGE} className='w-full bg-gray-400 text-white py-3 rounded-lg mr-3'>Voltar</button>
        <button onClick={NEXT_PAGE} className='w-full bg-rose-500 text-white py-3 rounded-lg'>Proximo</button>
      </div>
    </div>
  )
}

export default index