import DepositInfo from '@/shared/depositInfo/DepositInfo'
import styles from './depositCard.module.css'
import { Cardbuttons } from '@/entities/cardButtons'
import { IDeposite, IDepositeAtributes } from '../model'

export default function Cards({data} : {data : IDeposite}) {
  const title = data.attributes.title
  const description = data.attributes.description
  const conditions = data.attributes.conditions
  
  return (
    <div className={styles.card}>
      <div className={styles.card_left_wrap}>
        <div className={styles.deposit_info}>
          <DepositInfo title={title} description={description} conditions={conditions}/>
          <Cardbuttons />
        </div>

      </div>
      <div className={styles.card_right_wrap}>
        <img className={styles.deposit_img}
          src="/procent.png" 
          alt="deposit procent" />
      </div>
    </div>
  )
}
