'use client'
import styles from './cardButtons.module.css'
import MyButton from '@/shared/button/Button'
import { Button } from 'humo-ui'

export default function Cardbuttons() {
  return (
    <div className={styles.buttons_wrap}>
      <div className={styles.button_wrap_1}>
        <Button w='100%'  appearance='primary'>Оставить заявку</Button>
      </div>
      <div className={styles.button_wrap_2}>
        <Button w='100%' appearance='transparent'>Подробнее</Button>
      </div>
      
      {/* <MyButton label='Оставить заявку' background='#F76835' color='white'/>
      <MyButton label='Подробнее о депозите' background='transparent' color='#F76835'/> */}
    </div>
  )
}
