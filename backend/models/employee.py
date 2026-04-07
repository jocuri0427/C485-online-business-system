from database import db

class Employee(db.Model):
    __tablename__ = 'employees'
    employee_id = db.Column(db.Integer, primary_key=True)
    branch_id = db.Column(db.Integer, db.ForeignKey(
        'branches.branch_id'), nullable=True)
    first_name = db.Column(db.String(100), nullable=False)
    last_name = db.Column(db.String(100), nullable=False)
    age = db.Column(db.Integer, nullable=False)
    salary = db.Column(db.Float, nullable=False)
    position = db.Column(db.String(100), nullable=False)

    def to_dict(self):
        return {
            "id": self.employee_id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "age": self.age,
            "salary": self.salary,
            "position": self.position
        }
