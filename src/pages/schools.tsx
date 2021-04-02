import { Button } from '../components/Button/Button';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/pages/schools.module.css';

export default function schools(){
    return(
        <div className={styles.container}>
            <Header/>
                <div className={styles.section}>

                    <img src="./icons/transparent1 1.svg" alt="cover"/>
                    <h1>Escola Estadual Abner Afonso</h1>

                    <div className={styles.schooldata}>
                    <img src="/images/dados da escola.png" alt="" />
                    </div>

                    <div className={styles.cadastro}>                    
                  
                    <h1>CADASTRO</h1>
                    <p>RELAÇÃO ALUNO X DOAÇÃO</p>
                    </div>
                    <div className={styles.exit}>
                        <Button text="SAIR"/>
                    </div>
                   
                    

    
                
                </div>
            
        </div>

        
    )

}