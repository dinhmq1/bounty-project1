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
    gender: PokemonGender!
    name: String!
    trainer: User!
    img: String!
    createdAt: Int!
  }

  input NewPokemonInput {
    name: String!
    gender: PokemonGender!
  }

  input PokemonsInput {
    gender: PokemonGender
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
