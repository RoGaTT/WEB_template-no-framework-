import styles from 'scss/index.scss'
import initialize from './js'

document.addEventListener('DOMContentLoaded', () => {
    console.log(`Script status: OK`)
    initialize()
    console.log(`Styles status: ${styles ? 'OK' : 'Error'}`)
})