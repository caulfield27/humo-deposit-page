"use client"
import { useState } from 'react';
import styles from './depositChips.module.css'
import { Chip, Chips } from 'humo-ui';


const DepositChips = ()=>{
    const [value, setValue] = useState<string[]>(['Все']);
    return (
        <Chips  value={value} setValue={(value)=> setValue(value)}>
            <Chip value='Все'>Все</Chip>
            <Chip value='Бессрочные'>Бессрочные</Chip>
        </Chips>
    )

}

export default DepositChips