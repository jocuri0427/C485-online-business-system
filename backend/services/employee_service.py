from database import db
from models.employee import Employee

def get_employees_by_branch(branch_id):
    employees = Employee.query.filter_by(branch_id=branch_id).all()
    return [{"id": e.employee_id, "name": e.name, "role": e.role} for e in employees]

def add_employee(data):
    new_emp = Employee(
        branch_id=data['branch_id'],
        name=data['name'],
        role=data['role']
    )
    db.session.add(new_emp)
    db.session.commit()
    return {"message": "Employee recorded!", "id": new_emp.employee_id}
