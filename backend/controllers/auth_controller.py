from flask import request, jsonify, Blueprint
from werkzeug.security import generate_password_hash, check_password_hash

from database import db
from models.user import User

auth_bp = Blueprint("auth", __name__)

@auth_bp.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    
    existing_user = User.query.filter_by(username=data.get('username')).first()
    
    if existing_user: 
        return jsonify({'error': 'Username already exists'}), 400

    hashed_password = generate_password_hash(data.get('password'))

    new_user = User(
        username = data.get('username'),
        password = hashed_password,
        role = data.get('role', 'employee')
    )

    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User created successfully'}), 201

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=data.get('username')).first()

    if user:
        if check_password_hash(user.password, password):
            return jsonify({'message': 'Login successful'}), 200
        else:
            return jsonify({'error': 'Login or password is incorrect'}), 401
    else:
        return jsonify({'error': 'Login or password is incorrect'}), 401
    
    