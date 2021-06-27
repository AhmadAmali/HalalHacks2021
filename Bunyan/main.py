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

@main.route('/explore_plans')
def render_plans():
	return render_template('explore_plans.html')
	
@main.route('/stats')
def render_stats():
	return render_template('stats.html')

@main.route('/categories')
def categories():
	return render_template('categories.html')

@main.route('/new_plan')
def new_plan():
	return render_template('new_plan.html')
@main.route('/feed')
def feed():
	return render_template('feed.html')

@main.route('/plan')
def plan_info():
	# query real info using id into plan_data
	plan_data = {
        "goal": "Random Kindness",
        "id": 111001,
        "motto": "Shall I not tell you for whom the Hellfire is forbidden? It is every person accessible, polite, and mild.",
        "subscribers": "61K",
        "length": "5 days",
        "category": "Social Impact",
        "task_summary": ["Smile", "Compliment someone", "Call family", "Make dad food"],
        "days":[{
            "length": 1,
            "tasks": ["Buy coffee for person in front of you", "Smile"]
        },
        {
            "length": 1,
            "tasks": ["Compliment someone", "Call family"]
        },
        {
            "length": 1,
            "tasks": ["Text someone who was a pivotal moment in your life"]
        },
        {
            "length": 1,
            "tasks": ["Donate to person in need"]
        },
        {
            "length": 1,
            "tasks": ["Make dad food"]
        }]
    }
	return render_template('plan_info.html', plan=plan_data)


	

@main.route('/testdb')

def addTask():
	task_collection = mongo.db.tasks
	task_collection.insert({'taskName' : 'pray 5 times a day', 'taskLength' : '30 days'})
	return '<h1>Added a task!</h1>'


if __name__=='__main__':
	main.run(debug=True)