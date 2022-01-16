import { Component } from 'react'
import Section from './componet/Sections/Section'
import PocemonInfo from './componet/Pokrmon/Pokemoninfo'
import PokemonForm from './componet/Pokrmon/PokemonForm'
import PokemonRender from './componet/Pokrmon/PokemonRend'

class AppPokemon extends Component {
  state = {
    pokemonName: '',
  }
  handelFormSubmit = (pokemonName) => {
    this.setState({ pokemonName })
    console.log(pokemonName)
  }
  render() {
    return (
      <>
        <Section title="Rest AIP POCKEMON">
          <PokemonForm inputName={this.handelFormSubmit} />
          <PocemonInfo />
          <PokemonRender pokemonName={this.state.pokemonName} />
        </Section>
      </>
    )
  }
}
export default AppPokemon
