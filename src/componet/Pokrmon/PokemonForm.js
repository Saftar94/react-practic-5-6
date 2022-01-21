// import { Component } from 'react'

// class PokemonForm extends Component {
//   state = {
//     pokemonName: '',
//   }
//   handelChangeName = (event) => {
//     this.setState({ pokemonName: event.currentTarget.value.toLowerCase() })
//   }
//   handelSubmit = (event) => {
//     event.preventDefault()

//     if (this.state.pokemonName.trim() === '') {
//       return
//     }
//     this.props.inputName(this.state.pokemonName)
//     this.setState({ pokemonName: '' })
//   }

//   render() {
//     return (
//       <form onSubmit={this.handelSubmit} style={styles.form}>
//         <h1>Form Pokemon</h1>
//         <input
//           type="text"
//           name="pokemonName"
//           value={this.state.pokemonName}
//           onChange={this.handelChangeName}
//         ></input>
//         <button type="submit">Serch</button>
//       </form>
//     )
//   }
// }

// export default PokemonForm

import { useState } from "react";
const styles = { form: { marginBotton: 20 } };

export default function PokemonForm({ inputName }) {
  const [pokemonName, setPokemonName] = useState("");

  const handelChangeName = (event) => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handelSubmit = (event) => {
    event.preventDefault();

    if (pokemonName.trim() === "") {
      return;
    }
    inputName(pokemonName);
    setPokemonName("");
  };

  return (
    <form onSubmit={handelSubmit} style={styles.form}>
      <h1>Form Pokemon</h1>
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handelChangeName}
      ></input>
      <button type="submit">Serch</button>
    </form>
  );
}
