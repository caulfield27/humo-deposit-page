
import { FunctionComponent } from 'react'
import styles from './chip.module.css'

interface Props {
    label: string,
    isActive: boolean,
    onClick: ()=> void
}

const Chip:FunctionComponent<Props> = ({label, isActive, onClick}) => {
    return (
        <div className={isActive ? `${styles.chip} ${styles.active}` : styles.chip} 
        onClick={onClick}>{label}</div>
    )
}

export default Chip