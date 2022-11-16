import * as actions from '../actionsTypes'

const initialState = {
    allPokemons : [],
    pokemons: [],
    allTypes:[],

}

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
    case actions.GET_ALL_POKEMONS:
            return{
                ...state,
                allPokemons: action.payload,
                pokemons: action.payload
            }
    case actions.GET_ALL_TYPES:
        return{
            ...state,
            allTypes: action.payload
        }
    case actions.FILTER_BY_TYPE:

    return{
        ...state,
        pokemons: action.payload
    }
    case actions.ORDER_POKEMONS_AZ:
        let aZ = [
            ...state.pokemons.sort((a, b) => a.name.localeCompare(b.name)),
          ];
          return {
            ...state,
            pokemons: aZ,
          };
    case actions.ORDER_POKEMONS_ZA:
        let zA = [
            ...state.pokemons.sort((a, b) => b.name.localeCompare(a.name)),
          ];
          return {
            ...state,
            pokemons: zA,
          };
        case actions.ORDER_ATTACK_AZ:
        let asc = [
            ...state.pokemons.sort((a, b) => b.attack - a.attack),
            ];
            return {
            ...state,
            pokemons: asc,
            };
    case actions.ORDER_ATTACK_ZA:
        let des = [
            ...state.pokemons.sort((a, b) => a.attack - b.attack),
            ];
            console.log(des)
            return {
            ...state,
            pokemons: des,
            };
    
        default: return state
    }

}

export default rootReducer