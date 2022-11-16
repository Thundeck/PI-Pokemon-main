import React from 'react'

function Card({name,img,types}) {
  return (
    <div>
      <img src={img} alt={name}/>
      <div >
        <h2>{name}</h2>
        {types.length > 1 ? <p>types:{types[0]},{types[1]}</p> : <p>types:{types[0]}</p>}
      </div>
    </div>
  )
}

export default Card