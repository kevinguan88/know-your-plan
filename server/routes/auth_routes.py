from flask import Blueprint, request, jsonify
from services.auth_service import create_user, login_user

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/create-user", methods=["POST"])
def route():
    data = request.form
    email = data.get("email")
    password = data.get("password")
    
    if not email or not password:
        return jsonify({"error": "Email and password are required"}), 400
    
    create_user(email, password)
    return jsonify({"message": "User created successfully"}), 201