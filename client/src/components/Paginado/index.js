import React, { useState } from 'react'
import s from './pags.module.css'

const Paginado = ({allPokes, pokesPerPage, paginado}) => {

    const pageNumbers = []

    for(let i=1 ; i <= Math.ceil(allPokes/pokesPerPage); i++){
      pageNumbers.push(i)
    }
let initialState = {
  1: false,
  2: false,
  3: false,
  4: false
}
const [select, setSelect] = useState({
    1: true,
    2: false,
    3: false,
    4: false
  }
)



const handleClick = (e) =>{
  paginado(e)
  setSelect({
    ...initialState,
    [e]:true

  })

}

  return (
    <nav className={s.nav} >
        {pageNumbers && pageNumbers.map(e => {
            return (
              <button className={select[e] ? s.buttonSelected : s.button} name={e} key={e} type='text' onClick={() => handleClick(e)}>{e}</button>
            )
        })}
    </nav>
  )
}

export default Paginado