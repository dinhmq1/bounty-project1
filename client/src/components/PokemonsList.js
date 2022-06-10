import PokemonBox from './PokemonBox'
import React from 'react'

export default function PokemonsList({pokemons}) {
  return (
    <div className="row">
      {pokemons.map(pokemon => (
        <div className="col-xs-12 col-md-4 col" key={pokemon.id}>
          <div className="box">
            <PokemonBox pokemon={pokemon} />
          </div>
        </div>
      ))}
    </div>
  )
}

PokemonsList.defaultProps = {
  pokemons: []
}
