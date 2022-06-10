const nanoid = require('nanoid')

const createPokemonModel = db => {
  return {
    findMany(filter) {
      return db.get('pokemon')
        .filter(filter)
        .orderBy(['createdAt'], ['desc'])
        .value()
    },

    findOne(filter) {
      return db.get('pokemon')
        .find(filter)
        .value()
    },

    create(pokemon) {
      const newPokemon = {id: nanoid(), createdAt: Date.now(), ...pokemon}
      
      db.get('pokemon')
        .push(newPokemon)
        .write()

      return newPokemon
    }
  }
}

module.exports = createPokemonModel
