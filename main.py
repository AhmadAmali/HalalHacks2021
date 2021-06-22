from pprint import pprint as pp
from flask import Flask, flash, redirect, render_template, request, url_for
from stocks import query_api
app = Flask(__name__)
@app.route('/')

def index():
     return render_template(
        'index.html')





if __name__=='__main__':
    app.run(debug=True)