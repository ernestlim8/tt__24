import { useState } from "react";
import styles from "../components/BankDetail.module.css"

function BankDetail() {
    const [accountType, setAccountType] = useState("Saving");
    const [balance, setBalance] = useState(100);
    const [accountId, setAccountId] = useState("12345")
    return (
      <div className={styles.main}>
        <div className={styles.accountId}>
            <p>Account ID: {accountId}</p>
        </div>
        <div className={styles.accountDetails}>
            <div className={styles.accountType}>
                <p>{accountType}s Account</p>      
            </div>
            <div className={styles.bankBalance}>
                <p>Bank Balance</p>
                <p>${balance}</p>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default BankDetail;
  