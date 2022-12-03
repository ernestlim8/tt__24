from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, login_required, logout_user, current_user
from flask import Blueprint, request, redirect, render_template, url_for #, flash
from forms import RegForm
from users import User

auth = Blueprint('auth', __name__)

@auth.route('/login', methods=['GET', 'POST']) # control the routes of going into the app
@auth.route('/')
def login():
    form = RegForm()
    if request.method == 'GET':
        if current_user.is_authenticated == True: 
            return redirect() # redirect to the dashboard
    if request.method == 'POST':
        if form.validate():
            check_user = User.objects(email=form.email.data).first()
            if check_user: # check if user exists in database
                if check_password_hash(check_user['password'], form.password.data):
                    login_user(check_user)
                    return redirect() # redirect to the dashboard
                else:
                    form.password.errors.append("User Password Not Correct")
            else:
                form.email.errors.append("No Such User")
    return render_template('login.html', form=form, panel="Login") 


# register account 
@auth.route('/user', methods=['GET', 'POST'])
def register():
    form = RegForm()
    if request.method == 'GET': # if user is authenticated, redirect to dashboard
        if current_user.is_authenticated == True:
            return redirect(url_for())#dashboard
    elif request.method == 'POST':
        if form.validate():
            existing_user = User.objects(email=form.email.data).first()
            if existing_user is None: # add user to database if user doesnt exist
                hashpass = generate_password_hash(form.password.data, method='sha256')
                user = User(email=form.email.data,password=hashpass, name=form.name.data).save()
                login_user(user) # login and redirect to packages
                return redirect(url_for('packages.render_packages')) 
            else:
                form.email.errors.append("User already existed")
                render_template('register.html', form=form, panel="Register")       
    return render_template('register.html', form=form, panel="Register")


@auth.route('/logout')
@login_required
def logout(): 
    logout_user()
    return redirect(url_for('auth.login'))


