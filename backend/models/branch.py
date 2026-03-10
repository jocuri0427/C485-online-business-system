from database import db


class Branch(db.Model):
    __tablename__ = 'branches'
    branch_id = db.Column(db.Integer, primary_key=True)
    business_id = db.Column(db.Integer, db.ForeignKey(
        'businesses.business_id'), nullable=False)
    location_name = db.Column(db.String(100), nullable=False)

    # link inventory items and employees to branch
    items = db.relationship('InventoryItem', backref='branch', lazy=True)
    employees = db.relationship('Employee', backref='branch', lazy=True)
