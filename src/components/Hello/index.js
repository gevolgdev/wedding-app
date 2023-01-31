import React from 'react'
// image
import Img from '../../assets/images/marriage.png'


const index = ({setIsNextPage}) => {

  const NEXT_PAGE = () => setIsNextPage(2)

  return (
    <div className='flex flex-col items-center w-[440px] bg-white py-6 px-12 rounded-xl max-sm:w-full max-sm:px-7'>
      <img src={Img} alt='' className='w-[200px]'/>
      <h1 className='text-slate-900 text-4xl font-["Blacker"] mx-auto mt-6 mb-3'>
        Deixe seu casamento do seu jeitinho!
      </h1>
      <p className='text-gray-500'>Já deixe organizado todo o evento para facilitar na hora de fazer seu orçamento e nao perder tempo na sua data tão importante.</p>
      <button onClick={NEXT_PAGE} className='w-full bg-rose-500 text-white py-3 rounded-lg mt-12'>Começar!</button>
    </div>
  )
}

export default index