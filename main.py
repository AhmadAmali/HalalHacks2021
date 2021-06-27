from pprint import pprint as pp
from flask import Flask, flash, redirect, render_template, request, url_for, current_app, Blueprint
from plans import plans
#from .extensions import mongo
main = Blueprint('main', __name__)

app = Flask(__name__)
app.register_blueprint(plans, url_prefix="/plans")

@app.route('/')
def index():
	return render_template('main_page.html')

@app.route('/categories')
def categories():
	return current_app.send_static_file('categories.html')

@app.route('/explore_plans')
def explore_plans():
	return current_app.send_static_file('explore_plans.html')

@app.route('/new_plan')
def new_plan():
	return current_app.send_static_file('new_plan.html')

@app.route('/plan/id/<int:plan_id>')
def plan_info(plan_id):
	# query real info using id into plan_data
	plan_data = {
		'id': plan_id,
		'title': "Take care of parents",
		'motto': '''"Thy Lord hath decreed that ye worship none but Him, and that ye be kind to parents. Whether one or both of them attain old age in thy life, say not to them a word of contempt, nor repel them, but address them in terms of honor. And out of kindness, lower to them the wing of humility, and say: ‘My Lord! bestow on them Thy Mercy even as they cherished me in childhood' "(17:23-24).'''
	}
	return render_template('plan_info.html', plan=plan_data)


if __name__=='__main__':
	app.run(debug=True)