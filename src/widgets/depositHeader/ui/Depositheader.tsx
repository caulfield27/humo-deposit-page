import DepositChips from '@/entities/depositChips/ui/Depositchips'
import styles from './depositHeader.module.css'

const DepositHeader = () => {
    return (
        <>
            <div className={styles.deposit_wrapper}>
                <h1 className={styles.deposit_header}>Депозиты</h1>
                <DepositChips />
            </div>

        </>

    )
}
export default DepositHeader