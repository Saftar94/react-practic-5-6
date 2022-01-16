import { Component } from 'react'

class Clock extends Component {
  state = {
    time: new Date().toLocaleTimeString(),
  }

  intervalId = null

  // Подключить слушателя событий
  componentDidMount() {
    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000,
    )
  }
  //   Размантировать Функции для или отключить слушателя
  componentWillUnmount() {
    clearInterval(this.intervalId)
  }
  render() {
    return <div>{this.state.time}</div>
  }
}
export default Clock
