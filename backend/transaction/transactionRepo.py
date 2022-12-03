import re
import pymysql
import os
from dotenv import load_dotenv
import uuid 

def createScheudleTransaction(transactionInfo):
    tid = str(uuid.uuid4())
    conn = connectDB()
    cur = conn.cursor()
    cur.execute(
                "INSERT INTO ScheduledTransactions"+
                "(TransactionID, AccountID,ReceivingAccountID,TransactionAmount,Comment,scheduledTime, transactionStatus)"+
                "VALUES ("+ conn.escape(tid)+","+ conn.escape(transactionInfo["accID"])+","+ conn.escape(transactionInfo["transactionAmt"])+","
                + conn.escape(transactionInfo["comment"]) +conn.escape(transactionInfo["scheduleTime"])+conn.escape(transactionInfo['transactionStatus'])+ ");"  
            )
    cur.commit()
    conn.close()

def createTransaction(transactionInfo):
    tid = str(uuid.uuid4())
    conn = connectDB()
    cur = conn.cursor()
    cur.execute(
                "INSERT INTO ScheduledTransactions"+
                "(TransactionID, AccountID,ReceivingAccountID,TransactionAmount,Comment,scheduledTime, transactionStatus,Date)"+
                "VALUES ("+ conn.escape(tid)+","+ conn.escape(transactionInfo["accID"])+","+ conn.escape(transactionInfo["transactionAmt"])+","
                + conn.escape(transactionInfo["comment"]) +conn.escape(transactionInfo["scheduleTime"])+conn.escape(transactionInfo['transactionStatus']),+conn.escape(transactionInfo['scheduleTime'])+ ");"  
            )
    cur.commit()
    conn.close()



def connectDB():
    load_dotenv()
    return pymysql.connect(
        host=os.getenv("HOST"),
        user=os.getenv("USER"),
        password=os.getenv("PASSWORD"),
        database=os.getenv("DATABASE")
    )
