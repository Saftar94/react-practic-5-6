import { Component } from 'react'
// import { ToastContainer } from 'react-toastify'
class PocemonInfo extends Component {
  state = {
    pokemon: {},
    loading: false,
  }
  async componentDidMount() {
    this.setState({ loading: true })
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
      .then((res) => res.json())
      .then((pokemon) => this.setState({ pokemon }))
      .finally(() => this.setState({ loading: false }))
  }
  render() {
    return (
      <div styles={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        {this.state.loading && <h1>Loading...</h1>}
        {this.state.pokemon && <div>{this.state.pokemon.name}</div>}
      </div>
    )
  }
}

export default PocemonInfo
{
  /* <ToastContainer autoClose={100} /> */
}
