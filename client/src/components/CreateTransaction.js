import {useState} from "react";

function CreateTransaction() {

    const [recipientId, setRecipientId] = useState('')
    const [date, setDate] = useState('')
    const [transactionAmount, setTransactionAmount] = useState('')
    const [comment, setComment] = useState('')

    const onRecipientIdChanged = e => setRecipientId(e.target.value)
    const onDateChanged = e => setDate(e.target.value)
    const onTransactionAmountChanged = e => setTransactionAmount(e.target.value)
    const onCommentChanged = e => setComment(e.target.value)

    const onSubmit = async (e) => {
        e.preventDefault()

        if (recipientId && date && transactionAmount) {
            console.log("ok")
            setRecipientId('')
            setTransactionAmount('')
            setDate('')
            setComment('')
        }
    }


    const content = (
      <form onSubmit={onSubmit}>
          <div>
              <h2>New Scheduled Transaction</h2>
              <div className="form__action-buttons">
                  <button title="Save" />

                  <label htmlFor="recipient_id">
                      Recipient Bank Account ID:
                  </label>
                  <input
                      id="recipient_id"
                      name="recipient_id"
                      type="text"
                      value={recipientId}
                      autoComplete="off"
                      onChange={onRecipientIdChanged}
                  />

                  <label htmlFor="date">
                      Date:
                  </label>
                  <input
                      id="date"
                      name="date"
                      type="datetime-local"
                      value={date}
                      autoComplete="off"
                      onChange={onDateChanged}
                  />

                  <label htmlFor="transaction_amount">
                      Transaction amount:
                  </label>
                  <input
                      id="transaction_amount"
                      name="transaction_amount"
                      type="text"
                      //value={transactionAmount}
                      autoComplete="off"
                      onChange={onTransactionAmountChanged}
                  />

                  <label htmlFor="comment">
                      Comment:
                  </label>
                  <input
                      id="comment"
                      name="comment"
                      type="text"
                      value={comment}
                      autoComplete="off"
                      onChange={onCommentChanged}
                  />
              </div>
          </div>
      </form>
    );

    return content
}
  
export default CreateTransaction;
