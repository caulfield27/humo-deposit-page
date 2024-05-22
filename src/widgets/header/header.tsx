import Logo from "@/shared/ui/logo/logo";
import styles from './header.module.css'
import NavBar from "@/entities/NavBar/ui/navBar";
import Language from "@/shared/ui/language/language";
import HeaderTabs from "@/entities/tabs/ui/tabs";
import Burger from "@/shared/ui/burgerButton/burger";

const Header = () => {
    return (
        <>
            <div className={styles.header}>
                <div className={styles.upper_header}>
                    <div className={styles.left_header}>
                        <div className={styles.logo_wrap}>
                            <Logo />
                        </div>
                        <div className={styles.navBar_wrap}>
                            <NavBar />
                        </div>
                    </div>
                    <div className={styles.burgerButton}>
                        <Burger/>
                    </div>
                    <div className={styles.right_header}>
                        <Language />
                    </div>
                </div>
                <hr className={styles.divider}/>
                <div className={styles.bottom_header}>
                    <HeaderTabs/>
                </div>
            </div>

        </>



    )
}

export default Header