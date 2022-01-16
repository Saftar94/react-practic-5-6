import { Component } from 'react'

const styles = { form: { marginBotton: 20 } }
class PokemonForm extends Component {
  state = {
    pokemonName: '',
  }
  handelChangeName = (event) => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() })
  }
  handelSubmit = (event) => {
    event.preventDefault()

    if (this.state.pokemonName.trim() === '') {
      return
    }
    this.props.inputName(this.state.pokemonName)
    this.setState({ pokemonName: '' })
  }

  render() {
    return (
      <form onSubmit={this.handelSubmit} style={styles.form}>
        <h1>Form Pokemon</h1>
        <input
          type="text"
          name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.handelChangeName}
        ></input>
        <button type="submit">Serch</button>
      </form>
    )
  }
}

export default PokemonForm
