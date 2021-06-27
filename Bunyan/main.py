from pprint import pprint as pp
import sys
from flask import Flask, Blueprint, app, redirect, render_template, request, url_for, current_app, send_from_directory
#from stocks import query_api
from .extensions import mongo
#sys.path.append('/path/to/application/app/folder')
main = Blueprint('main', __name__,
				static_url_path='',
				static_folder='static',
         		template_folder='templates')

@main.route('/')

def index():
	return render_template('main_page.html')
	

@main.route('/testdb')

def addTask():
	task_collection = mongo.db.tasks
	task_collection.insert({'taskName' : 'pray 5 times a day'})
	return '<h1>Added a task!</h1>'


if __name__=='__main__':
	main.run(debug=True)