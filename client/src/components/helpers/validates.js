const validates = ({
    img,
    name,
    health,
    attack,
    defense,
    speed,
    height,
    weight,
    types
  },setError) =>{
    let stats = {
      health: Number(health),
      attack: Number(attack),
      defense: Number(defense),
      speed: Number(speed),
      height: Number(height),
      weight: Number(weight),

    }
    let validated = true
    let error = {
        name:true,
        health:true,
        attack:true,
        defense:true,
        speed:true,
        height:true,
        weight:true,
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
    if(typeof stats.height === 'number' && stats.height >= 0.1 && stats.height <= 200 ){
        error = {...error, height: true}
      } else{
        error = {...error, height: false}
        validated = false
      }
    // weigth
    if(typeof stats.weight === 'number' && stats.weight > 0.1 && stats.weight <= 999.9 ){
        error = {...error, weight: true}
      } else{
        error = {...error, weight: false}
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