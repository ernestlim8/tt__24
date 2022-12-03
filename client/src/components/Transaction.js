import {
    TableBody,
    TableCell,
    TableRow,
  } from "@material-ui/core";

const Transaction = ({transaction}) => {

    return (
        <div>
            <TableBody>
                <TableRow>
                    <TableCell style={{width: 200}}>{transaction.accountID}</TableCell>
                    <TableCell style={{width: 250}}>{transaction.receivingAccountID}</TableCell>
                    <TableCell style={{width: 200}}>{transaction.date}</TableCell>
                    <TableCell style={{width: 230}}>{transaction.transactionAmount}</TableCell>
                    <TableCell style={{width: 200}}>{transaction.comment}</TableCell>
                </TableRow>
            </TableBody>
        </div>
    )
}

export default Transaction