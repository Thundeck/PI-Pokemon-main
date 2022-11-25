import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {createPokemon,getAllTypes} from '../../redux/actions'
import validates from '../helpers/validates'
import s from './Create.module.css'

function CreatePokemon() {

  
  const dispatch = useDispatch()
  
  useEffect(() =>{
    dispatch(getAllTypes())
  }, [dispatch])

  const types = useSelector(state => state.allTypes)
  let defaultForm = {
    sprites:'',
    name:'',
    health:'',
    attack:'',
    defense:'',
    speed:'',
    heigth:'',
    weigth:'',
    types:[]
  }


  const [form, setForm] = useState(defaultForm)
  const [error, setError] = useState({
    name:true,
    health:true,
    attack:true,
    defense:true,
    speed:true,
    heigth:true,
    weigth:true,
    types:true
  })

  const handleChange = (e) =>{
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleButton = (e) =>{
    e.preventDefault()
    if(form.types.length < 2){
      setForm({
        ...form,
        types: [...form.types, e.target.name]
      })}
    }

    const handleDelete = (e) =>{
      e.preventDefault()
      let deleted = form.types.filter(t => t !== e.target.name)
      setForm({
        ...form,
        types: deleted
      })
    }

  



  const hanldeSubmit = (e) =>{
    e.preventDefault()
    validates(form, setError)
    console.log(form)
     if(validates(form, setError)) dispatch(createPokemon(form))
    setForm(defaultForm)
  }

  return (
    <div className={s.container}>
      <div className={s.header} >
        <h1>Create Pokemon</h1>
        <h3>Do you want to create a pokemon?</h3>
        <p>you are in the right place</p>
      </div>

    <form className={s.form} onSubmit={e => hanldeSubmit(e)}>

      <div className={s.div} >
        <label className={s.labels} >Pokemon name</label>
        <input autoComplete='off' type='text' placeholder='Mew..' value={form.name} className={s.input} name='name' onChange={(e) => handleChange(e)}/>
        <ul hidden={error.name && error.name}>
          <p>debe contener entre 4 a 30 caracteres</p>
          <p>el unico simbolo permitido es el guion</p>
        </ul>
      </div>

      <div>
        <h3>Types</h3>
        <ul hidden={error.types}>
          <p>no se deben repetir los tipos</p> 
          {/* //darle color cuando es true o false */}
          <p>solo se permiten maximo dos tipos</p>
        </ul>
        <div className={s.selectArea}>
        {form.types.length > 0 && form.types.map(e =>{
          return <div className={s.select} ><p className={s.selectp} key={e}>{e}</p><button className={s.selectd} name={e} onClick={e =>handleDelete(e)}>x</button></div>
        })}
        </div>
        <div className={s.buttonContainer} >
        {types?.map( e => {
          return <button 
                  className={s.button}
                  key={e.id}  
                  id={e.id}
                  name={e.name}
                  onClick={(e) => handleButton(e)}>{e.name}</button>
        })}
        </div>
      </div>

      <div className={s.divInput}>
      <h3>Stats</h3>
      <ul hidden={error.health || error.attack|| error.defense || error.speed}>
          <p>solo se permite ingresar valores numericos(0-9)</p>
          <p>el valor min es 1 y el max 225</p>
        </ul>
      <label>Health</label>
      <input autoComplete='off' className={s.input} placeholder='225..' type='text' value={form.health} name='health' onChange={(e) => handleChange(e)}/>
      <label>Attack</label>
      <input autoComplete='off' className={s.input} placeholder='225..' type='text' value={form.attack} name='attack' onChange={(e) => handleChange(e)}/>
      <label>Defense</label>
      <input autoComplete='off' className={s.input} placeholder='225..' type='text' value={form.defense} name='defense' onChange={(e) => handleChange(e)}/>
      <label>Speed</label>
      <input autoComplete='off' className={s.input} placeholder='225..' type='text' value={form.speed} name='speed' onChange={(e) => handleChange(e)}/>
      </div>

      <div className={s.div}>
      <h3>Body</h3>
      <ul hidden={error.heigth || error.weigth}>
          <p>solo se permite ingresar valores numericos(0-9)</p>
          <p>el valor min es 0.1 y el max 999.9</p>
      </ul>
      <label>Height</label>
      <input autoComplete='off' className={s.input} placeholder='225..' type='text' value={form.heigth} name='heigth' onChange={(e) => handleChange(e)}/>
      <label>Weight</label>
      <input autoComplete='off' className={s.input} placeholder='225..' type='text' value={form.weigth} name='weigth' onChange={(e) => handleChange(e)}/>
      </div>

      <div className={s.div}>
      <div className={s.imgConatainer}>
        <span className={s.label}>Pokemon image</span>
        <input className={s.img} type='file' value={form.sprites} name='sprites' onChange={(e) => handleChange(e)}/>
      </div>
      </div>


      <button  className={s.submit} type='submit'>Create</button>
    </form>
    </div>
  )
}

export default CreatePokemon