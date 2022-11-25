const validates = ({
    img,
    name,
    health,
    attack,
    defense,
    speed,
    heigth,
    weigth,
    types
  },setError) =>{
    let stats = {
      health: Number(health),
      attack: Number(attack),
      defense: Number(defense),
      speed: Number(speed),
      heigth: Number(heigth),
      weigth: Number(weigth),

    }
    let validated = true
    let error = {
        name:true,
        health:true,
        attack:true,
        defense:true,
        speed:true,
        heigth:true,
        weigth:true,
        types:true
      }
    //name
      if(name.match(/^([a-zÀ-ÿ]+[\s-]?){2}[a-z]+?[0-9]?/i) && name.length > 3 && name.length <= 30 ){
        error = {...error, name: true}
      } else{
        error = {...error, name: false}
        validated = false
      }

    // health
    if(typeof stats.health === 'number' && stats.health > 0 && stats.health <= 225 ){
        error = {...error, health: true}
      } else{
        error = {...error, health: false}
        validated = false
      }

    // attack
    if(typeof stats.attack === 'number' && stats.attack > 0 && stats.attack <= 225 ){
        error = {...error, attack: true}
      } else{
        error = {...error, attack: false}
        validated = false
      }
    // defense
    if(typeof stats.defense === 'number' && stats.defense > 0 && stats.defense <= 225 ){
        error = {...error, defense: true}
      } else{
        error = {...error, defense: false}
        validated = false
      }
    // speed
    if(typeof stats.speed === 'number' && stats.speed > 0 && stats.speed <= 225 ){
        error = {...error, speed: true}
      } else{
        error = {...error, speed: false}
        validated = false
      }
    // heigth
    if(typeof stats.heigth === 'number' && stats.heigth >= 0.1 && stats.heigth <= 200 ){
        error = {...error, heigth: true}
      } else{
        error = {...error, heigth: false}
        validated = false
      }
    // weigth
    if(typeof stats.weigth === 'number' && stats.weigth > 0.1 && stats.weigth <= 999.9 ){
        error = {...error, weigth: true}
      } else{
        error = {...error, weigth: false}
        validated = false
      }
    // types
    let typesNoRep = [...new Set(types)]
    if(types.length > 0 && types.length <= 2 && types.length === typesNoRep.length ){
        error = {...error, types: true}
      } else{
        error = {...error, types: false}
        validated = false
      }
    
    setError(error)
    return validated
}

export default validates