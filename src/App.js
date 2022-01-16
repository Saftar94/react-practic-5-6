import './App.css'
import { Component } from 'react'
import shortid from 'shortid'
import Section from './componet/Sections/Section'
import Title from './componet/Title/Title'
import FormInput from './componet/FormInput/Forminput'
import FormHome from './componet/Formhome/Formhome'
import Modalwin from './componet/Modalwindow/Modalwindow'
import Clock from './componet/Clock/clock'
// REST API POKEMON
class App extends Component {
  state = {
    todos: 'initialTools',
    filter: '',
    showModal: false,
  }
  // Достучаться до state из Forminput

  FormSubmitInput = (data) => {
    console.log(data)
  }
  addTodo = (text) => {
    console.log(text)
    const todo = {
      id: shortid.generate(),
      text,
      complet: false,
    }
    this.setState((prevSet) => ({ todo: [...todo, prevSet] }))
  }
  togglemodal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }))
  }

  render() {
    return (
      <>
        <Section title="Practick 5-6">
          <FormInput onSubmit={this.addTodo} />
          <Title />
          <FormHome onSubmit={this.FormSubmitInput} />
          {this.state.showModal && <Modalwin onClose={this.togglemodal} />}
          <button type="button" onClick={this.togglemodal}>
            Open Modalwindow
          </button>
          <Clock />
        </Section>
      </>
    )
  }
}

export default App
