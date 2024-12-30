from flask import Flask
from flask_jwt_extended import JWTManager
from pymongo import MongoClient
from .config import Config
from flask_cors import CORS


db = None

def create_app():
    global db
    
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(Config)
    
    # configure mongodb
    client = MongoClient(app.config['MONGO_URI'])
    db = client['mindfulness_chatbot']
    
    # configure jwt
    jwt = JWTManager(app)
    
    # register routes
    from .routes import main
    app.register_blueprint(main)
    
    
    return app