import React from 'react'

const Index = () => {
  return (
    <div className='flex flex-col w-[440px] bg-white py-6 px-12 rounded-xl'>
      <h1 className='text-slate-900 text-4xl font-["Blacker"] mx-auto mt-6'>
        Como ficou seu <span className='text-rose-500'>casamento</span>:
      </h1>
      <div className='w-full h-[1px] bg-slate-900 mt-3 mb-8'/>
      <div>
        <h3 className='text-lg font-["Blacker"]'>Data:</h3>
        <p className='text-gray-600 mb-6'>13/09/2024</p>

        <h3 className='text-lg font-["Blacker"]'>Local:</h3>
        <p className='text-gray-600 mb-6'>Beira do abismo</p>

        <h3 className='text-lg font-["Blacker"]'>Vestidos:</h3>
        <p className='text-gray-600'>Vestido em zibeline com barrado e aplicações de renda fio de seda.</p>
      </div>
    </div>
  )
}

export default Index