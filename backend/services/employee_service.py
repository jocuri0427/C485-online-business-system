from storage.json_storage import read_data, write_data
from models.employee import Employee

FILE = "employee.json"

def get_all_employees():
    return read_data(FILE)

def add_employee(employee_data):
    employees = read_data(FILE)
    new_id = len(employees) + 1
    employee = Employee(
        new_id,
        employee_data["first_name"],
        employee_data["last_name"],
        employee_data["age"],
        employee_data["salary"],
        employee_data["position"]
    )
    employees.append(employee.to_dict())
    write_data(FILE, employees)
    return employee.to_dict()

def delete_employee(employee_id):
    employees = read_data(FILE)
    employees = [emp for emp in employees if emp["id"] != employee_id]
    write_data(FILE, employees)

"""
def get_employee_by_id(employee_id):
    employees = get_all_employees()
    return next((emp for emp in employees if emp["id"] == employee_id), None)

def create_employee(employee_data):
    employees = get_all_employees()
    new_employee = Employee(**employee_data)
    employees.append(new_employee.to_dict())
    write_data(FILE, employees)
    return new_employee

def update_employee(employee_id, updated_data):
    employees = get_all_employees()
    for i, emp in enumerate(employees):
        if emp["id"] == employee_id:
            employees[i] = {**emp, **updated_data}
            break
    write_data(FILE, employees)

def delete_employee(employee_id):
    employees = get_all_employees()
    employees = [emp for emp in employees if emp["id"] != employee_id]
    write_data(FILE, employees)

"""