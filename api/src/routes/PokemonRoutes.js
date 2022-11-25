const express = require('express');
const {allPokemons } = require('./controller');
const {Pokemon, Types} = require('../db.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const pokemons = express.Router()

pokemons.get('/' ,async(req,res) =>{
    // console.log(await allPokemons())
    let typesDB = await Types.findAll()
    try {
        const db = await allPokemons()
        res.status(200).send(db)
    } catch (error) {
        res.status(404).send(error)
    }

})

pokemons.get('/query' ,async(req,res) =>{
    const {name} = req.query

    try{
        const db = await allPokemons()
        const find = db?.filter(e => e.name.toLowerCase() === name.toLowerCase())
        find.length ? res.status(200).send(find) : res.status(404).send('ocurrieron problemas')
    }
    catch(error){ res.status(400).send(error)}
})



pokemons.get('/:id' ,async(req,res) =>{
    const {id} = req.params
    try{
        const db = await allPokemons()
        if(id.length < 5){
       const found = db?.filter(e => Number(e.id) === Number(id))
       found.length ? res.status(200).send(found[0]) : res.status(404).send('seguro que es el ID correcto?')
        } else{
            const found = db?.filter(e => e.id == id)
       found.length ? res.status(200).send(found[0]) : res.status(404).send(id)

        }
    }
    catch(error){ res.status(400).send(error)}
})

pokemons.post('/' ,async(req,res) =>{
    const {
      sprites,
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
            sprites,
            name,
            health,
            attack,
            defense,
            speed,
            heigth,
            weigth
        })

        const typesDB = await Types.findAll({
            where:{
                name:types
            }
        })

        newPokemon.addTypes(typesDB)
        res.send(req.body)
      } catch(error){ res.status(400).send(error)}
})



module.exports = pokemons;