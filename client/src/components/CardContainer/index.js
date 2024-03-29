import React, { useState } from 'react'
import Card from '../Card'
import Filters from '../Filters';
import Paginado from '../Paginado';
import {Link} from 'react-router-dom'
import s from './cardcontainer.module.css'

function CardContainer({allPokemons,types,allPokemonsRedux}) {

  const [currentPage, setCurrentPage] = useState(1)
  const pokemonsPerPage = 12
  const indexLastPokemon = currentPage * pokemonsPerPage // 12 > 24
  const indexFirstPokemon = indexLastPokemon - pokemonsPerPage // 12
  const currentPokemons = allPokemons.slice(indexFirstPokemon, indexLastPokemon)

  const paginado  = (numPage)=>{
    setCurrentPage(numPage)
  }


  
  return (
    <div className={s.container}>
      <Filters allPokemonsRedux={allPokemonsRedux} allPokemons={allPokemons} types={types} setCurrentPage={setCurrentPage}/>
      <Paginado allPokes={allPokemons.length} pokesPerPage={pokemonsPerPage} paginado={paginado} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
      <div className={s.cards}>
      {currentPokemons?.map(e =>{
        return(
          <Link to={`/home/${e.id}`} key={e.id}>
            <Card
            key={e.id}
            name={e.name}
            img={e.sprites}
            types={e.types}
            />
          </Link>
        )
      })}
      </div>
    </div>
  )
}

export default CardContainer