// import PropTypes from 'prop-types'
import { Component } from 'react'
class Title extends Component {
  state = {
    todoos: 'Hello React',
    filter: '',
  }
  inputName = (event) => {
    const { filter, value } = event.currentTarget
    this.setState({ [filter]: value })
  }
  ComponentUpdate = (prevProps, prevState, snapShot) => {
    console.log(prevState)
    console.log(this.state)
  }

  render() {
    return (
      <form>
        <label>
          <p>Name</p>
          <input
            type="checkbox"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.inputName}
          />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.inputName}
          />
        </label>
      </form>
    )
  }
}

export default Title
