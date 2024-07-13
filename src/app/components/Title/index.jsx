import styles from './title.module.scss'

export default function Title({title}){
    return (<h1 className={styles.h1}>{title}</h1>)
}