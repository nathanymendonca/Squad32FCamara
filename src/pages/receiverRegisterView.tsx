import Link from 'next/link'
import MaterialTable from 'material-table'
import { Button } from '../components/Button/Button'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'

import styles from '../styles/pages/receiverRegisterView.module.css'
import { Menu } from '../components/Menu/Menu'

export default function receiverDashboard(){
    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.section}>

                <div className={styles.sideboard}>
                    <Menu/>
                </div>

                <div className={styles.view}>
                    <img src="/images/logo.png" alt="logo"/>
                    <br/>
                    <div className={styles.responsibleData}>

                        <p>
                            Dados do Responsável
                            <br/>
                            Nome: Amarildo da Silva
                            Email:amarido@gmail.com
                            Sexo: masculino
                            Telefone:(11)999999999

                        </p>
                            CPF: 000.000.000-00
                            Estado Civil: Casado 
                            Data de Nascimento: 12/03/1089


                        <p>

                        </p>
                    </div>

                    

                    
                </div>


            </div>

            <Footer/>
        </div>
        
    )

}