
import styles from './Header.module.css';

export function Header(){

    return(
        <div className={styles.container}>
            <img className={styles.logo} src="/icons/heart.svg" alt="heart"/>
            <h1 className={styles.ame}>
                AME - Arrecadação de Materiais Escolares
            </h1>

            <div className={styles.square}></div>
            <div className={styles.lineGray}></div>



        </div>
    )
}