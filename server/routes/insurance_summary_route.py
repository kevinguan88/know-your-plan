from flask import Blueprint, request, jsonify
from services.summaries_service import upload_summary, get_summaries, get_summary, delete_summary
from services.ai_service import dummy_ai_service

summarize_bp = Blueprint("summarize", __name__)


@summarize_bp.route("/upload-summary", methods=["POST"])
def upload():
    auth_header = request.headers.get("Authorization")
    
    if not auth_header:
        return jsonify({"error": "Authorization header is missing"}), 401
    
    token = auth_header.split(" ")[1] if " " in auth_header else auth_header    
    
    data = request.form
    summary_name = data.get("summaryName")
    insurance_doc = request.files.get("policy")
    
    if insurance_doc and not insurance_doc.filename.endswith(".pdf"):
        return jsonify({"error": "Only PDF files are allowed"}), 400
    if not insurance_doc:
        return jsonify({"error": "Insurance document is required"}), 400
    
    summary = dummy_ai_service(insurance_doc)
    upload_summary(token, summary, summary_name)

    return jsonify({"message": "Summary uploaded"}), 200

@summarize_bp.route("/dummy-upload-summary", methods=["POST"])
def dummy_upload():
    auth_header = request.headers.get("Authorization")
    
    if not auth_header:
        return jsonify({"error": "Authorization header is missing"}), 401
    
    token = auth_header.split(" ")[1] if " " in auth_header else auth_header    
    
    data = request.form
    summary_name = data.get("summaryName")
    insurance_doc = request.files.get("policy")
    
    if insurance_doc and not insurance_doc.filename.endswith(".pdf"):
        return jsonify({"error": "Only PDF files are allowed"}), 400
    if not insurance_doc:
        return jsonify({"error": "Insurance document is required"}), 400
    
    upload_summary(token, "I AM A DUMMY", summary_name)

    return jsonify({"message": "Summary uploaded"}), 200

@summarize_bp.route("/get-summaries", methods=["GET"])
def summaries():
    auth_header = request.headers.get("Authorization")
    
    if not auth_header:
        return jsonify({"error": "Authorization header is missing"}), 401
    
    token = auth_header.split(" ")[1] if " " in auth_header else auth_header
    summaries = get_summaries(token)
    
    return jsonify({"summaries": summaries}), 200 if summaries else 500

@summarize_bp.route("/get-summary/<summary_id>", methods=["GET"])
def get_summary_by_id(summary_id):
    auth_header = request.headers.get("Authorization")
    
    if not auth_header:
        return jsonify({"error": "Authorization header is missing"}), 401
    
    token = auth_header.split(" ")[1] if " " in auth_header else auth_header
    
    if not summary_id:
        return jsonify({"error": "Summary ID is required"}), 400
    
    summary = get_summary(token, summary_id)
    
    return jsonify({"summary": summary}), 200 if summary else 500

@summarize_bp.route("/dummy-make-summary", methods=["GET"])
def dummy_make_summary():
    insurance_doc = request.files.get("policy")
    
    if insurance_doc and not insurance_doc.filename.endswith(".pdf"):
        return jsonify({"error": "Only PDF files are allowed"}), 400
    if not insurance_doc:
        return jsonify({"error": "Insurance document is required"}), 400
    
    summary = "BLA BLA BLA"
    
    return jsonify({"summary": summary}), 200 if summary else 500

@summarize_bp.route("/make-summary", methods=["GET"])
def make_summary():
    insurance_doc = request.files.get("policy")
    
    if insurance_doc and not insurance_doc.filename.endswith(".pdf"):
        return jsonify({"error": "Only PDF files are allowed"}), 400
    if not insurance_doc:
        return jsonify({"error": "Insurance document is required"}), 400
    
    summary = dummy_ai_service(insurance_doc)
    
    return jsonify({"summary": summary}), 200 if summary else 500

@summarize_bp.route("/delete-summary/<summary_id>", methods=["DELETE"])
def delete(summary_id):
    auth_header = request.headers.get("Authorization")
    
    if not auth_header:
        return jsonify({"error": "Authorization header is missing"}), 401
    
    token = auth_header.split(" ")[1] if " " in auth_header else auth_header
    delete_summary(token, summary_id)
    
    return jsonify({"message": "Summary deleted successfully"}), 200 
    
    


    
   