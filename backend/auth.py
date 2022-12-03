
from werkzeug.security import generate_password_hash, check_password_hash
from flask import Flask, render_template, request
from flask_login import login_user, login_required, logout_user, current_user
# from forms import RegForm
import pymysql
from dotenv import load_dotenv
import os
from marshmallow import Schema, fields


from flask import Flask, jsonify,request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


def connectDB():
    load_dotenv()
    return pymysql.connect(
        host=os.getenv("HOST"),
        user=os.getenv("USER"),
        password=os.getenv("PASSWORD"),
        database=os.getenv("DATABASE")
    )


class UserLoginInputSchema(Schema):
    username = fields.Str(required=True)
    password = fields.Str(required=True)

UserLoginInput = UserLoginInputSchema()

@app.route("/login", methods=['POST'])
@app.route('/')
def login():
    errors = UserLoginInput.validate(request.arg)
    if errors:
        abort(40,str(errors))

    user_details_input = UserLoginInput.dump(request.args)
    username_input = user_details_input['username']
    password_input = user_details_input['password']

    conn = connection()
    cursor = conn.cursor()

    user_id = cursor.execute("SELECT UserID FROM User WHERE UserID=?", (UserId,)).fetchone()
    if user_id:
        user_pw = cursor.execute("SELECT Password FROM User WHERE UserID=2;", (UserId,)).fetchone()
        if user_pw == password_input:
            return (render_template)
        else: 
            return 'password incorrect'
    else:
        return 'password does not exist'

if __name__ == '__main__':
    app.run()

