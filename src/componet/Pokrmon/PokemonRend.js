import { Component } from 'react'
class PokemonRender extends Component {
  state = {
    pokemon: null,
    loading: false,
  }
  componentDidUpdate(prevProps, prevSet) {
    if (prevProps.pokemonName !== this.props.pokemonName) {
      this.setState({ loading: true, pokemon: null })
      fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
        .then((res) => res.json())
        .then((pokemon) => this.setState({ pokemon }))
        .finally(() => this.setState({ loading: false }))
    }
  }

  render() {
    const { loading, pokemon } = this.state
    const { pokemonName } = this.props
    return (
      <div>
        <h1>{pokemonName}</h1>
        {loading && <div>Loading</div>}
        {!pokemonName && <div>input name pokemon</div>}
        {pokemon && (
          <div>
            {pokemon.name}
            <img
              src={pokemon.sprites.other['official-artwork'].front_default}
              alt=""
              width="300"
            />
          </div>
        )}
      </div>
    )
  }
}

export default PokemonRender
