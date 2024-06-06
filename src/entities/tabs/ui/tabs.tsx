'use client'
import styles from './tabs.module.css'
import { tabLinks } from '../model/tabLinks'
import { Tabs } from 'humo-ui'
import { useState } from 'react'

const HeaderTabs = ()=>{
    const [tabValue, setTabValue] = useState<string | number>(4);
    return (
    <Tabs defaultValue={tabValue} setValue={(value)=> setTabValue(value)} className=''>
        {tabLinks.map((link)=>
                <Tabs.Item value={link.value} key={link.value}>{link.label}</Tabs.Item>
            )}

    </Tabs>
        
    )
}

export default HeaderTabs