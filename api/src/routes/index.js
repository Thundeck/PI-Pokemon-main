const { Router } = require('express');
const pokemons = require('./PokemonRoutes');
const types = require('./TypesRoutes')


const router = Router();


// Configurar los routers
router.use('/pokemons', pokemons)
router.use('/types', types)
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
