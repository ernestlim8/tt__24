from flask import Flask, jsonify,request
from flask_cors import CORS
import pymysql
from dotenv import load_dotenv
import datetime
import os 

app = Flask(__name__)
CORS(app)


localhost='localhost'
user='root'
password='ronaldtan123'

def connectDB():
    load_dotenv()
    return pymysql.connect(
        host=localhost,
        user=user,
        password=password,
        database="Bank"
    )


# Update user details
@app.route("/user/<accountID>", methods=["PUT"])
def UpdateUser(accountID):
    conn = connectDB()
    cur = conn.cursor()
    data = request.get_json()

    executionString = "SET "
    for key,val in data.items():
        executionString += key + "=" + conn.escape(val)

    executionString = "UPDATE USER " + executionString + "WHERE UserID=" + conn.escape(accountID) +";"
    cur.execute(
        executionString
    )
    conn.commit()

    # Get current data
    cur.execute(
        "Select * From User where UserID=" + conn.escape(accountID)
    )
    result = cur.fetchone()
    conn.close()
    data = {
        "UserID": result[0],
        "Username": result[1],
        "Password": result[2],
        "Firstname": result[3],
        "Lastname": result[4],
        "Email": result[5],
        "Address": result[6]
    }
    return data

if __name__ == "__main__":
    app.run(debug=True)