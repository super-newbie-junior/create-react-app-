import styles from './style.module.css';

const AppHeader = ({ title = "", description = "" }) => {
  /** Декомпозиция с предустановленными свойствами решает проблему проверки props на undefined */
  return (
    <header className={styles.root}>
      <div className={styles.forest}></div>
      <div className={styles.container}>
          <h1>{title}</h1>
          <p>{description}</p>
      </div>
    </header>
  )
}

export default AppHeader;