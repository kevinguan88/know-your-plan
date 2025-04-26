from db_config.mongo_connect import get_db
from models.user_model import user_model
#CRUD operatons for users

def create_user(email, password):
    db = get_db()
    if db:
        user = {
            "email": email,
            "password": password,
            "summaries": []
        }
    