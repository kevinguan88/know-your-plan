from flask import Flask
from flask_cors import CORS
from routes.auth_routes import auth_bp
from routes.insurance_summary_route import summarize_bp

app = Flask(__name__)
CORS(app, origins=["https://yourfrontenddomain.com"])

app.register_blueprint(auth_bp, url_prefix="/auth")
app.register_blueprint(summarize_bp, url_prefix="/summarize")

if __name__ == "__main__":
    app.run(debug=True)
