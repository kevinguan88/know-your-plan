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
    
    user, error = create_user(email, password)
    if error:
        return jsonify({"error": error}), 400
    
    return jsonify({"message": "User succesfully created"}), 201