'use client'
import styles from './cardButtons.module.css'
import MyButton from '@/shared/button/Button'
import { Button } from 'humo-ui'

export default function Cardbuttons() {
  return (
    <div className={styles.buttons_wrap}>
      <Button className={styles.primary_btn}  appearance='primary'>Оставить заявку</Button>
      <Button className={styles.transparent_btn} appearance='transparent'>Подробнее</Button>
    </div>
    
  )
}
