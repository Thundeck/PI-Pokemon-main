const express= require('express');
const {allTypes } = require('./controller');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const types = express.Router()


types.get('/' , async(req,res) =>{
    try {
        const types = await allTypes()
        console.log(allTypes())
        res.status(200).send(types)
    } catch (error) {
        res.status(400).send(error)
    }
})



module.exports = types;