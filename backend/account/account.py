from flask import Flask, jsonify
from flask_cors import CORS
import accountRepo

app = Flask(__name__)
CORS(app)


# get account details
@app.route("/user/account/<UserID>", methods=["GET"])
def getAccountDetails(UserID):
    try:
        all_accounts = accountRepo.getAccountDetails(UserID)
        print(all_accounts)
        result = {}
        accountDetails = []
        for i in all_accounts:
            print("here")
            accountDetails.append({"AccountID": i[0], "AccountType": i[1], "AccountBalance": i[2]})
            result["accountDetails"] = accountDetails
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


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5002, debug=True)
