from flask import Blueprint, jsonify, request
from services.employee_service import get_employees_by_branch, add_employee

employee_bp = Blueprint("employees", __name__)

@employee_bp.route('/employees/<int:branch_id>', methods=['GET'])
def get_employees(branch_id):
    """Lists all employees for a specific branch."""
    return jsonify(get_employees_by_branch(branch_id)), 200

@employee_bp.route('/employees', methods=['POST'])
def create_employee():
    """Records new staff."""
    data = request.json
    result = add_employee(data)
    return jsonify(result), 201
