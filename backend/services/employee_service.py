from database import db
from models.employee import Employee

def get_all_employees():
    employees = Employee.query.all()
    return [emp.to_dict() for emp in employees]

def add_employee(employee_data):
    employee = Employee(
        employee_id=employee_data.get("id"),
        first_name=employee_data["first_name"],
        last_name=employee_data["last_name"],
        age=employee_data["age"],
        salary=employee_data["salary"],
        position=employee_data["position"]
    )
    db.session.add(employee)
    db.session.commit()
    return employee.to_dict()

def delete_employee(employee_id):
    emp = Employee.query.get(employee_id)
    if emp:
        db.session.delete(emp)
        db.session.commit()