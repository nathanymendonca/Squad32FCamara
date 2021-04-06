import React from "react"
import Link from 'next/link';
import { Formik, Field, Form } from 'formik';
import {Button} from '../components/Button/Button';
import styles from '../styles/pages/receiverLogin.module.css'

const receiverLogin = () => (
    <div className={styles.conteiner}>
        <img src="/icons/logo2.svg" alt="logo"/>
        <h1>Faça Login</h1>
        <Formik
            initialValues={{
                Email: '',
                Senha: '',

            }}

            onSubmit={async (values) => {
                await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
                console.log(JSON.stringify(values, null, 2));
            }}
        >
        <Form>
            <div className={styles.section}>
                <Field
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                />
            <br/>
                <Field id="password" name="password" placeholder="12345" type="password"/>
                    <Link  href="/receiverRecoverPass">
                    <a title="">Esqueceu sua senha?</a> 
                    </Link>
                    <br/>
                <div className={styles.buttons}>

                            <br/>

                            <Link href="/">
                                <a href="">
                                    <Button text="VOLTAR"/>
                                </a>
                            </Link>

                            <Link href="/receiverDashboard">
                                <a href="">
                                    <Button type="submit" text="ENTRAR"/>
                                
                                </a>
                            </Link>

                </div>
            <br/>
            </div>
        </Form>
        </Formik>
    </div>
);

export default receiverLogin;
    
  