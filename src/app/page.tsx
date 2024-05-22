import styles from "./page.module.css";
import DepositHeader from "@/widgets/depositHeader/ui/Depositheader";

export default function Home() {
  return (
    <div className={styles.deposit_container}>
        <DepositHeader/>
    </div>
  

  );
}
