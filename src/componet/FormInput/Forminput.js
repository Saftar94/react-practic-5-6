import { Component } from 'react'

class FormInput extends Component {
  state = {
    name: '',
    lastname: '',
    expirienc: '',
  }
  //   Добавлять значение по ключу или вычисляемые значения по ключу
  handelChange = (event) => {
    const { name, value } = event.currentTarget
    this.setState({
      [name]: value,
    })
  }
  handelSubmit = (event) => {
    event.preventDefault()

    // Распылить сюда onSubmit или что то передать
    this.props.onSubmit(this.state)
    // Удалять даные также можно передавать функцию во внутрь функции
    this.reset()
  }

  reset = () => {
    this.setState({ name: '', lastname: '' })
  }

  //   handelinputChange = (event) => {
  //     console.log(event.currentTarget.value)
  //     this.setState({ name: event.currentTarget.value })
  //   }
  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handelChange}
            />
          </label>
          <label>
            Lastname:
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handelChange}
            />
          </label>
          <p>You Level</p>
          <label>
            <input
              type="radio"
              name="expirienc"
              value="junior"
              onChange={this.handelChange}
              checked={this.state.expirienc === 'junior'}
            />
            Junior
          </label>
          <label>
            <input
              type="radio"
              name="expirienc"
              value="senior"
              onChange={this.handelChange}
              checked={this.state.expirienc === 'senior'}
            />
            Senior
          </label>
          <label>
            <input
              type="radio"
              name="expirienc"
              value="midle"
              onChange={this.handelChange}
              checked={this.state.expirienc === 'midle'}
            />
            Midle
          </label>
          <button type="submit">Отправить</button>
        </form>
      </div>
    )
  }
}

export default FormInput
