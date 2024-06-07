import Cards from "@/widgets/depositCard/ui/Depositcard";
import styles from "./page.module.css";
import DepositHeader from "@/widgets/depositHeader/ui/Depositheader";
import { IDeposite } from "@/widgets/depositCard";
import { UseFullToKnow } from "@/widgets/UseFullToKnow";
import { Suspense } from "react";

export default async function Home() {
  const response = await fetch('http://localhost:1337/api/deposits?populate=*',{next: {revalidate:5}})
  const data = await response.json()
  return (
    <>
      <div className={styles.deposit_container}>
        <Suspense fallback='<div>Loading...</div>'>
          <DepositHeader/>
        </Suspense>
      </div>
      <div className={styles.cards_container}>
        {data.data.map((attributes: IDeposite, id:number)=>
            <Suspense fallback='<div>Loading...</div>' key={id}>
                <Cards data={attributes}/>
            </Suspense>

        )}
      </div>
      <Suspense fallback='<div>Loading...</div>'>
        <UseFullToKnow/>
      </Suspense>
      
    </>
    
  

  );
}
