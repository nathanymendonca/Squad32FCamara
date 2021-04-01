import styles from  "./Button.module.css"

export function Button(props :any){
    return(
        <button className={styles.button}>
            {props.text}
        </button>
    )
        
}