import React from 'react'
import { useDispatch} from "react-redux";
import {getAllPokemons,filterType,orderPokemonsAsc,orderPokemonsDes ,orderAttackDes,orderAttackAsc} from '../../redux/actions'
import s from './Filter.module.css'

function Filters({allPokemonsRedux,allPokemons,types,setCurrentPage}) {

    const dispatch = useDispatch()



    const handleTypeFilter = (e) =>{
        dispatch(filterType(e.target.value, allPokemonsRedux))
        setCurrentPage(1)
        }
      
    const handleClick = () =>{
    setCurrentPage(1)
    dispatch(getAllPokemons())
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
    <section className={s.container}>
    <div className={s.selectContainer} >

      <p className={s.p}>Types</p>
      <select className={s.select} onChange={(e) => handleTypeFilter(e)}>
        <option value='all'>all</option>
        {types?.map(e =>{
          return <option  key={e.id} value={e.name}>{e.name}</option>
        })}
      </select>
    </div>

    <div className={s.selectContainer}>
      <p  className={s.p}>Alphabetical</p>
      <select className={s.select} onChange={(e) => handleOrder(e)}>
        <option>-</option>
        <option value='az' >A-Z</option>
        <option value='za'>Z-A</option>
      </select>
    </div>

    <div className={s.selectContainer} >
      <p className={s.p} >by Attack</p>
      <select className={s.select} onChange={(e) => handleAttack(e)}>
        <option>-</option>
        <option  value='az' >Attk asc</option>
        <option  value='za'  >Attk des</option>
      </select>
    </div>

    {allPokemons !== allPokemonsRedux && <button className={s.button} onClick={handleClick} >delete filters</button>}

  </section>
  )
}

export default Filters