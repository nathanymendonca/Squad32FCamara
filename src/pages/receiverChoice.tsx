import styles from '../styles/pages/receiverChoice.module.css'
import { Header } from '../components/Header/Header'
import {Button} from '../components/Button/Button'
import { Menu } from '../components/Menu/Menu'
import MaterialTable from 'material-table'
import { Footer } from '../components/Footer/Footer'

export default function receiverChoice(){
    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.section}>
                <Menu/>
                <div className={styles.view}>
                    <img src="/images/logo.png" alt=""/>
                    <br/>

                    <div className={styles.data}>
                        <h1>Aluno: Diego da Silva</h1>
                        
                        <h1>Etapa de Ensino: 6º ano Ensino Fundamental</h1>
                    
                        <h1>Escola: </h1>

                    </div>
                    <br/>
                    <div style={{ maxWidth: 'fit-content' }}>
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
                    <h1>Selecione o Material Desejado</h1>

                    <Button text="Solicitar Material"/>

                    <div className={styles.info}>
                        <h1>*A quantidade de cadernos requerida pode não ser a mesma que será recebida, pois será adequada à lista 
                            padrão de materiais vigente.</h1>
                        <h1>*Lápis de cor limitado a 1 caixa de 12 cores por aluno.</h1>
                        <h1>*Mochila limitada a 1 por aluno.</h1>
                        <br/>
                        <p>Materiais Solicitados:</p>
                    </div>
                    <br/>
                    </div>
                </div>
                    <div style={{ maxWidth: '100%' }}>
                        <MaterialTable
                             columns={[
                                 { title: 'Aluno', field: 'name' },
                                 { title: 'Matricula', field: 'surname' },
                                 { title: 'Escola', field: 'birthYear',  },
                                 { title: 'Material Solicitado', field: 'birthCity', },
                                 {title: 'Quantidade Solicitada', field:''},
                                 {title: 'Data', field:''}
                                ]}
                                data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
                                options={{    
                                headerStyle: {
                                    backgroundColor: '#9C4019',
                                    color: '#FFF'
                                },
                                toolbar:false,
                                paging:false,
                                sorting:false
                            }}
                        />
                        
                    </div>
                    <br/>
            <Footer/>
        </div>

    )
}