import React from 'react';
import Link from 'next/link';
import { Formik, Field, Form } from 'formik';

import styles from '../styles/pages/receiverRecoverPass.module.css';
import { Button } from '../components/Button/Button';

const  userRecoverPass= () => (
  <div className={styles.conteiner}>
    <img src="/icons/logo2.svg" alt="logo"/>
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
          
                
                <Button type="submit" text="ENVIAR"/>
                <br/>
                
                <p>Um email foi enviado para o endereço fornecido acima</p>
                <p>Abra-o e siga as instruções para obter uma nova senha!</p>

                <br/>
                <Link href="/">
                  <a href="">
                  <Button text="VOLTAR A PÁGINA INICIAL"/>
                 </a>
                </Link>
            </div>
        </Form>
    </Formik>
  </div>
);

export default userRecoverPass;