from pprint import pprint as pp
from flask import Flask, flash, redirect, render_template, request, url_for, current_app
#from stocks import query_api
app = Flask(__name__)
@app.route('/')

def index():
	return current_app.send_static_file('categories.html')





if __name__=='__main__':
	app.run(debug=True)