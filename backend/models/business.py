from database import db


class Business(db.Model):
    __tablename__ = 'businesses'
    business_id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    owner_name = db.Column(db.String(100), nullable=False)

    # link branches table to business
    branches = db.relationship(
        'Branch', backref='business', cascade="all, delete-orphan")
