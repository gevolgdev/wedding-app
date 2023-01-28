import React from 'react'
// images
import IMG1 from '../../assets/images/imgDress1.png'
import IMG2 from '../../assets/images/imgDress2.png'
import IMG3 from '../../assets/images/imgDress3.png'
import IMG4 from '../../assets/images/imgDress4.png'

const Index = ({setIsNextPage}) => {

  const NEXT_PAGE = () => setIsNextPage(5)
  const BACK_PAGE = () => setIsNextPage(3)

  const dresses = [
    {
      id: 'vestido1',
      img: IMG1,
      pick: ' Escolher'
    },
    {
      id: 'vestido2',
      img: IMG2,
      pick: ' Escolher'
    },
    {
      id: 'vestido3',
      img: IMG3,
      pick: ' Escolher'
    },
    {
      id: 'vestido4',
      img: IMG4,
      pick: ' Escolher'
    },
  ]

  return (
    <div className='flex flex-col w-[500px] bg-white py-6 px-12 rounded-xl'>
      <h1 className='text-slate-900 text-4xl font-["Blacker"] mx-auto mt-6 mb-3'>
        Escolha o seu vestido favorito!
      </h1>
      <p className='text-gray-500'>Com qual você ficaria mais bonita?</p>
      <div className=' flex flex-wrap w-full gap-2 justify-between my-8'>
        {
          dresses.map((item) => 
            <div style={{ backgroundImage: `url(${item.img})` }} className='flex flex-col justify-end w-[49%] h-36 bg-cover bg-center' >
              <label for={item.id} className='w-full p-2 bg-white/70 text-sm'>
                <input
                  id={item.id}
                  type='radio'
                  name='dresses'
                />
                {item.pick}
              </label>
            </div>
          )
        }
      </div>
      <div className='flex flex-rol w-full mt-auto'>
        <button onClick={NEXT_PAGE} className='w-full bg-rose-500 text-white py-3 rounded-lg'>Finalizar</button>
      </div>
    </div>
  )
}

export default Index