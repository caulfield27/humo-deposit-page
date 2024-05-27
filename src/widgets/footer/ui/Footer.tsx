import styles from './footer.module.css'
import Link from 'next/link'
import { footerLinks } from '../model/footerLinks'

const Footer = () => {
  return (
    <footer className={styles.footer_container}>
      <div className={styles.footer_content}>
        <div className={styles.top_block}>
          <div className={styles.apps_container}>
            <span className={styles.app_span}>Приложение</span>
            <div className={styles.app_links}>
              <button className={styles.apps_button}>
                <img src="/AppStore.png" alt="App Store img" />
              </button>
              <button className={styles.apps_button}>
                <img src="/GooglePlay.png" alt="Google Play img" />
              </button>
              <button className={styles.apps_button}>
                <img src="/AppGallery.png" alt="App Gallery img" />
              </button>
            </div>
          </div>
          <div className={styles.media_container}>
            <span className={styles.app_span}>
              Следите за нами в соцсетях
            </span>
            <div className={styles.media_links}>
              <Link href='/'><img src='/instagram.png' alt='instagram' /></Link>
              <Link href='/'><img src='/telegram.png' alt='telegram' /></Link>
              <Link href='/'><img src='/facebook.png' alt='facebook' /></Link>
            </div>
          </div>
          <div className={styles.contacts_container}>
            <div className={styles.in}>
              <div className={styles.number_wrap}>
                <span className={styles.number}>544</span>
                <hr className={styles.in_hr} />
              </div>
              <div>
                <p className={styles.footer_text}>Для звонков с мобильных в Таджикистане</p>
              </div>
            </div>
            <div className={styles.in}>
              <div>
                <span className={styles.number}>+992 88 777 55 44</span>
                <hr className={styles.in_hr} />
              </div>
              <div>
                <p className={styles.footer_text}>Для звонков из любой точки мира</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottom_block}>
          <div className={styles.footer_links}>
            {footerLinks.map((link) =>
              <Link className={styles.link_item} href={link.path} key={link.name}>
                {link.name}
              </Link>
            )}
          </div>
          <hr className={styles.footer_hr} />
          <div className={styles.license_wrap}>
            <a className={styles.license_link} href="/">© 2022 ЗАО МДО «Хумо»</a>
            <a className={styles.license_link} href="/">Лицензия НБТ №0000077 от 24 мая 2017 г.</a>
            <a className={styles.license_link} href="/">
            ЗАО МДО «Хумо» микрофинансовая организация в Таджикистане, обслуживающая более 100 000 клиентов. 
            </a>
          </div>

        </div>
      </div>
    </footer>


  )
}

export default Footer