
import { RedirectType } from 'next/navigation'
import styles from './language.module.css'
import { useState } from 'react'


const Language = ()=> {
    return (
        <>
            <select className={styles.select} name="language" id="lang">
                <option value="RU">RU</option>
                <option value="ENG">US</option>
                <option value="TJK">TJ</option>
            </select>
        </>
        
    )
}

export default Language