import { Component } from 'react'
import { createPortal } from 'react-dom'
import styles from './modalwin.module.scss'
const modalRoot = document.querySelector('#modal-root')
class Modalwin extends Component {
  state = {
    window: '',
  }
  componentDidMount() {
    console.log('Modal componentDidMount')
    window.addEventListener('keydown', this.handelKeyDown)
  }
  componentWillUnmount() {
    console.log('Modal  componentWillUnmount')
    window.removeEventListener('keydown', this.handelKeyDown)
  }
  handelKeyDown = (event) => {
    if (event.code === 'Escape') {
      console.log('Close Escape')
      this.props.onClose()
    }
  }
  handelBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.onClose()
    }
  }
  render() {
    return createPortal(
      <div className={styles.ModalBack} onClick={this.handelBackdropClick}>
        <div className={styles.Modal}>
          <h1>Hello modal</h1>
          {this.props.children}
        </div>
      </div>,
      modalRoot,
    )
  }
}
export default Modalwin
