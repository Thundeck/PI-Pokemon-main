import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {getPokemon} from '../../redux/actions'

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
    <nav>
      <input type='text' placeholder='Pikachu' onChange={(e) => handleInput(e)} />
      <button onClick={handleClick}>buscar</button>
    </nav>
  )
}

export default SearchBar