# Verify username and password

## POST { endpoint } /login

### Request body

```json
{
  "Username": "ronald",
  "Password": 123456789
}
```

### Response body

- successful authentication

```json
{
  "ID": 1
}
```

- unsuccessful authetication

```json
{
  "message": 401
}
```

# Create/register new user account

## POST { endpoint } /user

### Request body

```json
{
    "Username": "ronald",
    "Password": "ABC123",
    "Firstname": "ronald",
    "LastName": "tan",
    "Email": "abc@gmail.com",
    "Dddress": "changi business park",
    "OptIntoPhyStatements": True,
}
```

### Response body

- response includes all bank account types under user id

```json
{
  "bankAccounts": ["investment", "savings"]
}
```

# Get bank account details

## GET { endpoint } /user/account/<UserID>

### Response body

- `id` refers to bank account ID

```json
{
    "accounts":
    {
        "AccountID": 12345,
        "AccountType": "investment",
        "AccountBalance": 123.93,
    },
    {
        "AccountID": 12211,
        "AccountType": "savings",
        "AccountBalance": 321.87,
    },
    ...
}
```

# Get list of transaction details

## GET { endpoint } /user/transaction/accountID/page

### Response body

- `id` refers to transaction ID
- `recipientId` refers to tha bank account ID of the recepient bank
- datetime are all in unix timestamp

```json
{
  "totalPage": 1,
  "totalTransaction":2 ,
  "transactionInfo":
    {
        "id": 12345,
        "recipientId": 34567,
        "entryDatetime": 123456789,
        "scheduledDatetime": 987654321,
        "amount": 123.45,
        "comment": "for mom"
    },
        {
        "id": 34567,
        "recipientId": 65432,
        "entryDatetime": 123456789,
        "scheduledDatetime": 987654321,
        "amount": 234.45,
        "comment": "for dad"
    }
    ...
}
```

# Add new scheduled transaction

## POST { endpoint } /user/transaction/<accountID>

### Request body

- `recipientId` refers to tha bank account ID of the recepient bank

```json
{
  "accID": 12345,
  "recipientId": 34567,
  "scheduleTime": 987654321,
  "amount": 123.45,
  "comment": "for mom"
}
```

### Response body

```json
{
  "recipientId": 34567,
  "entryDatetime": 123456789,
  "scheduledDatetime": 987654321,
  "amount": 123.45,
  "comment": "for mom"
}
```

# Delete a schedule transaction

## DEL { endpoint } /user/transaction/<accountID>

### Request body

- `id` refers to transaction id

```json
{
  "id": 12345
}
```

### Response body

```json
{
  "message": 200
}
```

# Update user details

## PUT { endpoint } /user/<accountID>

### Request body

- include the details to be changed

```json
{
  "Email": "xyz@gmail.com"
}
```

### Response body

```json
{
    "Username": "ronald",
    "Password": "ABC123",
    "FirstName": "ronald",
    "LastName": "tan",
    "Email": "xyz@gmail.com",
    "Address": "changi business park",
    "OptIntoPhyStatements": True,
}
```
