import Landing from './components/Landing';
import Home from './components/Home';
import CreatePokemon from './components/CreatePokemon';
import SearchBar from './components/Searchbar';
import PokemonDetails from './components/PokemonDetails';
import {Route} from 'react-router-dom'

function App() {
  return (
    <div >
      <Route exact path='/' component={Landing}/>
      <Route path='/home' component={SearchBar}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/home/:id'component={PokemonDetails}/>
      <Route exact path='/home/create' component={CreatePokemon}/>
    </div>
  );
}

export default App;
