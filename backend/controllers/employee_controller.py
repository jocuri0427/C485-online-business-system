from flask import Blueprint, request, jsonify
from services.employee_service import get_all_employees, add_employee, delete_employee

employee_bp = Blueprint('employee', __name__)

@employee_bp.route('/employees', methods=['GET'])
def get_employees():
    employees = get_all_employees()
    return jsonify(employees)

@employee_bp.route('/employees', methods=['POST'])
def create_employee():
    data = request.get_json()
    employee = add_employee(data)
    return jsonify(employee), 201

@employee_bp.route('/employees/<int:employee_id>', methods=['DELETE'])
def remove_employee(employee_id):
    delete_employee(employee_id)
    return jsonify({"message": "Employee deleted successfully"})