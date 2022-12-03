import pymysql
import os
from dotenv import load_dotenv

def getAccountDetails(userID):
    conn = connectDB()
    cur = conn.cursor()
    cur.execute(
        "SELECT * from BankAccount where UserId=" + conn.escape(userID) + ";")
    result = cur.fetchall()
    conn.close()
    return result

def connectDB():
    load_dotenv()
    return pymysql.connect(
        host= "localhost",
        user= "root",
        password= "password",
        database= "Bank"
    )
