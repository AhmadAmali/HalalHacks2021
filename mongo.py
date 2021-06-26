import json
import os
from flask import Flask, request, jsonify
from flask_mongoengine import MongoEngine
from dotenv import load_dotenv
load_dotenv()


app = Flask(__name__)
# app.config['MONGODB_SETTINGS'] = {
#     'db': 'your_database',
#     'host': 'localhost',
#     'port': 27017
# }
password = os.environ.get("DB_PASSWORD")
db = MongoEngine()
client = pymongo.MongoClient("mongodb+srv://halalAdmin:" + password + "@cluster0.mnwcg.mongodb.net/HalalDB?retryWrites=true&w=majority")
#mongodb+srv://halalAdmin:@cluster0.mnwcg.mongodb.net/HalalDB?retryWrites=true&w=majority
db = client.test
db.init_app(app)

class User(db.Document):
    name = db.StringField()
    email = db.StringField()
    def to_json(self):
        return {"name": self.name,
                "email": self.email}

class Plan(db.Document):
    goal = db.StringField() 
    id = db.IntField() 
    motto = db.StringField() 
    subscribers = db.StringField()  
    length = db.StringField() 
    category = db.StringField() 
    tasks = db.ListField()

Plan(goal = "Wear Hijab", id = 111000, motto = "Modesty is a branch of faith", subscribers = "17K", length = "180 days", category = "Physical", tasks = ["Long pants", "Long sleeves", "Full attire", "No attire"])

@app.route('/', methods=['GET'])
def query_records():
    name = request.args.get('name')
    user = User.objects(name=name).first()
    if not user:
        return jsonify({'error': 'data not found'})
    else:
        return jsonify(user.to_json())

@app.route('/', methods=['PUT'])
def create_record():
    record = json.loads(request.data)
    user = User(name=record['name'],
                email=record['email'])
    user.save()
    return jsonify(user.to_json())

@app.route('/', methods=['POST'])
def update_record():
    record = json.loads(request.data)
    user = User.objects(name=record['name']).first()
    if not user:
        return jsonify({'error': 'data not found'})
    else:
        user.update(email=record['email'])
    return jsonify(user.to_json())

@app.route('/', methods=['DELETE'])
def delete_record():
    record = json.loads(request.data)
    user = User.objects(name=record['name']).first()
    if not user:
        return jsonify({'error': 'data not found'})
    else:
        user.delete()
    return jsonify(user.to_json())

if __name__ == "__main__":
    app.run(debug=True)