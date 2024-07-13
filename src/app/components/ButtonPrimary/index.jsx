import styles from './ButtonPrimary.module.scss'

export default function ButtonPrimary({text}){
    return(
        <button className={styles.bttprimary}>{text}</button>
    )
}