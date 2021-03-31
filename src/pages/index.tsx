import React from 'react';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header'
import { Menu } from '../components/Menu/Menu';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container}>

      <Header/>

      <section>
         
          <img className={styles.capa} src="/images/capa.png" alt="capa"/>

          
      </section>


      <Menu/>
      <Footer/>

    </div>

  )
}
