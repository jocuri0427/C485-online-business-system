from database import db

class InventoryItem(db.Model):
    __tablename__ = 'inventory_items'
    item_id = db.Column(db.Integer, primary_key=True)
    branch_id = db.Column(db.Integer, db.ForeignKey('branches.branch_id'), nullable=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    quantity = db.Column(db.Integer, default=0)

    def to_dict(self):
        return {
            "id": self.item_id,
            "branch_id": self.branch_id,
            "product_name": self.name,
            "quantity": self.quantity,
            "price": self.price
        }