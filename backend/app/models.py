from flask import jsonify
from bson.objectid import ObjectId


class User:
    def __init__(self, db):
        self.collection = db['users']

    def create_user(self, username, password):
        user = self.collection.find_one({"username": username})
        if user:
            return False
        self.collection.insert_one(
            {"username": username, "password": password})
        return True

    def get_user(self, username):
        return self.collection.find_one({"username": username})


class ChatHistory:
    def __init__(self, db):
        self.collection = db["chat_history"]

    def save_message(self, user_id, message, response):
        self.collection.insert_one({
            "user_id": user_id,
            "message": message,
            "response": response
        })

    def get_history(self, user_id):
        return list(self.collection.find({"user_id": user_id}))
