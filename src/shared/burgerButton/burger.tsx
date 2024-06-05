import styles from './burger.module.css'

const Burger = ()=>{
    return (
        <button className={styles.burger_btn}>
           <img className={styles.burger} src="/burgerMenu.png" alt="" />
        </button>
    )
}
export default Burger