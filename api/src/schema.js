const { gql } = require("apollo-server");

const typeDefs = gql`
  enum PokemonGender {
    MALE
    FEMALE
    UNKNOWN
  }

  type User {
    id: ID!
    username: String!
    pokemons: [Pokemon]!
  }

  type Pokemon {
    id: ID!
    generation_id: Int!
    trainer: User!
    img: String!
    createdAt: Int!
  }

  input NewPokemonInput {
    name: String!
    type: PokemonGender!
  }

  input PokemonsInput {
    type: PokemonGender
  }

  type Query {
    user: User!
    pokemons(input: PokemonsInput): [Pokemon]!
    pokemon(id: ID!): Pokemon!
  }

  type Mutation {
    addPokemon(input: NewPokemonInput!): Pokemon!
  }
`;

module.exports = typeDefs;
