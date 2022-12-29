import Ad from './Ad'
import Main from './Main'
import styles from './style.module.scss'
import Top from './Top'
export default function Header() {
  return (
    <header className={styles.header}>
      <Ad />
      <Top />
      <Main />
    </header>
  )
}
