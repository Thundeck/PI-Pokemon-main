import React,{useEffect} from 'react'
import CardContainer from '../CardContainer'
import { useDispatch, useSelector } from "react-redux";
import {getAllPokemons, getAllTypes,filterType,orderPokemonsAsc,orderPokemonsDes ,orderAttackDes,orderAttackAsc} from '../../redux/actions'

function Home() {
  const dispatch = useDispatch()
  const allPokemonsRedux = useSelector(state => state.allPokemons)
  const allPokemons = useSelector(state => state.pokemons)
  const types = useSelector(state => state.allTypes)

  useEffect(() => {
    dispatch(getAllPokemons())
    dispatch(getAllTypes())
  },[dispatch])

  const handleTypeFilter = (e) =>{
  dispatch(filterType(e.target.value, allPokemonsRedux))
  }

  // const handleOrderAsc = () =>{
  //   dispatch(orderPokemonsAsc())
  //   }
  // const handleOrderDesc = () =>{
  //   dispatch(orderPokemonsDes())
  //   }
    const handleClick = () =>{
      dispatch(getAllPokemons())
      }
  const handleOrder = (e) =>{
    if(e.target.value === "az") dispatch(orderPokemonsAsc())
    if(e.target.value === "za") dispatch(orderPokemonsDes())
    }

    const handleAttack = (e) =>{
      if(e.target.value === "az") dispatch(orderAttackAsc())
      if(e.target.value === "za") dispatch(orderAttackDes())
      }


  return (
    <section>
      <div>
        <p>Types</p>
        <select onChange={(e) => handleTypeFilter(e)}>
          <option value='all'>all</option>
          {types?.map(e =>{
            return <option  key={e.id} value={e.name}>{e.name}</option>
          })}
        </select>
      </div>

      <div>
        <p>Alphabetical order</p>
        <select onChange={(e) => handleOrder(e)}>
          <option>-</option>
          <option value='az' >A-Z</option>
          <option value='za'>Z-A</option>
        </select>
      </div>
      <div>
        <p>Order by Attack</p>
        <select onChange={(e) => handleAttack(e)}>
          <option>-</option>
          <option  value='az' >Attk asc</option>
          <option  value='za'  >Attk des</option>
        </select>
      </div>
      <button onClick={handleClick} >quitar filtros</button>
      <CardContainer allPokemons={allPokemons}/>
    </section>
  )
}

export default Home