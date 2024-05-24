import { FunctionComponent } from 'react'
import styles from './depositInfo.module.css'
import { IConditions, IDepositeAtributes } from '@/widgets/depositCard'

interface Props{
    title:string,
    description: string,
    conditions: IConditions[]
    
}

const DepositInfo:FunctionComponent<Props> = ({title, description, conditions}) => {
    return (
        <>
            <h1 className={styles.info_header}>
                {title}
            </h1>
            <p className={styles.info_par}>
                {description}
            </p>
            <ul className={styles.info_list_wrap}>
                {conditions.map((condition)=>
                    <li key={condition.id} className={styles.info_list}>
                        <p className={styles.p_span}>{condition.text}</p>
                        <h3 className={styles.header_span}>{condition.title}</h3>
                    </li>
                )}
            </ul>
        </>

    )
}

export default DepositInfo  