import styles from './InputFatec.module.css'

interface Props{
    type: 'text' | 'password'
    placeholder: string
    value: string
}

export default function InputFatec({type, placeholder, value}:Props){
    return (
        <input className={styles.inputFatec} type={type} placeholder={placeholder} value={value} />
    )
}