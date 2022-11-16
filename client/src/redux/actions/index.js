import * as actions from '../actionsTypes'
import axios from 'axios'

export const getAllPokemons = () => async dispatch => {
try{
        const api = await axios.get('http://localhost:3001/pokemons')
        dispatch({
            type: actions.GET_ALL_POKEMONS,
            payload: api.data
        })
    }
catch(error){ console.log(error)}
}

export const getAllTypes = () => async dispatch => {
    try{
            const api = await axios.get('http://localhost:3001/types')
            dispatch({
                type: actions.GET_ALL_TYPES,
                payload: api.data
            })
        }
    catch(error){ console.log(error)}
}

// export function filterType(type){
//     return{
//         type: actions.FILTER_BY_TYPE,
//         payload: type
//     }
// }

export function filterType(type,all){
    const filtered = type === 'all' ? all : all.filter(e => e.types.some(e => e === type));

    return{
        type: actions.FILTER_BY_TYPE,
        payload: filtered
    }
}


// const order = (array) => {
//     let arr  = array
//     arr.sort((a,b) => {
//         if(a.name === b.name)return 0 // no cambia
//         if(a.name > b.name)return 1// a queda un lugar antes que b
//         return -1// cambiar a por b
//       }
//       )
//     return arr
// }

export const orderPokemonsAsc = () => {

    return{
            type: actions.ORDER_POKEMONS_AZ,
    }

}

export const orderPokemonsDes = () => {

    return{
            type: actions.ORDER_POKEMONS_ZA,
    }

}

export const orderAttackAsc = () => {

    return{
            type: actions.ORDER_ATTACK_AZ,
    }

}

export const orderAttackDes = () => {

    return{
            type: actions.ORDER_ATTACK_ZA,
    }

}