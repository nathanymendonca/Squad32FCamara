import {Combobox, SearchIcon} from 'evergreen-ui';
import Link from 'next/link'
import styles from '../styles/pages/receiverRegister.module.css'
import { Formik, Field, Form } from 'formik';
import {Button} from '../components/Button/Button'

import {TableSimple } from '../components/TableSimple/TableSimple';



export default function receiverRegister(){

    return (
        <div>oi</div>
    )
}

    // var  level = data.map(data => data.name === compara);
    // console.log(level)

    // var searchSchool = [];
    // var compara = searchSchool.toString()
 
    

    // var teste = data.find(data => data.uf === searchSchool.toString());
    // console.log(teste);

    // var ufs = data.map(data => data.uf);
    // var newUfs = ufs.filter((este, i) => ufs.indexOf(este) === i);

    // var  cities = data.map(data => data.city);
    // var newCities = cities.filter((este, i) => cities.indexOf(este) === i);

    // var  level = data.map(data => data.level;
    // var newLevel = level.filter((este, i) => level.indexOf(este) === i);
    
    // return(
    //     <div>oi</div>
    //     <div className={styles.container}>

    //         <img src="/icons/logo2.svg" alt=""/>

    //         <Formik
    //         initialValues={{
    //             schoolName: '',
            

    //         }}

    //         onSubmit={async (values) => {
    //             searchSchool.push(values)
    //             await new Promise((r) => setTimeout(r, 500));
    //             alert(JSON.stringify(values, null, 2));
    //             // console.log(JSON.stringify(values, null, 2));
    //             console.log(searchSchool);
    //         }}
    //         >
    //         <Form>
    //             <div className={styles.section}>
    //                 <Field 
    //                     width="50"
    //                     id="schoolName"
    //                     name="schoolName"
    //                     placeholder="INSIRA NOME DA ESCOLA"
    //                     type="input"
    //                 />
    //             <br/>

                
    //                 <Button type ="submit" text="PESQUISAR ESCOLA" />
                
    //             </div>
    //         </Form>
    //     </Formik>

    //                     <Link href="/">
    //                     <a href="">
    //                     <Button text="VOLTAR"/>
    //                     </a>
    //                     </Link> */}
    //         <div className={styles.selects}>
    
    //             <Combobox
    //                 items={newUfs}
    //                 onChange={selected => searchSchool.push(selected)}
    //                 placeholder="ESTADO"
    //             />
    //             <br/>

    //             <Combobox
    //                 items={newCities}
    //                 onChange={selected => searchSchool.push(selected)}
    //                 placeholder="MUNICÍPIO"
    //             />
    //             <br/>

    //             <Combobox
    //                 items={newLevel}
    //                 onChange={selected => searchSchool.push(selected)}
    //                 placeholder="ETAPA DE ENSINO"
    //             />

    //         </div>
    //         <br/>
    //         <Button text="BUSCAR"/>
    //         <br/>
    //         <div className={styles.schoolSelect}>
    //             <Combobox
                        
    //                     items={data}
    //                     onChange={selected => console.log()}
    //                     placeholder="CLIQUE AQUI E SELECIONE A ESCOLA"
    //             />
    //         </div> 
    //         <br/>
            

    //         <TableSimple />

    //         <br/>
    //         Dados do Responsável

    //         <Formik
    //         initialValues={{
    //             nome ='',
    //             email ='',
    //             cpf ='',
    //             tel ='',
    //             estado_civil ='', 
    //             nascimento ='',
    //             sexo ='',
    //             comprovante ='',
    //             senha ='',

    //         }}

    //         onSubmit={async (values) => {
    //             searchSchool.push(values)
    //             await new Promise((r) => setTimeout(r, 500));
    //             alert(JSON.stringify(values, null, 2));
    //             // console.log(JSON.stringify(values, null, 2));
    //             console.log(searchSchool);
    //         }}
    //         >
    //         <Form>
    //             <div className={styles.section}>
    //                 <Field 
    //                     width="50"
    //                     id="schoolName"
    //                     name="schoolName"
    //                     placeholder="INSIRA NOME DA ESCOLA"
    //                     type="input"
    //                 />
    //             <br/>

                
    //                 <Button type ="submit" text="PESQUISAR ESCOLA" />
                
    //             </div>
    //         </Form>
    //     </Formik>





            


    //     </div>
    // )
