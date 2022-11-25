import React from 'react'
import {Link} from 'react-router-dom'
import s from './Landing.module.css'

function Landing() {
  return (
    <div  className={s.landing} >
      <Link className={s.start} to='/home'> esto no se ve</Link>
    </div>
  )
}

export default Landing