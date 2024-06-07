import DepositInfo from '@/shared/depositInfo/DepositInfo'
import styles from './depositCard.module.css'
import { Cardbuttons } from '@/entities/cardButtons'
import { IDeposite } from '../model'

export default function Cards({ data }: { data: IDeposite }) {
  const title = data.attributes.title
  const description = data.attributes.description
  const conditions = data.attributes.conditions
  const img = data.attributes.img.data[0].attributes.formats.thumbnail.url
  let based_url = 'http://localhost:1337'
  
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_left_wrap}>
          <div className={styles.deposit_info}>
            <DepositInfo title={title} description={description} conditions={conditions} />
            <Cardbuttons />
          </div>

        </div>
        <div className={styles.card_right_wrap}>
          <img className={styles.deposit_img}
            src={based_url+img}
            alt="deposit procent" />
        </div>
      </div>
    </>

  )
}
