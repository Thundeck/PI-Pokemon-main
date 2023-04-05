import React, {useState} from 'react'
import s from './pags.module.css'

const Paginado = ({allPokes, pokesPerPage, paginado, setCurrentPage,currentPage}) => {

    const pageNumbers = []

    for(let i=1 ; i <= Math.ceil(allPokes/pokesPerPage); i++){
      pageNumbers.push(i)
    }

let obj = pageNumbers?.reduce( (prev, act) =>{
  if(!prev[act]){
    if(act === 1) {
      prev[act] = true
    } else {
    prev[act]=false
    }
  }
  return prev
},{})

let auxState = pageNumbers?.reduce( (prev, act) =>{
  if(!prev[act]){
    prev[act]=false
  }
  return prev
},{})

const [select, setSelect] = useState({...obj, 1:true})

const handleClick = (e) =>{
  paginado(e)
  setSelect({
    ...auxState,
    [e]:true

  })

}


const handlePage = (e) => {
  if(Number(e.target.value) < pageNumbers.length+1 && Number(e.target.value) > 0 ) {
    setCurrentPage(Number(e.target.value))
    setSelect({
      ...auxState,
      [e.target.value]:true  
    })
  }
}

  return (
    <nav className={s.nav} >
      <button className={s.button} value={currentPage - 1} onClick={(e) => handlePage(e)}>{"<"}</button>
        {pageNumbers && pageNumbers.map(e => {
            return (
                <button className={select[e] ? s.buttonSelected : s.button} name={e} key={e} type='text' onClick={() => handleClick(e)}>{e}</button>
            )
          })}
      <button className={s.button} value={currentPage + 1} onClick={(e) => handlePage(e)}>{">"}</button>
    </nav>
  )
}

export default Paginado