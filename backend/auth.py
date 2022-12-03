
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, render_template, request
from flask_login import login_user, login_required, logout_user, current_user
# from forms import RegForm
import pymysql
# from dotenv import load_dotenv
import os
from marshmallow import Schema, fields


from flask import Flask, jsonify,request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


def connectDB():
    # load_dotenv()
    return pymysql.connect(
        host="localhost",
        user="root",
        password="password",
        database="dbsseed (bank)"
    )


class UserLoginInputSchema(Schema):
    username = fields.Str(required=True)
    password = fields.Str(required=True)

UserLoginInput = UserLoginInputSchema()

@app.route("/login", methods=['GET','POST'])
@app.route('/')
def login():
    if request.method == 'GET':
        return "200"
    if request.method == 'POST':
        errors = UserLoginInput.validate(request.arg)
        if errors:
            pymysql.abort(401,str('User does not exist'))

        user_details_input = UserLoginInput.dump(request.args)
        username_input = user_details_input['username']
        password_input = user_details_input['password']

        conn = connectDB()
        cursor = conn.cursor()

        user_name = cursor.execute("SELECT UserID FROM User WHERE Username=?", (username_input,)).fetchone()
        if user_name:
            user_pw = cursor.execute("SELECT Password FROM User WHERE Username=?", (username_input,)).fetchone()
            if user_pw == password_input:
                return "200" #(render_template)
            else: 
                pymysql.abort(401,str('password incorrect'))
             
if __name__ == '__main__':
    app.run()

