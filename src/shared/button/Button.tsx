import { FunctionComponent } from 'react'
import styles from './button.module.css'

interface Props{
    label: string,
    background: string,
    color: string
}

const Button:FunctionComponent<Props> = ({label, background, color})=>{
    return (
        <button className={styles.humo_btn} style={{background:background, color:color}}>{label}</button>
    )

}

export default Button