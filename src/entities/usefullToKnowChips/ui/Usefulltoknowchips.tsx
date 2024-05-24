"use client"
import { useState } from 'react'
import styles from './usefullToKnowChips.module.css'
import Chip from '@/shared/chip/chip'

export default function Usefulltoknowchips() {
  
  const [isActive, setIsActive] = useState('Требования к заёмщику')
  const handleChips = (label: string)=>{
    setIsActive(label)

  }
  return (
    <div className={styles.utk_chips_container}>
      <Chip isActive={isActive === 'Требования к заёмщику'} 
      label='Требования к заёмщику' onClick={()=>handleChips('Требования к заёмщику')}/>
      <Chip isActive={isActive === 'Тарифы и документы'} 
      label='Тарифы и документы' onClick={()=>handleChips('Тарифы и документы')}/>
      <Chip isActive={isActive === 'Необходимые документы'} 
      label='Необходимые документы ' onClick={()=>handleChips('Необходимые документы')}/>
      <Chip isActive={isActive === 'Погашение кредита'} 
      label='Погашение кредита' onClick={()=>handleChips('Погашение кредита')}/>
    </div>
  )
}
