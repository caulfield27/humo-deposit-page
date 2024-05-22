import styles from './tabs.module.css'
import { tabsLinks } from "../model/tabs"
import Link from "next/link"

const HeaderTabs = ()=>{
    return (
       <div className={styles.tabs_wrap}>
            {tabsLinks.map((link)=>
                <Link className={styles.tabs_item} href={link.path} key={link.label}>{link.label}</Link>
            )}
       </div>
        
    )
}

export default HeaderTabs