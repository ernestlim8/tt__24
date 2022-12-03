import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/BankDetail.module.css"

function BankDetail(props) {

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
                    <div className={styles.account} onClick={() => props.navigateToAccount(account.id)}>
                        <div className={styles.accountId}>
                            <span>ID: {account.id}</span>
                        </div>
                        <div className={styles.accountDetails}>
                            <div className={styles.accountType}>
                                <p>{account.type} Account</p>
                            </div>
                            <div className={styles.bankBalance}>
                                <p>${account.balance}</p>
                            </div>
                        </div>
                    </div>

                )
            }


        </div>
    );
}

export default BankDetail;
