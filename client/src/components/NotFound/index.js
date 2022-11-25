import React from 'react'
import {Link} from 'react-router-dom'
import s from './notfound.module.css'

function NotFound() {
  return (
    <div className={s.container} >
      <div className={s.principal}>
        <p className={s.title}>Te perdiste rey?</p>
        <p className={s.p} >deseas volver? <Link className={s.link} to='/home'>clickeame</Link></p>
      </div>
    </div>
  )
}

export default NotFound