import Cards from "@/widgets/depositCard/ui/Depositcard";
import styles from "./page.module.css";
import DepositHeader from "@/widgets/depositHeader/ui/Depositheader";
import { IDeposite } from "@/widgets/depositCard";
import { UseFullToKnow } from "@/widgets/UseFullToKnow";

export default async function Home() {
  const response = await fetch('http://192.168.100.59:1337/api/deposits?populate=*')
  const data = await response.json()


  return (
    <>
      <div className={styles.deposit_container}>
        <DepositHeader/>
      </div>
      <div className={styles.cards_container}>
        {data.data.map((attributes: IDeposite)=>
            <Cards data={attributes}/>
        )}
      </div>
      <UseFullToKnow/>
    </>
    
  

  );
}
