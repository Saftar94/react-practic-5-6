import style from './Formhome.module.scss'

// const FormHome = ({ todos, onDeleteTodo, onTogleComplet }) => (
//   <ul>
//     {todos.map(({ id, text, completed }) => (
//       <li key={id} className={style.InputGoal}>
//         <input type="checkbox" name="expirienc" checked={completed} />
//         <p>{text}</p>
//         <button
//           type="button"
//           onClick={() => {
//             onDeleteTodo(id)
//           }}
//         >
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>
// )

import { Component } from 'react'

class FormHome extends Component {
  state = {
    message: '',
  }
  handelChange = (event) => {
    this.setState({
      message: event.currentTarget.value,
    })
  }
  handelSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.message)

    this.setState({ message: '' })
  }
  render() {
    return (
      <form className={style.InputGoal} onSubmit={this.handelSubmit}>
        <textarea
          value={this.state.message}
          onChange={this.handelChange}
        ></textarea>
        <button type="submit">Save</button>
      </form>
    )
  }
}

export default FormHome
