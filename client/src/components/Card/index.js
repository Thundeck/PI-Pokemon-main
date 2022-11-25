import React from 'react'
import defaultImg from '../../img/defaultImg.png'
import s from './Card.module.css'
import Types from '../types'

function Card({name,img,types}) {
  return (
    <div className={s.card}>
      <div className={s.circle}>
        <img src={img || defaultImg} className={s.img} alt={name}/>
      </div>
      <div className={s.under}>
          <h2>{name}</h2>
      </div>
      <div className={s.types} >
        { types?.map(e => {return Types(e.name)})}
      </div>
    </div>
  )
}

export default Card