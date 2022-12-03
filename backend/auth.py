import pymysql
import hashlib

from flask import Flask, request, abort
from flask_restful import Resource, Api
from marshmallow import Schema, fields

app = Flask(__name__)
api = Api(app)

localhost='localhost'
user='root'
password='password'

class UserLoginInputSchema(Schema):
    username = fields.Str(required=True)
    password = fields.Str(required=True)

UserLoginInput = UserLoginInputSchema()

class loginUser(Resource):
    def post(self):
        errors = UserLoginInput.validate(request.args)
        if errors:
            pymysql.abort(401,str('User does not exist'))

        user_details_input = UserLoginInput.dump(request.args)
        username_input = user_details_input['username']
        password_input = user_details_input['password']

        conn = pymysql.connect(host=localhost,
                             user=user,
                             password=password,)

        # set to `Bank` database
        with conn.cursor() as cursor:
            cursor.execute("USE `Bank`")

        with conn:
            with conn.cursor() as cursor:
            # Create a new record
            # sql = "INSERT INTO `users` (`email`, `password`) VALUES (%s, %s)"
            # cursor.execute(sql, ('webmaster@python.org', 'very-secret'))
                SQLUserID = "SELECT UserID FROM User WHERE Username='%s'" % (username_input)
                hashed_password = hashlib.sha256(password_input.encode('utf-8')).hexdigest()
                SQLPassword = "SELECT Password FROM User WHERE Username='%s'" % (username_input)
                cursor.execute(SQLUserID)
                user_id = cursor.fetchone()
                if user_id:
                    cursor.execute(SQLPassword)
                    user_pw = cursor.fetchone()
                    if str(user_pw[0]) == str(hashed_password):
                        return (200, user_id[0])
                    else: 
                        abort(401,str('password incorrect'))
             
api.add_resource(loginUser, '/login/', endpoint='login')
app.run()

