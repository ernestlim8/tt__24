from flask import Flask, jsonify,request
from flask_cors import CORS
import transactionRepo 
import datetime
app = Flask(__name__)
CORS(app)

#create transaction 
@app.route("/transaction", methods=["POST"])
def createTransaction():
    try:
        currDate = datetime.datetime.now()
        data = request.get_json()
        timeStamp = data["scheduleTime"]
        schduledDate  = datetime.datetime.fromtimestamp( int(timeStamp) )
        if schduledDate > currDate:
            data["transactionStatus"] ="pending"
            transactionRepo.createScheudleTransaction(data)
        else:
            data["transactionStatus"] ="Done"
            transactionRepo.createTransaction(data)
        return jsonify(
            {
                "code": 200,
                "message": "ok"
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


# #get transaction 
# @app.route("/transaction/<accountType>/<page>")
# def getTransaction(accountType,page):
#     try:
#         limit = 5
#         offset = limit *(page-1)
#         all_transaction = getTransaction(accountType, limit, offset)
#         result = {}
    
#         return jsonify(
#             {
#                 "code": 200,
#                 "message": "ok"
#             }
#         ), 200
#     except Exception as e:
#         print(e)
#         return jsonify(
#             {
#                 "code": 500,
#                 "message": "server error"
#             }
#         ), 500




if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5003, debug=True)