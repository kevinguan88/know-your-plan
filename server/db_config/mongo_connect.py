from pymongo import MongoClient
from dotenv import load_dotenv
import os
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

def get_db():
    try:
        client = MongoClient(MONGO_URI)
        db = client["insurance_db"]
        return db
    except Exception as e:
        print(f"Error connecting to MongoDB: {e}")
        return None
    
