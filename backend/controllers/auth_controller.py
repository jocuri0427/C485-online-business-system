from flask import Blueprint, request, jsonify
from services.auth_service import get_all_users, add_user

auth_bp = Blueprint("auth", __name__)

@auth_bp.route('/users', methods=['GET'])
def list_users():
    users = get_all_users()
    return jsonify(users)

@auth_bp.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    user = add_user(data)
    return jsonify(user), 201
