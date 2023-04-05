import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import Searchbar from '../Searchbar'
import pokemonlogo from '../../img/pokemonlogo.png'

import s from './Nav.module.css'

function Nav() {

const location = useLocation()


  return (
    <div className={s.container} >
        <Link className={s.link} to='/home'><img className={s.img} src={pokemonlogo} alt='Pokemon Logo'/></Link>
        { !(location.pathname ==="/home/create") && <Link className={s.link} to='/home/create'>Create Pokemon</Link>}
        {location.pathname ==="/home" && <Searchbar/>}
    </div>
  )
}

export default Nav