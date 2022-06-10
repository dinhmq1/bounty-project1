module.exports = {
  Query: {
    pokemons(_, { input }, { models }) {
      return models.Pokemon.findMany(input || {});
    },
    pokemon(_, { id }, { models }) {
      return models.Pokemon.findOne({ id });
    },
    user(_, __, { models }) {
      return models.User.findOne();
    },
  },
  Mutation: {
    addPokemon(_, { input }, { models, user }) {
      const pokemon = models.Pokemon.create({ ...input, user: user.id });
      return pokemon;
    },
  },
  Pokemon: {
    trainer(pokemon, _, { models }) {
      return models.User.findOne({ id: pokemon.user });
    },
    img(pokemon) {
      return pokemon.gender === "MALE"
        ? "https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png"
        : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png"
        ? pokemon.gender === "UNKNOWN"
        : "https://assets.pokemon.com/assets/cms2/img/pokedex/full/081.png";
    },
  },
  User: {
    pokemons(user, _, { models }) {
      return models.Pokemon.findMany({ user: user.id });
    },
  },
};
