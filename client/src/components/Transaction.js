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
                    <TableCell style={{width: 200}}>{transaction.AccountID}</TableCell>
                    <TableCell style={{width: 250}}>{transaction.ReceivingAccountID}</TableCell>
                    <TableCell style={{width: 200}}>{transaction.Date}</TableCell>
                    <TableCell style={{width: 230}}>{transaction.TransactionAmount}</TableCell>
                    <TableCell style={{width: 200}}>{transaction.Comment}</TableCell>
                </TableRow>
            </TableBody>
        </div>
    )
}

export default Transaction