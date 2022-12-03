import { useState } from "react"
import transactionService from "../services/transactionService"
import { useEffect } from "react"

const Transaction = ({transaction}) => {



    return (
        <div>
            <li>{transaction.user.id} {transaction.receiving.id} {transaction.date} {transaction.amount} {transaction.comment} </li>
        </div>
    )
}

export default Transaction