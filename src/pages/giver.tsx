import { Button } from '../components/Button/Button';
import { Header } from '../components/Header/Header';
import styles from '../styles/pages/Giver.module.css';

export default function Giver(){
    return(
        <div className={styles.container}>
            <Header/>
            <div className={styles.section}>
            <img src="./icons/book.svg" alt="cover"/>
            <h1>ESCOLHA A ESCOLA</h1>
            <div className={styles.choiceBar}></div>
            </div>

            <Button text="DOAR"/>

        </div>

        
    )

}