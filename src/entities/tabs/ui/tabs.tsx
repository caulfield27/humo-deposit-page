import styles from './tabs.module.css'
import { tabLinks } from '../model/tabLinks'
import Link from "next/link"

const HeaderTabs = ()=>{
    return (
       <div className={styles.tabs_wrap}>
            {tabLinks.map((link)=>
                <Link className={styles.tabs_item} href={link.path} key={link.label}>{link.label}</Link>
            )}
       </div>
        
    )
}

export default HeaderTabs