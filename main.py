from pprint import pprint as pp
from flask import Flask, flash, redirect, render_template, request, url_for, current_app
from plans import plans

app = Flask(__name__)
app.register_blueprint(plans, url_prefix="/plans")

@app.route('/')
def index():
	return current_app.send_static_file('main_page.html')

@app.route('/categories')
def categories():
	return current_app.send_static_file('categories.html')

@app.route('/explore_plans')
def explore_plans():
	return current_app.send_static_file('explore_plans.html')

@app.route('/new_plan')
def new_plan():
	return current_app.send_static_file('new_plan.html')

@app.route('/plan_info')
def plan_info():
	return current_app.send_static_file('plan_info.html')


if __name__=='__main__':
	app.run(debug=True)