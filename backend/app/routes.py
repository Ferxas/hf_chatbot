from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from .models import User, ChatHistory
from .controllers import generate_response
from . import db

main = Blueprint("main", __name__)


# ✅ REGISTRO
@main.route("/register", methods=['POST'])
def register():
    data = request.get_json()
    user_model = User(db)
    
    if user_model.create_user(data['username'], data['password']):
        return jsonify({"message": "User created successfully"}), 201
    return jsonify({"message": "User already exists"}), 400


# ✅ LOGIN
@main.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    user_model = User(db)
    user = user_model.get_user(data["username"])
    if user and user["password"] == data["password"]:
        token = create_access_token(identity=str(user['_id']))
        return jsonify({"token": token}), 200
    return jsonify({"message": "Invalid credentials"}), 401


# ✅ CHATBOT
@main.route("/chat", methods=["POST"])
@jwt_required()
def chat():
    data = request.get_json()
    user_id = get_jwt_identity()
    message = data.get("message")

    if not message:
        return jsonify({"message": "Message cannot be empty"}), 400

    response = generate_response(user_id, message, db)
    return jsonify({"response": response})


# ✅ HISTORIAL DE CONVERSACIONES
@main.route("/history", methods=["GET"])
@jwt_required()
def history():
    user_id = get_jwt_identity()
    history_model = ChatHistory(db)

    try:
        history = history_model.get_history(user_id)
        if not history:
            return jsonify({"message": "No conversation history found."}), 404
        
        return jsonify({"history": history}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500