from pprint import pprint as pp
from flask import Flask, flash, redirect, render_template, request, url_for, current_app
from plans import plans

app = Flask(__name__)
app.register_blueprint(plans, url_prefix="/plans")

@app.route('/')

def index():
	return current_app.send_static_file('main_page.html')





if __name__=='__main__':
	app.run(debug=True)