import styles from  './Footer.module.css'

export function Footer(){

    return(
        <div className={styles.container}>
           
            <div className={styles.text}></div>
                <div className={styles.contact}>
                    <p>Entre em contato:</p>
                    <p>(xx) XXXX-XXXX</p>
                </div>

                <div className={styles.location}>
                    <p>Encontre-nos:</p>
                    <p>Endereço: XXXXXXXXXXXXXXXXXXX</p>
                    <p>São Paulo - SP CEP: XXXXXXXXXXXXX</p>
                </div>

                <div className={styles.register}>
                    <p>© 2021 por AME - ARRECADAÇÃO DE MATERIAIS ESCOLARES</p>
                </div>

            <div className={styles.icons}>
                <img className={styles.facebook} src="/icons/Facebook.svg" alt="icon-facebook"/>
                <img className={styles.instagram} src="/icons/Instagram.svg" alt="icon-instagram"/>
                <img className={styles.youtube} src="/icons/youtube.svg" alt="icon-youtube"/>
                <img className={styles.twitter} src="/icons/Twitter.svg" alt="icon-twitter"/>
            </div>

            




        </div>
    )
}