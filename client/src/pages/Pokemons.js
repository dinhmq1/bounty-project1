import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";

import Loader from "../components/Loader";
import NewPokemonModal from "../components/NewPokemonModal";
import PokemonsList from "../components/PokemonsList";
import { createOperation } from "apollo-link";
import gql from "graphql-tag";

const ALL_POKEMONS = gql`
  query AllPokemons {
    pokemons {
      id
      name
      gender
      img
    }
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
export default function Pokemons() {
  const [modal, setModal] = useState(false);
  const { data, loading, error } = useQuery(ALL_POKEMONS);
  const [createPokemon, newPokemon] = useMutation(ADD_POKEMON);

  const onSubmit = (input) => {
    setModal(false)
    createPokemon({
      variables: {newPokemon: input}
    });
  };

  if (loading || newPokemon.loading) {
    return <Loader />;
  }

  if (error || newPokemon.error) {
    return <p>error!</p>;
  }

  if (modal) {
    return (
      <NewPokemonModal onSubmit={onSubmit} onCancel={() => setModal(false)} />
    );
  }
  return (
    <div className="page pokemons-page">
      <section>
        <div className="col-xs-10">
          <h1>Pokemon Center</h1>
        </div>
        <div className="col-xs-2">
          <button onClick={() => setModal(true)}>new Pokemon</button>
        </div>
      </section>
      <section>
        <PokemonsList pokemons={data.pokemons} />
      </section>
    </div>
  );
}
