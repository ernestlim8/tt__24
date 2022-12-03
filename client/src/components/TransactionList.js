import { useContext, useState } from "react"
import { useEffect } from "react"
import Transaction from "./Transaction"
import transactionService from "../services/transactionService"
import {
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableHead
  } from "@material-ui/core";
import AuthContext from "../auth-context";
import transaction from "./Transaction";

const TransactionList = () => {

    const [initialTransaction, setTransaction] = useState([])

    const [user, setUser] = useState('')
    const [page, setPage] = useState(1)


    const authCtx = useContext(AuthContext);
    const id = authCtx.id;

    useEffect(() => {
        const urlArr = window.location.href.split("/")
        const accountID = urlArr[urlArr.length - 1]
        transactionService
          .getTransactions(accountID, 1)
          .then(response => {
            // TODO: Error handling
            const initialTransaction = response.data.message.transactionInfo;
            console.log(initialTransaction);
            setTransaction(initialTransaction)
          })
      }, [])


    const deleteTransaction = async (transactionId) => {
        try {
          await transactionService.postDeleteTransaction(transactionId);
    
          const updatedTransaction = initialTransaction.filter((transaction) => transaction.TransactionID !== transactionId);
          setTransaction(updatedTransaction);
        } catch (exception) {
          console.log("error" + exception.response.data.error);
        }
      };

    return (
        <div>
            <h2>Transaction List</h2>
            <div>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell>Account Id</TableCell>
                    <TableCell>Receiving Account Id</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Transaction Amount</TableCell>
                    <TableCell>Comment</TableCell>
                    <TableCell>Remove</TableCell>
                    </TableRow>
                </TableHead>
            </Table>
            <TableRow>
                {initialTransaction.map(transaction =>
                <Transaction key={transaction.TransactionID} transaction={transaction} deleteTransaction={deleteTransaction} /> )}
            </TableRow>
            </div>
        </div>
    )

}

export default TransactionList