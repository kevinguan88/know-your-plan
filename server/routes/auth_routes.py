from flask import Blueprint, request, jsonify
from services.auth_service import dummy_auth_service

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/dummyRoute", methods=["POST"])
def dummy_route():
    # Dummy route for testing purposes
    data = request.get_json()
    return jsonify({"message": "Dummy route accessed", "data": data}), 200