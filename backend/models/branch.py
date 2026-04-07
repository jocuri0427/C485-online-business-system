from database import db

class Branch(db.Model):
    __tablename__ = 'branches'
    branch_id = db.Column(db.Integer, primary_key=True)
    business_id = db.Column(db.Integer, db.ForeignKey(
        'businesses.business_id'), nullable=True)
    branch_street = db.Column(db.String(255), nullable=False)
    branch_city = db.Column(db.String(100), nullable=False)
    branch_zipcode = db.Column(db.Integer, nullable=False)
    branch_state = db.Column(db.String(50), nullable=False)
    revenue = db.Column(db.Float, nullable=False, default=0.0)
    number_of_employees = db.Column(db.Integer, nullable=False, default=0)

    # link inventory items and employees to branch
    items = db.relationship('InventoryItem', backref='branch', lazy=True, cascade="all, delete-orphan")
    employees = db.relationship('Employee', backref='branch', lazy=True, cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.branch_id,
            "branch_street": self.branch_street,
            "branch_city": self.branch_city,
            "branch_zipcode": self.branch_zipcode,
            "branch_state": self.branch_state,
            "revenue": self.revenue,
            "number_of_employees": self.number_of_employees
        }
