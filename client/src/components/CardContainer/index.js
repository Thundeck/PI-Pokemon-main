import React, { useState } from 'react'
import Card from '../Card'
import Paginado from '../Paginado';

function CardContainer({allPokemons}) {

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
    </div>
  )
}

export default CardContainer