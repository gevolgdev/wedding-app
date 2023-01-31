import React from 'react'
// images
import IMG1 from '../../assets/images/imgDress1.png'
import IMG2 from '../../assets/images/imgDress2.png'
import IMG3 from '../../assets/images/imgDress3.png'
import IMG4 from '../../assets/images/imgDress4.png'

const Index = ({setIsNextPage, setDressInfo}) => {

  const NEXT_PAGE = () => setIsNextPage(5)

  const dresses = [
    { id: 'vestido1', img: IMG1, pick: ' Escolher', number: '1'},
    { id: 'vestido2', img: IMG2, pick: ' Escolher', number: '2'},
    { id: 'vestido3', img: IMG3, pick: ' Escolher', number: '3'},
    { id: 'vestido4', img: IMG4, pick: ' Escolher', number: '4'},
  ]

  function handleDress(index, number) {
    setDressInfo(number)
  }

  return (
    <div className='flex flex-col w-[500px] bg-white py-6 px-12 rounded-xl max-sm:w-full max-sm:px-6'>
      <h1 className='text-slate-900 text-4xl font-["Blacker"] mx-auto mt-6 mb-3'>
        Escolha o seu vestido favorito!
      </h1>
      <p className='text-gray-500'>Com qual você ficaria mais bonita?</p>
      <div className=' flex flex-wrap w-full gap-2 justify-between my-8  max-sm:overflow-y-scroll max-sm:h-[250px] max-sm:gap-4'>
        {
          dresses.map((item, index) => 
            <div key={index} style={{ backgroundImage: `url(${item.img})` }} className='flex flex-row items-end w-[49%] h-36 bg-cover bg-center max-sm:w-full' >
              <label htmlFor={item.id} className='w-[80%] h-[40px] p-2 bg-white/70 text-sm'>
                <input
                  id={item.id}
                  type='radio'
                  name='dresses'
                  onChange={() => handleDress(index, item.number)}
                />
                {item.pick}
              </label>
              <div className='flex items-center justify-center w-[20%] h-[40px] bg-rose-300 text-gray-900'>
                {item.number}
              </div>
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