import pymysql
import os
from dotenv import load_dotenv

def getAccountDetails(userID):
    conn = connectDB()
    cur = conn.cursor()
    cur.execute(
        "SELECT * from bankaccount where UserId=" + conn.escape(userID) + ";")
    result = cur.fetchall()
    conn.close()
    return result

def connectDB():
    load_dotenv()
    return pymysql.connect(
        host=os.getenv("HOST"),
        user=os.getenv("USER"),
        password=os.getenv("PASSWORD"),
        database=os.getenv("DATABASE")
    )
