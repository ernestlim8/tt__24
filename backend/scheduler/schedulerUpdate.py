import requests
from flask import Flask
from flask_cors import CORS
import datetime

from apscheduler.schedulers.background import BackgroundScheduler
app = Flask(__name__)
CORS(app)

def checkAction():
    print("start")
    requests.put("http://127.0.0.1:5003/user/transaction").json()
    print("end")
   


if __name__ == '__main__':
    print("here")
    scheduler = BackgroundScheduler()
    scheduler.add_job(func=checkAction, trigger="interval", minutes=1)
    app.run(host="0.0.0.0",port=5004, use_reloader=False)