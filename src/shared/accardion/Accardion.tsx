"use client"
import { ReactNode, useState } from 'react'
import styles from './accardion.module.css'


export const Accardion = ({children, header}:{children: ReactNode, header:string})=>{
    const [isActive, setIsActive] = useState(false)
    return (
        <div className={styles.accardion_container}>
            <div className={styles.accardion_header} onClick={()=> setIsActive(prev=> !prev)}>
                <span className={styles.header_span}>{header}</span>
                <img className={isActive ? `${styles.accardion_img} ${styles.accardion_img_active}` : styles.accardion_img} 
                src="/arrow.png" alt="arrow"/>
            </div>
            <div className={isActive ? styles.active : styles.accardion_content}>
                {children}
            </div>  
        </div>
    )
}