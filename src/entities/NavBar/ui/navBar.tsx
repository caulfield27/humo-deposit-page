import Link from "next/link"
import { navLInks } from "../model/navLinks"
import styles from './navBar.module.css'

const NavBar = ()=>{
    return (
        <div className={styles.nav_wrap}>
            {navLInks.map((link)=>
                <Link className={styles.nav_item} href={link.path} key={link.label}>{link.label}</Link>  
            )}
        </div>
    )

}

export default NavBar