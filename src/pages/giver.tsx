import { Button } from '../components/Button/Button';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import MaterialTable from 'material-table'
import styles from '../styles/pages/Giver.module.css';
import Link from 'next/link'

export default function Giver(){
    return(
        <div className={styles.container}>
            <Header/>
                <div className={styles.section}>

                    <img src="./icons/book.svg" alt="cover"/>
                    <h1>ESCOLHA A ESCOLA</h1>
                    <div className={styles.choiceBar}>
                        AQUI VAI o SELECT DA ESCOLA
                    </div>
                    <Button text="BUSCAR"/>

                    <div className={styles.choiceSchool}>
                        CLIQUE E SELECIONE A ESCOLA ENTRE AS QUE RETORNARAM
                    </div>
                    <br/>
                    <div>

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
                                    backgroundColor: '#183b9c',
                                    color: '#FFF'
                                },
                                toolbar:false,
                                paging:false,
                                sorting:false,
                                
                            }}
                            />
                    </div>
                   <br/>
                   <div>

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
                                    backgroundColor: '#1b7704',
                                    color: '#FFF'
                                },
                                toolbar:false,
                                paging:false,
                                sorting:false,
                                
                            }}
                            />
                    </div>
                    <div className={styles.doar}>
                        br
                        <Button text="DOAR"/>

                        <Link href="/">
                            <a href="">
                                <Button text="VOLTAR"/>
                            </a>
                        </Link>
                    </div>

    
                
                </div>
            <Footer/>

        </div>

        
    )

}