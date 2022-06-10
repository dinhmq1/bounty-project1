import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";

import { ALL } from "dns";
import Loader from "../components/Loader";
import NewPokemonModal from "../components/NewPokemonModal";
import PokemonBox from "../components/PokemonBox";
import PokemonsList from "../components/PokemonsList";
import { createOperation } from "apollo-link";
import gql from "graphql-tag";

const POKEMON_DETAILS = gql`
  fragment PokemonDetails on Pokemon {
    id
    name
    gender
    img
  }
`;
const ADD_POKEMON = gql`
  mutation AddAPokemon($newPokemon: AddPokemonInput!) {
    addPokemon(input: $newPokemon) {
      id
      name
      gender
      img
    }
  }
`;
const GET_POKEMONS = gql`
  query pokemonsList($input: PokemonsInput) {
    pokemons(input: $input) {
      ...PokemonDetails
    }
  }
  ${POKEMON_DETAILS}
`;
export default function Pokemons() {
  const [modal, setModal] = useState(false);
  const pokemons = useQuery(GET_POKEMONS);

  const [createPokemon, newPokemon] = useMutation(ADD_POKEMON, {
    update(cache, { data: { addPokemon } }) {
      const { pokemons } = cache.readQuery({ query: GET_POKEMONS });

      cache.writeQuery({
        query: GET_POKEMONS,
        data: { pokemons: [addPokemon, ...pokemons] },
      });
    },
  });

  if (pokemons.loading) return <Loader />;
  if (pokemons.error || newPokemon.error) return <p>ERROR</p>;

  const onSubmit = (input) => {
    setModal(false);
    createPokemon({
      variables: { newPokemon: input },
    });
  };

  const pokemonsList = pokemons.data.pokemons.map((pokemon) => (
    <div className="col-xs-12 col-md-4 col" key={pokemon.id}>
      <div className="box">
        <PokemonBox pokemon={pokemon} />
      </div>
    </div>
  ));

  if (modal) {
    return (
      <NewPokemonModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
    );
  }
  return (
    <div className="page pokemons-page">
      <section>
        <div className="col-xs-2">
          <button onClick={() => setModal(true)}>Add Pokemon</button>
        </div>
      </section>
      <section>
        <div className="row">{pokemonsList}</div>
      </section>
    </div>
  );
}
