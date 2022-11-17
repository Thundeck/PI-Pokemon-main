import React from 'react'
import Searchbar from '../Searchbar'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div>
        <Link to='/home'>Home</Link>
        <Link to='/home/create'>Create Pokemon</Link>
        <Searchbar/>
    </div>
  )
}

export default Nav