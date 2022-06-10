import React, {useState} from 'react'

import Select from 'react-select'

const options = [
  { value: 'MALE', label: 'MALE' },
  { value: 'FEMALE', label: 'FEMALE' }
]

export default function NewPokemon({onSubmit, onCancel}) {
  const [gender, setGender] = useState('MALE')
  const [name, setName] = useState('')

  const activeOption = options.find(o => o.value === gender)

  const submit = e => {
    e.preventDefault()
    onSubmit({name, gender})
  }

  const cancel = e => {
    e.preventDefault()
    onCancel()
  }

  return (
    <div className="new-pokemon page">
      <h1>Add Pokemon</h1>
      <div className="box">
        <form onSubmit={submit}>
          <Select
            value={activeOption}
            defaultValue={options[0]}
            onChange={e => setGender(e.value)}
            options={options}
          />

          <input
            className="input"
            type="text"
            placeholder="pokemon name"
            value={name}
            onChange={e => setName(e.target.value)}
            required
          />
          <a className="error button" onClick={cancel}>cancel</a>          
          <button type="submit" name="submit">add pokemon</button>
        </form>
      </div>
    </div>
  )
}
