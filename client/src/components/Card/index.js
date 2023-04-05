import React from 'react'
import defaultImg from '../../img/defaultImg.png'
import s from './Card.module.css'
import Types from '../types/types.module.css'

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
        { types?.map((e,index) => {
          return <div key={index} className={`${Types.pkmtype} ${Types[e.name]}`}><span>{e.name}</span></div>
          })}
      </div>
    </div>
  )
}

export default Card