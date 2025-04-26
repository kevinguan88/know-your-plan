from flask import Blueprint, request, jsonify
from services.auth_service import dummy_auth_service

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/login", methods=["POST"])
def route():
    # Dummy route for testing purposes
    return jsonify({"message": "Dummy route accessed"}), 200