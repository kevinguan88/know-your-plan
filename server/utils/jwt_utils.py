import jwt
import datetime
from dotenv import load_dotenv
import os
load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")

def generate_jwt_token(email):
    payload = {
        "email": email,
        "exp": datetime.datetime.utcnow() + datetime.timedelta(days=1)  
    }
    
    token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")
    return token