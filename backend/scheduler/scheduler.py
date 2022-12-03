import requests
from flask import Flask, request, jsonify
from flask_cors import CORS
import datetime

from apscheduler.schedulers.background import BlockingScheduler
app = Flask(__name__)
CORS(app)
def checkAction():
    try:
        requests.put("http://192.168.121.233:5003/user/transaction")
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


if __name__ == '__main__':
    
    # scheduler = BackgroundScheduler()
    scheduler = BlockingScheduler()

    scheduler.add_job(func=checkAction, trigger="interval", minutes=1, timezone = 'Asia/Singapore')
    app.run(port=5004,  debug=True, use_reloader=False)