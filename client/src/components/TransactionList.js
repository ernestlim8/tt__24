import { useState } from "react"
import { useEffect } from "react"
import Transaction from "./Transaction"
import transactionService from "../services/transactionService"

const TransactionList = () => {

    const [transaction, setTransaction] = useState([])

    useEffect(() => {
        transactionService
          .getAll()
          .then(initialTransaction => {
            setTransaction(initialTransaction)
          })
      }, [])

    return (
        <div>
            <h2>Transaction List</h2>
            <ul>
        {transaction.map(transaction =>
          <Transaction
            key={transaction.id}
            note={transaction}
          />
        )}
      </ul>
        </div>
    )

}

export default TransactionList