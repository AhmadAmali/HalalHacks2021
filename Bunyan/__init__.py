import os
from flask import Flask
from .extensions import mongo
from .main import main
import sys
#sys.path.append(os.path.abspath(os.path.join('..', 'config')))
def create_app(config_object='Bunyan.settings'):
    app = Flask(__name__,
            static_url_path='', 
            static_folder='static',
            template_folder='templates')

    app.config.from_object(config_object)

    mongo.init_app(app)

    app.register_blueprint(main)

    return app 
