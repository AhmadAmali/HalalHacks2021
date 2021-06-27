import json
import os
from flask import Flask, request, jsonify
from flask_mongoengine import MongoEngine
From dotenv import load_dotenv
load_dotenv()


app = Flask(__name__)
# app.config['MONGODB_SETTINGS'] = {
#     'db': 'your_database',
#     'host': 'localhost',
#     'port': 27017
# }
DB_URI = os.environ.get('DB_URI')
db = MongoEngine()
client = MongoEngine.MongoClient(DB_URI)
db = client.test
db.init_app(app)


class User(db.Document):
    name = db.StringField()
    email = db.StringField()
    def to_json(self):
        return {"name": self.name,
                "email": self.email}

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