from werkzeug.security import generate_password_hash, check_password_hash

class UserModel:
    
    def create_user(email, password):
        return {
            
            "email": email,
            "password": generate_password_hash(password),
            "summaries": []
            
        }
    
    def check_password(user, password):
        return check_password_hash(user["password"], password)