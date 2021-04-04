import React from 'react';
import Link from 'next/link'
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header'
import styles from '../styles/pages/Index.module.css';


export default function Home() {

  return (
    <div className={styles.container}>

      <Header/>
      <section>
          <img className={styles.capa} src="/images/capa.png" alt="capa"/>

      </section>
      <div className={styles.menu}>
            <div className={styles.orangeLine}></div>
            <div className={styles.section}>
                <div className={styles.receiverSquare}>
                    <img src="/icons/plus.svg" alt="plus"/>
                    <h1>RECEBER DOAÇÃO</h1>
                    
                    <p>
                      <Link href="/receiverRegister">
                        <a title="">CADASTRE-SE </a>
                      </Link>
                      OU 
                      <Link  href="/receiverLogin">
                        <a title=""> FAÇA LOGIN</a> 
                    </Link>
                    </p>
                </div>

                <div className={styles.whiteLine1}></div>
                

                <div className={styles.schoolSquare}>
                    <img src="/icons/data.svg" alt="data"/>
                    <h1>ESCOLAS</h1>
                    <p>           
                    <Link  href="/schools">
                        <a title="">ACESSE A ÁREA EXCLUSIVA </a> 
                    </Link>
                    </p>

                </div>

                <div className={styles.whiteLine2}></div>

                <div className={styles.giverSquare}>
                    <img src="/icons/star.svg" alt="star"/>
                    <h1>QUERO DOAR</h1>
                    <p>
                       
                    <Link  href="/giver">
                        <a title="">CLIQUE AQUI </a> 
                    </Link>
                    E SAIBA COMO DOAR
                    </p>

            </div>
            </div>

        </div>

      
      <Footer/>

    </div>

  )
}