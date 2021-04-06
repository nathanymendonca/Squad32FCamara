import {Combobox, SearchIcon} from 'evergreen-ui';
import Link from 'next/link'
import styles from '../styles/pages/receiverRegister.module.css'
import { Formik, Field, Form } from 'formik';
import {Button} from '../components/Button/Button'
// import {data} from '../../data'
import MaterialTable from 'material-table'




export default function receiverRegister(){

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
    
    return(
        <div className={styles.container}>
            <img src="/icons/logo2.svg" alt=""/>

    
           <div className={styles.selects}>
    
                <Combobox
                    items={['teste']}
                    onChange={selected => console.log(selected)}
                    placeholder="ESTADO"
                />
                <br/>

                <Combobox
                    items={['teste']}
                    onChange={selected => console.log(selected)}
                    placeholder="MUNICÍPIO"
                />
                <br/>

                <Combobox
                    items={['teste']}
                    onChange={selected => console.log(selected)}
                    placeholder="ETAPA DE ENSINO"
                />

            </div>
            <br/>
            <div className={styles.schoolName}>
                <h1>NOME DA ESCOLA</h1>
                <Combobox 
                            
                            items={['teste']}
                            onChange={selected => console.log(selected)}
                
                    />
            </div>
            <br/>
            <Button text="BUSCAR"/>
            <br/>
            <div className={styles.schoolSelect}>
                <Combobox 
                        
                        items={['teste']}
                        onChange={selected => console.log(selected)}
                        placeholder="CLIQUE AQUI E SELECIONE A ESCOLA"
                />
            </div>
            <br/>

            <MaterialTable
                            
                            columns={[
                                { title: 'Codigo da Escola', field: '' },
                                { title: 'Nome da Escola', field: '' },
                                { title: 'UF', field: '',  },
                                { title: 'Município', field: '', },
                                {title: 'CEP', field:''},
                                {title: 'Endereço', field:''},
                                {title: 'Categoria Administrativa', field:''},
                                {title: 'Etapa de Ensino', field:''}
                            ]}
                            data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
                            options={{    
                                headerStyle: {
                                    backgroundColor: '#183b9c',
                                    color: '#FFF'
                                },
                                toolbar:false,
                                paging:false,
                                sorting:false,
                                
                            }}
                    />
            

                    <br/>
        
                
                        <Link href="/">
                            <a href="">
                                <Button text="VOLTAR"/>
                            </a>
                        </Link> 
                
                </div>

    )

}