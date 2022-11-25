import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getPokemon} from '../../redux/actions'
import s from './Searchbar.module.css'

function SearchBar() {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const handleInput = (e) =>{
    setInput(e.target.value)
  }

  const handleClick = () =>{
    dispatch(getPokemon(input))
    setInput('')
  }

  return (
    <nav className={s.nav} >
      <input className={s.input} type='text' placeholder='Pikachu' onChange={(e) => handleInput(e)} />
      <button className={s.button} onClick={handleClick}>buscar</button>
    </nav>
  )
}

export default SearchBar