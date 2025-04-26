from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime

class UserModel:
    
    def create_user(email, password):
        return {
            
            "email": email,
            "password": generate_password_hash(password),
            "summaries": []
            
        }
    
    def to_dict(user):
        return {
            "id": str(user["id"]),
            "email": user["email"],
            "summaries": user["summaries"]
        }