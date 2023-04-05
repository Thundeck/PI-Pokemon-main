import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getDetails, deleteDetail} from '../../redux/actions'
import s from './detail.module.css'
import t from '../types/types.module.css'

function PokemonDetails({match}) {

  const dispatch = useDispatch()
  const {id,name,types,sprites,attack,defense,health,height,speed,weight} = useSelector(state => state.detail)

  useEffect(() =>{
    const id = match.params.id
    dispatch(getDetails(id))
  },[dispatch,match.params.id])

  useEffect(() =>{
    return () => dispatch(deleteDetail())
  },[dispatch])

  console.log(height)

  return (
    <div className={s.container} >

      <section className={s.infoContainer}>
        <img src={sprites} alt={name}/>
        <div className={s.infoContainerdiv}>N°{id}</div>
        <h2 className={s.infoContainerh2} >{name}</h2>
      </section>

      <section className={s.infoContainer} >
        <div className={s.stats}>
          <p>Stats</p>
          <ul>
            <li>Health: {health}</li>
            <li>Attack: {attack}</li>
            <li>Defense: {defense}</li>
            <li>Speed: {speed}</li>
          </ul>
        </div>

        <div className={s.stats} >
          <p>Types</p>
          { types?.map((e,index) => {return(
          <div key={index} className={`${t.pkmtype} ${t[e.name]}`} >
              <span>{e.name}</span>
            </div>)})}
        </div>

        <div className={s.stats} >
          <p  >Body</p>
          <ul>
            <li>Height: {height}</li>
            <li>Weight: {weight}</li>
          </ul>
        </div>

      </section>

    </div>
  )
}

export default PokemonDetails