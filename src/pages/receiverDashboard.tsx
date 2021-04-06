
import MaterialTable from 'material-table'
import { Footer } from '../components/Footer/Footer'
import { Header } from '../components/Header/Header'
import styles from '../styles/pages/receiverDashboard.module.css'
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
                    <div className={styles.table}>

                        <div style={{ maxWidth: '100%' }}>
                            <MaterialTable
                            
                            columns={[
                                { title: 'Aluno', field: '' },
                                { title: 'Matricula', field: '' },
                                { title: 'Escola', field: '',  },
                                { title: 'Material Solicitado', field: '', },
                                {title: 'Data', field:''},
                                {title: 'Acessar aviso de recebimento', field:''}
                            ]}
                            data={[]}
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
                    </div>
                </div>


            </div>

            <Footer/>
        </div>
        
    )
    
}