import { FunctionComponent } from 'react'
import styles from './chip.module.css'

interface Props {
    label: string,
    background: string,
    color: string
}

const Chip:FunctionComponent<Props> = ({label, background, color}) => {
    return (
        <div className={styles.chip} style={{background: background, color:color}}>{label}</div>
    )
}

export default Chip