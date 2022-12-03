import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../components/BankDetail.module.css"

function BankDetail({account, navigateToAccount}) {

    return (
        <div className={styles.account} onClick={() => navigateToAccount(account.id)}>
            <div className={styles.accountId}>
                <span>ID: {account.AccountID}</span>
            </div>
            <div className={styles.accountDetails}>
                <div className={styles.accountType}>
                    <p>{account.AccountType} Account</p>
                </div>
                <div className={styles.bankBalance}>
                    <p>${account.AccountBalance}</p>
                </div>
            </div>
        </div>

    )

}

export default BankDetail;
