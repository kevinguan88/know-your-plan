#CRUD operations for summaries
from db_config.mongo_connect import get_db
from utils.jwt_utils import decode_jwt_token
import uuid


def upload_summary(token, summary_text, summary_name):
    email  = decode_jwt_token(token)
    print(email)
    if not email:
        return None, "Invalid token"
    
    summary = {
        "id": str(uuid.uuid4()),
        "name": summary_name,
        "summary": summary_text
    }
    try:
        db = get_db()
        db.users.update_one({"email": email}, {"$push": {"summaries": summary}})
        
    except Exception as e:
        return None, f"Error connecting to database: {e}"
    
def get_summaries(token):
    email = decode_jwt_token(token)
    if not email:
        raise ValueError("Invalid token")
    
    db = get_db()
    user = db.users.find_one({"email": email})
    
    if not user:
        raise ValueError("User not found")
    
    return user.get("summaries", [])

def get_summary(token, summary_id):
    email = decode_jwt_token(token)
    if not email:
        return None, "Invalid token"
    
    try:
        db = get_db()
        user = db.users.find_one({"email": email})
        
        if not user:
            return None, "User not found"
        
        for summary in user.get("summaries", []):
            if summary["id"] == summary_id:
                return summary, None
        
        return None, "Summary not found"
        
    except Exception as e:
        return None, f"Error connecting to database: {e}"
    
def delete_summary(token, summary_id):
    email = decode_jwt_token(token)
    if not email:
        return None, "Invalid token"
    
    try:
        db = get_db()
        user = db.users.find_one({"email": email})
        if not user:
            return None, "User not found"

        db.users.update_one({"email": email}, {"$pull": {"summaries": {"id": summary_id}}})
    except Exception as e:
        return None, f"Error connecting to database: {e}"