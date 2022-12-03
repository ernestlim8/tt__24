import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/BankDetail.module.css"
import BankDetail from "./BankDetail";

function BankList(props) {

    const [accounts, setAccounts] = useState([{
        "id": 12345,
        "type": "investment",
        "balance": 123.93,
    },
    {
        "id": 12211,
        "type": "savings",
        "balance": 321.87,
    }]);

    return (
        <div className={styles.main}>
            <h2>Accounts</h2>
            {
                accounts.map((account, id) => 
                    <BankDetail key={id} account={account} navigateToAccount={props.navigateToAccount}/>)
            }

        </div>
    );
}

export default BankList;
