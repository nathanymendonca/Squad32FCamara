import Link from 'next/link'
import MaterialTable from 'material-table'
import { Button } from '../components/Button/Button'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import styles from '../styles/pages/receiverDashboard.module.css'

export default function receiverDashboard(){
    
    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.section}>

                <div className={styles.sideboard}>
                    <img src="/images/profile.png" alt="profile"/>
                    <p>Usuário</p>
                    <br/>

                    <div className={styles.menu}>

                        <h1>CADASTRO</h1>
                        <h1>ESCOLAS CADASTRADAS</h1>
                        <h1>AVISO DE RECEBIMENTO</h1>

                        <Link href="/">
                            <a href="">
                            <Button text="SAIR"/>
                            </a>
                        </Link>

                    </div>
                </div>

                <div className={styles.view}>
                    <img src="/images/logo.png" alt="logo"/>
                    <br/>
                    <div className={styles.table}>

                        <div style={{ maxWidth: '100%' }}>
                            <MaterialTable
                            
                            columns={[
                                { title: 'Aluno', field: 'name' },
                                { title: 'Matricula', field: 'surname' },
                                { title: 'Escola', field: 'birthYear',  },
                                { title: 'Material Solicitado', field: 'birthCity', },
                                {title: 'Data', field:''},
                                {title: 'Acessar aviso de recebimento', field:''}
                            ]}
                            data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
                            options={{    
                                headerStyle: {
                                    backgroundColor: '#9C4019',
                                    color: '#FFF'
                                },
                                toolbar:false,
                                paging:false
                            }}
                            />
                        </div>
                        <br/>
                    </div>
                </div>


            </div>

            <Footer/>
        </div>
        
    )
    
}