import {
    TableBody,
    TableCell,
    TableRow,
    Button,
  } from "@material-ui/core";
import { display } from "@mui/system";
import { useState } from "react";
const Transaction = ({transaction, deleteTransaction}) => {

    const transactionDateInUtc = new Date(transaction.Date)
    const currentDateInUtc = new Date(Date.now())

    const [active, setActive] = useState(currentDateInUtc < transactionDateInUtc ? true : false)
    const showWhenActive = {display: active ? " " : "none"}
    console.log(active)
    console.log(currentDateInUtc)
    console.log(transactionDateInUtc)


    const removeTransaction = () => {
        deleteTransaction(transaction.id)
    }


    return (
        <div>
            <TableBody>
                <TableRow>
                    <TableCell style={{width: 200}}>{transaction.AccountID}</TableCell>
                    <TableCell style={{width: 250}}>{transaction.ReceivingAccountID}</TableCell>
                    <TableCell style={{width: 200}}>{transaction.Date}</TableCell>
                    <TableCell style={{width: 230}}>{transaction.TransactionAmount}</TableCell>
                    <TableCell style={{width: 200}}>{transaction.Comment}</TableCell>
                    <TableCell><Button style={showWhenActive} variant="contained" color="error" size="small" onClick={removeTransaction}>delete</Button></TableCell>
                </TableRow>
            </TableBody>
            <link to="/create">Create New Transaction</link>
        </div>
    )
}

export default Transaction