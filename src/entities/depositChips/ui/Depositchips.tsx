"use client"
import { useState } from 'react';
import styles from './depositChips.module.css'
import Chip from '@/shared/chip/chip' 

const DepositChips = ()=>{
    const [isActive, setIsActive] = useState<string>('Все');
    const handleChipClick = (label: string) => {
        setIsActive(label);
    };
    return (
        <div className={styles.chips_wrap}>
             <Chip 
                label='Все' 
                isActive={isActive === 'Все'} 
                onClick={() => handleChipClick('Все')}
            />
            <Chip 
                label='Бессрочные' 
                isActive={isActive === 'Бессрочные'} 
                onClick={() => handleChipClick('Бессрочные')}
            />
        </div>
    )

}

export default DepositChips