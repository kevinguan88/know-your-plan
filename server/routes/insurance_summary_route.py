from flask import Blueprint, request, jsonify
from services.summaries_service import dummy_summaries_service
from services.ai_service import dummy_ai_service

summarize_bp = Blueprint("summarize", __name__)


@summarize_bp.route("/dummyRoute", methods=["GET"])
def dummy_route():
    # Dummy route for testing purposes
    return jsonify({"message": "Dummy route accessed"}), 200