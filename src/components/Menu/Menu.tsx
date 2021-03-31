import styles from './Menu.module.css'

export function Menu(){
    
    return(

    
        <div className={styles.container}>

            <div className={styles.orangeLine}></div>


            <div className={styles.section}>
                <div className={styles.receiverSquare}>
                    <img src="/icons/plus.svg" alt="plus"/>
                    <h1>RECEBER DOAÇÃO</h1>
                    <p>CADASTRE-SE OU FAÇA LOGIN</p>
                </div>

                <div className={styles.whiteLine1}></div>
                

                <div className={styles.schoolSquare}>
                    <img src="/icons/data.svg" alt="data"/>
                    <h1>ESCOLAS</h1>
                    <p>ACESSE A ÁREA EXCLUSIVA</p>
                </div>

                <div className={styles.whiteLine2}></div>

                <div className={styles.giverSquare}>
                    <img src="/icons/star.svg" alt="star"/>
                    <h1>QUERO DOAR</h1>
                    <p>CLIQUE AQUI E SAIBA COMO DOAR</p>

            </div>
            </div>

        </div>
    )
}