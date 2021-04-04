import {Combobox} from 'evergreen-ui';
import styles from '../styles/pages/receiverRegister.module.css'
import {Button} from '../components/Button/Button'

export default function receiverRegister(){

    return(
        <div className={styles.container}>
            <img src="/icons/logo2.svg" alt=""/>

            <div className={styles.selects}>

                <Combobox
                    items={['Banana', 'Orange', 'Apple', 'Mango']}
                    onChange={selected => console.log(selected)}
                    placeholder="Fruit"
                />
                <br/>

                <Combobox
                    items={['carro', 'avião', 'barco', 'Mango']}
                    onChange={selected => console.log(selected)}
                    placeholder="coisas"
                />
                <br/>

                <Combobox
                    items={['adriano', 'joão', 'daniel', 'Marcos']}
                    onChange={selected => console.log(selected)}
                    placeholder="nomes"
                />
            </div>
            <br/>
            <Button text="BUSCAR"/>

            


        </div>
    )

}