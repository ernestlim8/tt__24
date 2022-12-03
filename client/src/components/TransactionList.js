import { useState } from "react"
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

const TransactionList = () => {

    const [transaction, setTransaction] = useState([
        {
            "TransactionID": 1,
            "AccountID": 621156213,
            "ReceivingAccountID": 339657462,
            "Date": "2022-11-08T04:00:00.000Z",
            "TransactionAmount": 500.00,
            "Comment": "MonTableCellly Pocket Money"
        },
        {
            "TransactionID": 2,
            "AccountID": 958945214,
            "ReceivingAccountID": 621156213,
            "Date": "2022-11-08T04:00:00.000Z",
            "TransactionAmount": 8996.00,
            "Comment": "School Fees"
        },
        {
            "TransactionID": 3,
            "AccountID": 828120424,
            "ReceivingAccountID": 322798030,
            "Date": "2022-11-25T04:00:00.000Z",
            "TransactionAmount": 3000.00,
            "Comment": "Driving Centre Top-up"
        },
        {
            "TransactionID": 4,
            "AccountID": 353677039,
            "ReceivingAccountID": 785703027,
            "Date": "2022-11-17T06:21:00.000Z",
            "TransactionAmount": 255.00,
            "Comment": "Tuition Fee Payment"
        },
        {
            "TransactionID": 5,
            "AccountID": 259555772,
            "ReceivingAccountID": 828120424,
            "Date": "2022-11-08T04:00:00.000Z",
            "TransactionAmount": 32.00,
            "Comment": "Books Payment"
        }
    ])
    const [user, setUser] = useState('')

    // useEffect(() => {
    //     transactionService
    //       .getAll()
    //       .TableCellen(initialTransaction => {
    //         setTransaction(initialTransaction)
    //       })
    //   }, [])

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
                {transaction.map(transaction =>
                <Transaction key={transaction.TransactionID} transaction={transaction} /> )}
            </TableRow> 
            </div>
        </div>
    )

}

export default TransactionList