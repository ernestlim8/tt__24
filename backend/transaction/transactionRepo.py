import re
import pymysql
import os
from dotenv import load_dotenv
import uuid 

def createScheudleTransaction(transactionInfo):
    tid = str(uuid.uuid4())
    # print(tid)
    conn = connectDB()
    cur = conn.cursor()
    cur.execute(
                "INSERT INTO ScheduledTransactions"+
                "(TransactionID, AccountID,ReceivingAccountID,TransactionAmount,Comment,scheduledTime, transactionStatus)"+
                "VALUES ("+ conn.escape(tid)+","+ conn.escape(transactionInfo["accID"])+","+ conn.escape(transactionInfo["recipientId"])+","+ conn.escape(transactionInfo["amount"])+","
                + conn.escape(transactionInfo["comment"]) +","+conn.escape(transactionInfo["scheduleTime"])+","+conn.escape(transactionInfo['transactionStatus'])+ ");"  
            )
    conn.commit()
    conn.close()

def createTransaction(transactionInfo):
    tid = str(uuid.uuid4())
    conn = connectDB()
    cur = conn.cursor()
    cur.execute(
                "INSERT INTO ScheduledTransactions"+
                "(TransactionID, AccountID,ReceivingAccountID,TransactionAmount,Comment,scheduledTime, transactionStatus,Date)"+
                "VALUES ("+ conn.escape(tid)+","+ conn.escape(transactionInfo["accID"])+","+ conn.escape(transactionInfo["recipientId"])+","+ conn.escape(transactionInfo["amount"])+","
                + conn.escape(transactionInfo["comment"]) +","+conn.escape(transactionInfo["scheduleTime"])+","+conn.escape(transactionInfo['transactionStatus'])+","+conn.escape(transactionInfo['scheduleTime'])+ ");"  
            )
    conn.commit()
    conn.close()


def getTransaction(accountID, limit,offset):
    conn = connectDB()
    cur = conn.cursor()
    cur.execute("Select * From ScheduledTransactions where accountID= "+ conn.escape(accountID) + " ORDER BY scheduledTime limit "+ conn.escape(limit) + " OFFSET "+ conn.escape(offset)+';')
    result = cur.fetchall()
    conn.close()
    return result

def getTotalCount(accountID):
    conn = connectDB()
    cur = conn.cursor()
    cur.execute("Select count(TransactionID) From ScheduledTransactions where accountID= "+ conn.escape(accountID) +' ;')
    result = cur.fetchone()
    conn.close()
    return result

def deleteTransaction(transactionID):
    conn = connectDB()
    cur = conn.cursor()
    cur.execute("Delete from ScheduledTransactions where TransactionID = "+conn.escape(transactionID)+";" )
    conn.commit()
    conn.close()


def connectDB():
    load_dotenv()
    return pymysql.connect(
        host=os.getenv("HOST"),
        user=os.getenv("USER"),
        password=os.getenv("PASSWORD"),
        database=os.getenv("DATABASE")
    )
