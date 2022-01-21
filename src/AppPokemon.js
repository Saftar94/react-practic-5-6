// import { Component } from 'react'
import Section from "./componet/Sections/Section";
import PocemonInfo from "./componet/Pokrmon/Pokemoninfo";
import PokemonForm from "./componet/Pokrmon/PokemonForm";
import PokemonRender from "./componet/Pokrmon/PokemonRend";
import SingupForm from "./componet/SingupForm/SingupForm";
import { useState } from "react";

// class AppPokemon extends Component {
//   state = {
//     pokemonName: '',
//   }
//   handelFormSubmit = (pokemonName) => {
//     this.setState({ pokemonName })
//     console.log(pokemonName)
//   }
//   render() {
//     return (
//       <>
//         <Section title="Rest AIP POCKEMON">
//           <PokemonForm inputName={this.handelFormSubmit} />
//           <PocemonInfo />
//           <PokemonRender pokemonName={this.state.pokemonName} />
//         </Section>

//         <Section>
//           <SingupForm />
//         </Section>
//       </>
//     )
//   }
// }
// export default AppPokemon

export default function AppPokemon() {
  const [pokemonName, setPokemonName] = useState("");

  return (
    <>
      <Section title="Rest AIP POCKEMON">
        <PokemonForm inputName={setPokemonName} />
        <PocemonInfo />
        <PokemonRender pokemonName={pokemonName} />
      </Section>

      <Section>
        <SingupForm />
      </Section>
    </>
  );
}
