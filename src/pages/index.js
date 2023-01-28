import React, { useState } from "react"
import { Hello, Date, Location, Dress, YourWedding } from '../components'

const IndexPage = () => {

  // ✅ Estilizar todas as paginas
  // Armazenar todas os dados em um UNICO useState({})
  // Retornar todos os dados, no component final (Página)

  const [isNextPage, setIsNextPage] = useState(4)

  const styleDiv = 'flex flex-col items-center justify-center w-full h-screen'

  if (isNextPage === 2) {
    return (
      <div className={styleDiv}>
        <Date setIsNextPage={setIsNextPage}/>
      </div>
    )
  }
  else if (isNextPage === 3) {
    return (
      <div className={styleDiv}>
        <Location setIsNextPage={setIsNextPage}/>
      </div>
    )
  }
  else if (isNextPage === 4) {
    return (
      <div className={styleDiv}>
        <Dress setIsNextPage={setIsNextPage}/>
      </div>
    )
  }
  else if (isNextPage === 5) {
    return (
      <div className={styleDiv}>
        <YourWedding
          
        />
      </div>
    )
  }

  return (
    <>
      <div className={styleDiv}>
        <Hello setIsNextPage={setIsNextPage}/>
      </div>
    </>
  )
}

export default IndexPage
