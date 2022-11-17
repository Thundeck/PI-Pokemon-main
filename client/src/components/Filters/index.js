import React from 'react'
import { useDispatch} from "react-redux";
import {getAllPokemons,filterType,orderPokemonsAsc,orderPokemonsDes ,orderAttackDes,orderAttackAsc} from '../../redux/actions'

function Filters({allPokemonsRedux,types,setCurrentPage}) {

    const dispatch = useDispatch()

    const handleTypeFilter = (e) =>{
        dispatch(filterType(e.target.value, allPokemonsRedux))
        }
      
    const handleClick = () =>{
    dispatch(getAllPokemons())
    setCurrentPage(1)
    }
    const handleOrder = (e) =>{
        if(e.target.value === "az") dispatch(orderPokemonsAsc())
        if(e.target.value === "za") dispatch(orderPokemonsDes())
        setCurrentPage(1)
        }
    
        const handleAttack = (e) =>{
        if(e.target.value === "az") dispatch(orderAttackAsc())
        if(e.target.value === "za") dispatch(orderAttackDes())
        setCurrentPage(1)
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
  </section>
  )
}

export default Filters