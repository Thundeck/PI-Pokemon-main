const Types = (type) => {

const typeStyles = {
  normal:<div class="pkm-type normal"><span>Normal</span></div>,
  fire:<div class="pkm-type fire"><span>Fire</span></div>,
  fighting:<div class="pkm-type fighting"><span>Fighting</span></div>,
  water:<div class="pkm-type water"><span>Water</span></div>,
  poison:<div class="pkm-type poison"><span>Poison</span></div>,
  electric:<div class="pkm-type electrik"><span>Electrik</span></div>,
  ground:<div class="pkm-type ground"><span>Ground</span></div>,
  grass:<div class="pkm-type grass"><span>Grass</span></div>,
  flying:<div class="pkm-type flying"><span>Flying</span></div>,
  ice:<div class="pkm-type ice"><span>Ice</span></div>,
  bug:<div class="pkm-type bug"><span>Bug</span></div>,
  psychic:<div class="pkm-type psychic"><span>Psychic</span></div>,
  rock:<div class="pkm-type rock"><span>Rock</span></div>,
  dragon:<div class="pkm-type dragon"><span>Dragon</span></div>,
  ghost:<div class="pkm-type ghost"><span>Ghost</span></div>,
  dark:<div class="pkm-type dark"><span>Dark</span></div>,
  steel:<div class="pkm-type steel"><span>Steel</span></div>,
  fairy:<div class="pkm-type fairy"><span>Fairy</span></div>,
  shadow:<div class="pkm-type shadow"><span>Shadow</span></div>,
  unknown:<div class="pkm-type unknown"><span>Unknown</span></div>,
}


  return typeStyles[type]
}

export default Types