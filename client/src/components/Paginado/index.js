import React from 'react'

const Paginado = ({allPokes, pokesPerPage, paginado}) => {

    const pageNumbers = []

    for(let i=1 ; i <= Math.ceil(allPokes/pokesPerPage); i++){
      pageNumbers.push(i)
    }

  return (
    <nav>
        {pageNumbers && pageNumbers.map(e => {
            return (
              <button key={e} type='text' onClick={() => paginado(e)}>{e}</button>
            )
        })}
    </nav>
  )
}

export default Paginado