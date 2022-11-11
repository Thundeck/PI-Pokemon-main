const express = require('express');
const {allPokemons } = require('./controller');
const {Pokemon, Types} = require('../db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const pokemons = express.Router()

pokemons.get('/' ,async(req,res) =>{
    const {name} = req.query
    // console.log(await allPokemons())
    const db = await allPokemons()
//     if(!name){
//     try{
//         res.status(200).send(db)
//     } catch(error){ res.status(400).send(error)
//     }
//     } else {
//     try{
//         const find = db.filter(e => e.name.toLowerCase() === name.toLowerCase())
//         find.length ? res.status(200).send(find) : res.status(404).send('ocurrieron problemas')
//     } catch(error){res.status(404).send(error)}
// }
    try {
        if(name){
            const find = db?.filter(e => e.name.toLowerCase() === name.toLowerCase())
            find.length ? res.status(200).send(find) : res.status(404).send('ocurrieron problemas')
        }
        res.status(200).send(db)
        
    } catch (error) {
        res.status(404).send(error)
    }

})

pokemons.get('/:id' ,async(req,res) =>{
    const {id} = req.params
    try{
        const db = await allPokemons()
       const found = db?.filter(e => Number(e.id) === Number(id))
       found.length ? res.status(200).send(found) : res.status(404).send('seguro que es el ID correcto?')
    }
    catch(error){ res.status(400).send(error)}
})

pokemons.post('/' ,async(req,res) =>{
    const {
      id,
      img,
      name,
      health,
      attack,
      defense,
      speed,
      heigth,
      weigth,
      types} = req.body
      try{
        let newPokemon = await Pokemon.create({
            id,
            img,
            name,
            health,
            attack,
            defense,
            speed,
            heigth,
            weigth,
            types
        })
    
        let typesDB = await Types.findAll()
        const newPokemonTypes = typesDB.filter(e => e == types[0] || e === types[1])
        newPokemon.addTypes(newPokemonTypes)
        res.send('El pokemon ha sido creado con éxito')
      } catch(error){ res.status(400).send(error)}
})



module.exports = pokemons;