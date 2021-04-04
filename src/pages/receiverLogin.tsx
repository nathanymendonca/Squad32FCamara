import React from "react"
import FormLogin from "../components/FormLogin/FormLogin"
import styles from '../styles/pages/userLogin.module.css'

export default function userLogin(){
    return(
        <div className={styles.container}>

            <FormLogin />

        </div>
    )
}