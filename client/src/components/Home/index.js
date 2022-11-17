import React,{useEffect} from 'react'
import CardContainer from '../CardContainer'
import { useDispatch, useSelector } from "react-redux";

import {getAllPokemons, getAllTypes} from '../../redux/actions'

function Home() {
  const dispatch = useDispatch()
  const allPokemonsRedux = useSelector(state => state.allPokemons)
  const allPokemons = useSelector(state => state.pokemons)
  const types = useSelector(state => state.allTypes)

  useEffect(() => {
    dispatch(getAllPokemons())
    dispatch(getAllTypes())
  },[dispatch])

  return (
    <div>
      <CardContainer allPokemons={allPokemons}allPokemonsRedux={allPokemonsRedux} types={types}/>
    </div>

  )
}

export default Home