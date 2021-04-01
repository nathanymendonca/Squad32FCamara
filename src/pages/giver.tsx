import { Button } from '../components/Button/Button';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import styles from '../styles/pages/Giver.module.css';

export default function Giver(){
    return(
        <div className={styles.container}>
            <Header/>
                <div className={styles.section}>

                    <img src="./icons/book.svg" alt="cover"/>
                    <h1>ESCOLHA A ESCOLA</h1>
                    <div className={styles.choiceBar}>
                        AQUI VAI A ESCOLHA DAS ESCOLAS
                    </div>
                    <Button text="BUSCAR"/>

                    <div className={styles.choiceSchool}>
                        CLIQUE E SELECIONE A ESCOLA
                    </div>
                    <img src="/images/example.png" alt="example"/>
                    <img className={styles.example2} src="/images/example2.png" alt=""/>
                    <div className={styles.doar}>
                        <Button text="DOAR"/>
                    </div>

    
                
                </div>
            <Footer/>

        </div>

        
    )

}