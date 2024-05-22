import { useState } from 'react'
import styles from './depositChips.module.css'
import Chip from '@/shared/ui/chip/chip' 

const DepositChips = ()=>{
    return (
        <div className={styles.chips_wrap}>
            <Chip label='Все' background='#171717' color='white'/>
            <Chip label='Бессрочные' background='#F5F5F5' color='black'/>
        </div>
    )

}

export default DepositChips