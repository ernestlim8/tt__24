import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../auth-context";
import styles from "../components/BankDetail.module.css"
import userService from "../services/userService";
import BankDetail from "./BankDetail";

function BankList(props) {

    const [accounts, setAccounts] = useState([]);

    const authCtx = useContext(AuthContext);
    const id = authCtx.id;

    useEffect(() => {
        userService
          .getAccounts(1)
          .then(response => {
            // TODO: Error handling
            const accountDetails = response.data.message.accountDetails;
            setAccounts(accountDetails)
          })
      }, [])

    return (
        <div className={styles.main}>
            <h2>Accounts</h2>
            {
                accounts.map((account, id) => 
                    <BankDetail key={id} account={account} navigateToAccount={() => props.navigateToAccount(account.AccountID)}/>)
            }

        </div>
    );
}

export default BankList;
