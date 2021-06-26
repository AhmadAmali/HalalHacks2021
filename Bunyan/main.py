from pprint import pprint as pp
from flask import Flask, Blueprint, redirect, render_template, request, url_for, current_app
#from stocks import query_api
from .extensions import mongo
main = Blueprint('main', __name__)
@main.route('/')

def index():
	return current_app.send_static_file('./templates/main_page.html')

@main.route('/testdb')

def addTask():
	task_collection = mongo.db.tasks
	task_collection.insert({'taskName' : 'pray 5 times a day'})
	return '<h1>Added a task!</h1>'





if __name__=='__main__':
	main.run(debug=True)