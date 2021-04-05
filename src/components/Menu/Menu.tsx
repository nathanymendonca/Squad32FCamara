import Link from 'next/link'
import {Button} from '../Button/Button'

import styles from './Menu.module.css'


export function Menu(){
    return(
        <div className={styles.container}>
                    <img src="/images/profile.png" alt="profile"/>
                    <p>Usuário</p>
                    <br/>

                    <div className={styles.menu}>

                        <h1>
                            <Link  href="/receiverRegisterView">
                                <a title="">CADASTRO</a> 
                            </Link>
                        </h1>
                        <h1>ESCOLAS CADASTRADAS</h1>
                        <h1>AVISO DE RECEBIMENTO</h1>

                        <Link href="/">
                            <a href="">
                            <Button text="SAIR"/>
                            </a>
                        </Link>

                    </div>
                </div>
    )

}