// import { Component } from 'react'
import { useEffect, useState } from 'react'
import styles from './SingupForm.module.scss'

export default function SingupForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //   const handelChangeEmail = (event) => {
  //     setEmail(event.target.value)
  //   }
  //   const handelChangePassword = (event) => {
  //     setPassword(event.target.value)
  //   }

  //   ===============================================

  // useEffect(() => {
  //     console.log("сюда записываем функцию")
  // }, ['Суда пишется если что то изменилось условия по кнопке и т.д' email, password])

  const handelChangeName = (event) => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value)
        break
      case 'password':
        setPassword(event.target.value)
        break
      default:
    }
  }
  return (
    <form className={styles.FormInput}>
      <label>
        <span>Email</span>
        <input
          className={styles.Input}
          type="email"
          name="email"
          onChange={handelChangeName}
          value={email}
        />
      </label>
      <label>
        <span>Password</span>
        <input
          className={styles.Input}
          type="password"
          name="password"
          onChange={handelChangeName}
          value={password}
        />
      </label>
      <button className={styles.Buttoninput} type="submit">
        Зарегистрируетесь
      </button>
    </form>
  )
}

// class SingupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   }
//   handelChange = (event) => {
//     const { name, value } = event.targe
//     this.setState({ [name]: value })
//   }
//   render() {
//     const { email, password } = this.state
//     return (
//       <form className={styles.FormInput}>
//         <label>
//           <span>Email</span>
//           <input
//             className={styles.Input}
//             type="email"
//             name="email"
//             onChange={this.handelChange}
//             value={email}
//           />
//         </label>
//         <label>
//           <span>Password</span>
//           <input
//             className={styles.Input}
//             type="password"
//             name="password"
//             onChange={this.handelChange}
//             value={password}
//           />
//         </label>
//         <button className={styles.Buttoninput} type="submit">
//           Зарегистрируетесь
//         </button>
//       </form>
//     )
//   }
// }

// export default SingupForm
