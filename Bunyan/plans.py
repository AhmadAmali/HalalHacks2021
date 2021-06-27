from flask import Blueprint, render_template, current_app

plans = Blueprint("plans", __name__, static_folder="static", template_folder="templates")

@plans.route("/")
def home():
    return current_app.send_static_file('plan_info.html')

@plans.route("/explore")
def explore():
    return current_app.send_static_file('explore_plans.html')