import styles from './cardButtons.module.css'
import Button from '@/shared/button/Button'

export default function Cardbuttons() {
  return (
    <div className={styles.buttons_wrap}>
      <Button label='Оставить заявку' background='#F76835' color='white'/>
      <Button label='Подробнее о депозите' background='transparent' color='#F76835'/>
    </div>
  )
}
