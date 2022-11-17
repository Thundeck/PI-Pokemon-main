import React, { useState } from 'react'
import Card from '../Card'
import Filters from '../Filters';
import Paginado from '../Paginado';

function CardContainer({allPokemons,types,allPokemonsRedux}) {

  const [currentPage, setCurrentPage] = useState(1)
  const pokemonsPerPage = 12
  const indexLastPokemon = currentPage * pokemonsPerPage
  const indexFirstPokemon = indexLastPokemon - pokemonsPerPage
  const currentPokemons = allPokemons.slice(indexFirstPokemon, indexLastPokemon)

  const paginado  = (numPage)=>{
    setCurrentPage(numPage)
  }


  
  return (
    <div>
      <Filters allPokemonsRedux={allPokemonsRedux} types={types} setCurrentPage={setCurrentPage}/>
      <Paginado allPokes={allPokemons.length} pokesPerPage={pokemonsPerPage} paginado={paginado}/>
      {currentPokemons?.map(e =>{
        return(
        <Card
        key={e.id}
        name={e.name}
        img={e.sprites}
        types={e.types}
        />
        )
      })}
       <Paginado allPokes={allPokemons.length} pokesPerPage={pokemonsPerPage} paginado={paginado}/>
    </div>
  )
}

export default CardContainer