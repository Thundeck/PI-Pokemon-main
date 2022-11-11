const axios = require('axios')
const {API} = require('../../utils/globals.js')
const {Pokemon, Type} = require('../db.js')

// allPokemonsApi

const allPokemonsApi = async ()=>{
    const api = await axios.get(API)
    const arrPokemons = await axios.all(api.data.results.map( e=> axios.get(e.url))).then(r => r.map( e => e.data))

    const pokemons = arrPokemons.map(e => {return {
      id:e.id,
      name:e.name,
      health:e.stats[0].base_stat,
      attack:e.stats[1].base_stat ,
      defense:e.stats[2].base_stat ,
      speed:e.stats[5].base_stat ,
      height:e.height,
      weight:e.weight,
      sprites:e.sprites.other.home.front_default,
      types: e.types.length > 1 ? [e.types[0],e.types[1]] : [e.types[0]]
    }})
    return pokemons
  }

  const allPokemonsDB = async ()=>{
    const api = await Pokemon.findAll({include:Types})
    // return [...api, {msg: 'hola soy una prueba'}]
    return api
  }

  const allPokemons = async() => {
    const allPokesApi = await allPokemonsApi()
    let allPokesDB = await allPokemonsDB()

    return [...allPokesApi,...allPokesDB]
  }

  const allTypes = async ()=>{

    const {data} = await axios.get("https://pokeapi.co/api/v2/type")
    const allTypesApi =data.results.map(e => e.name)

   try { allTypesApi.forEach(e => Types.findOrCreate({
      where: {
        name: e
      }
    }))
    const allTypes = await Type.findAll()

    return allTypes

  } catch(error){res.status(404).send(error)}
}

module.exports = {
    allPokemons,
    allTypes
}