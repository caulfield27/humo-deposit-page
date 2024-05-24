
import styles from './language.module.css'


const Language = ()=> {
    return (
        <>
            <select className={styles.select} name="language" id="lang">
                <option value="RU">RU</option>
                <option value="EN">EN</option>
                <option value="TJ">TJ</option>
            </select>
        </>
        
    )
}

export default Language