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
        schduledDate  = datetime.datetime.fromtimestamp( timeStamp )
        if schduledDate > currDate:
            pass
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