import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <h4 className={styles.headerTitle}>This is a header</h4>
      <button className={styles.button}>click me!!</button>
    </div>
  )
}

export default Header
