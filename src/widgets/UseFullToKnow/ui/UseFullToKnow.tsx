import { Accardion } from '@/shared/accardion/Accardion'
import styles from './usefullToKnow.module.css'
import { Usefulltoknowchips } from '@/entities/usefullToKnowChips'

export default function UseFullToKnow() {
  return (
    <div className={styles.utk_container}>
      <h1 className={styles.utk_header}>Полезно знать</h1>
      <Usefulltoknowchips/>
      <Accardion header='Основные требования к заёмщику '>
          <ul className={styles.list_wrap}>
            <li className={styles.list_item}>Физические лица старше 20 лет</li>
            <li className={styles.list_item}>Опыт работы не менее 6 месяцев</li>
            <li className={styles.list_item}>Справка о заработной плате</li>
            <li className={styles.list_item}>Отсутствие обязательств перед третьими лицами</li>
          </ul>
      </Accardion>
    </div>
  )
}
