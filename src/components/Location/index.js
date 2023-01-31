import React from 'react'
//Images

const Index = ({setIsNextPage, setLocalInfo}) => {

 const NEXT_PAGE = () => setIsNextPage(4)
 const BACK_PAGE = () => setIsNextPage(2)

  const locals = [
    {
      name: 'Beira da represa',
      description: 'Ótima localização · Piscina · 16 hóspedes · 6 quartos',
      city: 'mogi',
    },
    {
      name: 'Casa de campo',
      description: '4 hóspedes · 2 quartos · 3 camas · 3 banheiros',
      city: 'bertioga',
    },
    {
      name: 'Sítio Lazer',
      description: '16 hóspedes · 5 quartos · 14 camas · 4 banheiros',
      city: 'guararema',
    },
  ]

  function handleName(index, name) {
    setLocalInfo(name)
  }

  return (
    <div className='flex flex-col w-[440px] h-[500px] bg-white py-8 px-12 rounded-xl max-sm:w-full max-sm:px-6'>
      <h1 className='text-slate-900 text-4xl font-["Blacker"] mt-6 mb-3'>
        Onde desejá comemorar?
      </h1>
      <p className='text-gray-500 mb-6'>Diga o lugar que você ache mais bonito.</p>

      <div className="flex flex-col gap-5 h-full w-full mb-5 p-2 overflow-y-scroll container">
        {
          locals.map((item, index) =>
            <label key={item.name} htmlFor={item.city} className="flex flex-row items-center w-full px-5 border-2 border-gray-400 active:bg-rose-100">
              <input
                onChange={() => handleName(index, item.name)}
                type='radio'
                id={item.city}
                name='locals'
              /> 
              <div className='flex flex-col p-5'>
                <h3 className='text-lg font-bold text-gray-800'>{item.name}</h3>
                <p className='text-sm'>{item.description}</p>
              </div>

              <button className='flex items-center shrink-0 justify-center w-[25px] h-[25px] rounded-full  border border-rose-400'>
                <span className='text-rose-400'>!</span>
              </button>
            </label>
          )
        }
      </div>

      <div className='flex flex-rol w-full mt-auto'>
        <button onClick={BACK_PAGE} className='w-full bg-gray-400 text-white py-3 rounded-lg mr-3'>Voltar</button>
        <button onClick={NEXT_PAGE} className='w-full bg-rose-500 text-white py-3 rounded-lg'>Proximo</button>
      </div>
    </div>
  )
}

export default Index