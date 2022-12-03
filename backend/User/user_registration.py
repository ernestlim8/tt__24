import pymysql
import uuid
import hashlib

from flask import Flask, request, abort
from flask_restful import Resource, Api
from marshmallow import Schema, fields

app = Flask(__name__)
api = Api(app)

localhost='localhost'
user='root'
password='password'

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
        student_name_input = UserRegistrationInput.dump(request.args)
        
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
        hashedPassword = hashlib.sha256(student_name_input['password'].encode('utf-8')).hexdigest()
        sql = '''
            INSERT INTO `User` VALUES (%s,'%s','%s','%s','%s','%s','%s',_binary '\\%s');
            ''' % (str(newUserID), student_name_input['username'], hashedPassword, student_name_input['firstName'], student_name_input['lastName'], student_name_input['email'], student_name_input['address'], student_name_input['optIntoPhyStatements'])

        print (sql)
        
        with conn.cursor() as cursor:
            cursor.execute(sql)
        
        # commit connection
        conn.commit()
        return 200

api.add_resource(registerUser, '/user/', endpoint='user')

app.run(debug=True)