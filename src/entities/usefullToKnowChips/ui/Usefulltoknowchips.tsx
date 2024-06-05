"use client"
import { useState } from 'react'
import styles from './usefullToKnowChips.module.css'
import { Chip, Chips } from 'humo-ui'

export default function Usefulltoknowchips() {

  const [value, setValue] = useState<string[]>(['Требования к заёмщику'])

  return (
    <div className={styles.utk_chips_container}>
      <Chips value={value} setValue={(value) => setValue(value)}
      w='100%' mW='100%'>
        <Chip value='Требования к заёмщику'>Требования к заёмщику</Chip>
        <Chip value='Тарифы и документы'>Тарифы и документы</Chip>
        <Chip value='Необходимые документы'>Необходимые документы</Chip>
        <Chip value='Погашение кредита'>Погашение кредита</Chip>
      </Chips>
    </div>

  )
}
