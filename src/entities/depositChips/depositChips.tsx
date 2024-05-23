"use client"
import { useState } from 'react';
import styles from './depositChips.module.css'
import Chip from '@/shared/chip/chip' 

const DepositChips = ()=>{
    const [activeChip, setActiveChip] = useState<string>('Все');
    const handleChipClick = (label: string) => {
        setActiveChip(label);
    };
    return (
        <div className={styles.chips_wrap}>
             <Chip 
                label='Все' 
                isActive={activeChip === 'Все'} 
                onClick={() => handleChipClick('Все')}
            />
            <Chip 
                label='Бессрочные' 
                isActive={activeChip === 'Бессрочные'} 
                onClick={() => handleChipClick('Бессрочные')}
            />
        </div>
    )

}

export default DepositChips