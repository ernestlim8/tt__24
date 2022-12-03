import pymysql
import uuid
import hashlib

from flask import Flask, request, abort
from flask_restful import Resource, Api
from marshmallow import Schema, fields

from dotenv import load_dotenv

app = Flask(__name__)
api = Api(app)

localhost='localhost'
user='root'
password='ronaldtan123'

class UserRegistrationInputSchema(Schema):
    username = fields.Str(required=True)
    password = fields.Str(required=True)
    firstName = fields.Str(required=True)
    lastName = fields.Str(required=True)
    email = fields.Str(required=True)
    address = fields.Str(required=True)
    optIntoPhyStatements = fields.Str(required=True)


UserRegistrationInput = UserRegistrationInputSchema()

class registerUser(Resource):
    def post(self):

        # validate errors
        errors = UserRegistrationInput.validate(request.args)
        if errors:
            abort(406, str(errors))

        # extract input values
        user_registration_input = UserRegistrationInput.dump(request.args)
        
        # connect mySQL
        conn = pymysql.connect(host=localhost,
                             user=user,
                             password=password,)

        # set to `Bank` database
        with conn.cursor() as cursor:
            cursor.execute("USE `Bank`")

        # grab the latest userID
        with conn.cursor() as cursor:
            cursor.execute("SELECT max(UserID) FROM `User`")

        # Create a new record
        newUserID = uuid.uuid4()
        hashedPassword = hashlib.sha256(user_registration_input['password'].encode('utf-8')).hexdigest()
        sql = '''
            INSERT INTO `User` VALUES ('%s','%s','%s','%s','%s','%s','%s',_binary '\\%s');
            ''' % (str(newUserID), user_registration_input['username'], hashedPassword, user_registration_input['firstName'], user_registration_input['lastName'], user_registration_input['email'], user_registration_input['address'], user_registration_input['optIntoPhyStatements'])

        print (sql)
        
        with conn.cursor() as cursor:
            cursor.execute(sql)
        
        # commit connection
        conn.commit()
        return 200

api.add_resource(registerUser, '/user/', endpoint='user')

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


class UserLoginInputSchema(Schema):
    username = fields.Str(required=True)
    password = fields.Str(required=True)

UserLoginInput = UserLoginInputSchema()

class loginUser(Resource):
    def post(self):
        errors = UserLoginInput.validate(request.args)
        if errors:
            abort(401,str('User does not exist'))

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

app.run(host="0.0.0.0", port=5001, debug=True)