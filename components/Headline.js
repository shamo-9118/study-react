import styles from '../styles/Home.module.css'

export function Headline(props) {
  return (
    <>
    <h1 className={styles.title}>
    Welcome to <a href="https://nextjs.org">{props.page} page!!</a>
  </h1>

  <p className={styles.description}>
    こんにちは started by editing{' '}
    <code className={styles.code}>pages/{props.page}.js</code>
  </p>
  </>
  )
}
