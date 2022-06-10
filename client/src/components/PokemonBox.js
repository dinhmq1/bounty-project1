import React from 'react'

const PokemonBox = ({pokemon}) => (
  <div className="pokemon">
    <figure>
      <img src={pokemon.img + `?pokemon=${pokemon.id}`} alt=""/>
    </figure>
    <div className='pokemon-labelName'>
    <div className="pokemon-name">{pokemon.name}</div>
    <div className="pokemon-gender">{pokemon.gender}</div>
     </div>
  </div>
)

export default PokemonBox
