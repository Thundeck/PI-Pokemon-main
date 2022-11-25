import Landing from './components/Landing';
import Home from './components/Home';
import CreatePokemon from './components/CreatePokemon';
import PokemonDetails from './components/PokemonDetails';
import NotFound from './components/NotFound';
import {Route, Switch} from 'react-router-dom'
import Nav from './components/Nav';

function App() {
  return (
    <div >
      <Route path='/home' component={Nav}/>
      <Switch>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/home/create' component={CreatePokemon}/>
        <Route exact path='/home/:id'component={PokemonDetails}/>
        <Route component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
