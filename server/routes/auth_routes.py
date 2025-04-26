from flask import Blueprint, request, jsonify
from services.auth_service import create_user, login_user
from utils.jwt_utils import generate_jwt_token

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/create-user", methods=["POST"])
def route():
    data = request.form
    email = data.get("email")
    password = data.get("password")
    
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400
    
    user, error = create_user(email, password)
    if error:
        return jsonify({"error": error}), 400
    
    token = generate_jwt_token(email)
    return jsonify({"message": "User succesfully created", "token": token}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.form
    email = data.get("email")
    password = data.get("password")
    
    if not email or not password:
        return jsonify({"error": "Email and password required"}), 400
    
    
    message, error = login_user(email, password)
    if error:
        return jsonify({"error": error}), 400
    
    token = generate_jwt_token(email)
    
    return jsonify({"message": message, "token": token}), 200 if not error else 400
    
