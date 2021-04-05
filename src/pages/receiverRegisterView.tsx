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
                
                    <div className={styles.data}>
                        <p>Dados do Responsável</p>
                        <br/>
                        <div className={styles.responsibleData}>
                            
                            <div className={styles.left}>
            
                                <h1>Nome: Amarildo da Silva</h1>
                                <h1>Email:amarido@gmail.com</h1>
                                <h1>Sexo: masculino</h1>
                                <h1>Telefone:(11)999999999</h1>

                            </div>

                            <div>
                                <br/>
                                <h1>CPF: 000.000.000-00</h1>
                                <h1>Estado Civil: Casado</h1> 
                                <h1>Data de Nascimento: 12/03/1089</h1>
                            </div>
                        
                        </div>
                        <br/>
                            <p>Dados do Aluno</p>
                            <br/>
                        <div className={styles.studentData}>
                            
                            <div className={styles.left}>
                                <h1>Nome: Diego da Silva</h1>
                                <h1>CPF: 000.000.000-00</h1>
                                <h1>Data de Nascimento: 17/08/2009</h1>
                            </div>

                            <div>
                                <h1>Matrícula do Aluno: 000000</h1>
                                <h1>Sexo: MASCULINO</h1> 
                                <h1>Etapa de Ensino: 6° ano Ensino Fundamental</h1>
                            </div>
                        
                        </div>
                        <br/>
                        <p>Endereço</p>
                        <br/>
                        <div className={styles.adress}>
                            
                            <div className={styles.left}>
            
                                <h1>CEP: 00000-000</h1>
                                <h1>Logradouro: Rua das Andorinhas</h1>
                                <h1>Bairro: Caramuru</h1>
                                <h1>Estado: AC</h1>
                                

                            </div>

                            <div>
                            
                                <h1>Número: 10</h1>
                                <h1>Cidade: Nova Detroit</h1> 
                                <h1>Complemento: Próximo à Delegacia</h1>
                            </div>
                        </div>
                        <br/>
                        <p>Comprovante de renda</p>

                        <br/>
                    </div>

                    <div className={styles.buttons}>
                        <Link href="/">
                            <a href="">
                            <Button text="ATUALIZAR DADOS"/>
                            </a>
                        </Link>

                        <Link href="/">
                            <a href="">
                            <Button text="CADASTRAR NOVO ALUNO"/>
                            </a>
                        </Link>
                    </div>
                </div>

            </div>

            <Footer/>
        </div>
        
    )

}