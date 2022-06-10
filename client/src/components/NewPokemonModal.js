import NewPokemon from './NewPokemon'
import React from 'react'

export default function NewPokemonModal({onSubmit, onCancel}) {
  return (
    <div className="row center-xs">
      <div className="col-xs-8">
        <NewPokemon onSubmit={onSubmit} onCancel={onCancel} />
      </div>
    </div>
  )
}
