
import { Header } from '../components/Header/Header'
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>

      <Header/>
      <div className={styles.lineGray}></div>
      <img className={styles.capa} src="/images/capa.png" alt="capa"/>

      <div className={styles.lineOrange}></div>

      <div className={styles.menu}>

      </div>

    </div>
  )
}
