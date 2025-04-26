from db_config.mongo_connect import get_db
from models.user_model import UserModel
from flask import jsonify
#CRUD operatons for users

def create_user(email, password):
    user = UserModel.create_user(email, password)
    
    try:
        db = get_db()

        if db.users.find_one({"email": email}):
            return None, "User already exists"
        
        db.users.insert_one(user)
        return user, None
    except Exception as e:
        return f"Error creating user: {e}"

def login_user(email, password):
    db = get_db()
    
    user = db.users.find_one({"email": email})
    if not user:
        return None, "User not found"
    
    if not UserModel.check_password(user, password):
        return None, "Incorrect password"
    
    return "Login successful", None
    
    
 