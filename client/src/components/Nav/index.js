import React from 'react'
import {Link} from 'react-router-dom'
import Searchbar from '../Searchbar'
import pokemonlogo from '../../img/pokemonlogo.png'
import s from './Nav.module.css'

function Nav() {
  return (
    <div className={s.container} >
        <Link className={s.link} to='/home'><img className={s.img} src={pokemonlogo} alt='Pokemon Logo'/></Link>
        <Link className={s.link} to='/home/create'>Create Pokemon</Link>
        <Searchbar/>
    </div>
  )
}

export default Nav