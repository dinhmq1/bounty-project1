import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/react-hooks";

//import PetsList from "../components/PetsList";
//import NewPetModal from "../components/NewPetModal";
// import Loader from "../components/Loader";
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
export default function Pokemons() {
  return (
    <div>
      <section>
        <div className="col-xs-10">
          <h1>Pokemons</h1>
        </div>
      </section>
    </div>
  );
}
// export default function Pokemons() {
//   const [modal, setModal] = useState(false);
//   const { data, loading, error } = useQuery(ALL_POKEMONS);

//   const onSubmit = (input) => {
//     setModal(false);
//   };

//   if (loading) {
//     return <Loader />
//   }

//   if (error) {
//     return <p>error!</p>
//   }

//   if (modal) {
//     return <NewPetModal onSubmit={onSubmit} onCancel={() => setModal(false)} />;
//   }

//   return (
//     <div className="page pets-page">
//       <section>
//         <div className="row betwee-xs middle-xs">
//           <div className="col-xs-10">
//             <h1>Pokemons</h1>
//           </div>

//           <div className="col-xs-2">
//             <button onClick={() => setModal(true)}>new pet</button>
//           </div>
//         </div>
//       </section>
//       <section>
//         <PetsList pets={data.pets} />
//       </section>
//     </div>
//   );
// }
