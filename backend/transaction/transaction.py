from flask import Flask, jsonify,request
from flask_cors import CORS
import transactionRepo 
import datetime
import math 
import time
app = Flask(__name__)
CORS(app)

#create transaction 
@app.route("/user/transaction", methods=["POST"])
def createTransaction():
    try:
        currDate = datetime.datetime.now()
        data = request.get_json()
        timeStamp = data["scheduleTime"]
        schduledDate  = datetime.datetime.fromtimestamp( int(timeStamp) )
        account = transactionRepo.getAccountID(data["recipientId"])
        print(account)
        if len(account) == 0:
            return jsonify(
                {
                    "code": 200,
                    "Error": "Recipient Account Not Found"
                }
            ), 200 
        if schduledDate > currDate:
            data["transactionStatus"] ="pending"
            transactionRepo.createScheudleTransaction(data)
        else:
            ## increase account balance

            # 
            data["transactionStatus"] ="Done"
            transactionRepo.createTransaction(data)
        return jsonify(
            {
                "code": 200,
                "message": "Transaction Successful"
            }
        ), 200
    except Exception as e:
        print(e)
        return jsonify(
            {
                "code": 500,
                "Error": "server error"
            }
        ), 500


#get transaction 
@app.route("/user/transaction/<accountID>/<page>")
def getTransaction(accountID,page):
    try:
        limit = 100
        offset = limit *(int(page)-1)
        all_transaction = transactionRepo.getTransaction(accountID, limit, offset)
        print(all_transaction)
        totalTransaction = transactionRepo.getTotalCount(accountID)
        print(totalTransaction)
        result = {}
        transactionInfo =[]
        for i in all_transaction:
            print("here")
            transactionInfo.append({"transactionID":i[0],"accountID": i[1], "receivingAccountID":i[2], "date":i[3], "transactionAmount":float(i[4]),"comment":i[5], "scheduledTime":i[6], "transactionStatus":i[7]})
        result["transactionInfo"] = transactionInfo
        result ["totalPage"] = math.ceil(totalTransaction[0]/5)
        result["totalTransaction"] = totalTransaction[0]
        return jsonify(
            {
                "code": 200,
                "message": result 
            }
        ), 200
    except Exception as e:
        print(e)
        return jsonify(
            {
                "code": 500,
                "message": "server error"
            }
        ), 500

@app.route("/user/transaction", methods=["DELETE"])
def deleteTransactionon():
    try:
        data = request.get_json()
        transactionRepo.deleteTransaction(data["transactionID"])
        return jsonify(
            {
                "code": 200,
                "message": "OK" 
            }
        ), 200
    except Exception as e:
        print(e)
        return jsonify(
            {
                "code": 500,
                "message": "server error"
            }
        ), 500

@app.route("/user/transaction", methods=["PUT"])
def updateAll():
    try:
        data = request.get_json()
        currDate = datetime.datetime.now()
        ids = transactionRepo.getTransactionID(time.mktime(currDate.timetuple()))
        for i in ids:
            transactionRepo.UpdateTransaction(i[0], time.mktime(currDate.timetuple()))
        return jsonify(
            {
                "code": 200,
                "message": "OK" 
            }
        ), 200
    except Exception as e:
        print(e)
        return jsonify(
            {
                "code": 500,
                "message": "server error"
            }
        ), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5003, debug=True)