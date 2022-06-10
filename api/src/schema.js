const { gql } = require("apollo-server");

const typeDefs = gql`
  enum PokemonGender {
    MALE
    FEMALE
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

  input AddPokemonInput {
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
    addPokemon(input: AddPokemonInput!): Pokemon!
  }
`;

module.exports = typeDefs;
