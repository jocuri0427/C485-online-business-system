from database import db
from models.inventory import InventoryItem

def get_all_inventory():
    items = InventoryItem.query.all()
    return [item.to_dict() for item in items]

def get_inventory_by_branch(branch_id):
    items = InventoryItem.query.filter_by(branch_id=branch_id).all()
    return [item.to_dict() for item in items]

def add_inventory(data):
    new_item = InventoryItem(
        branch_id=data.get('branch_id'),
        name=data.get('name') or data.get('product_name'),
        price=data.get('price'),
        quantity=data.get('quantity', 0)
    )
    db.session.add(new_item)
    db.session.commit()
    return new_item.to_dict()

def update_stock(item_id, quantity):
    item = InventoryItem.query.get(item_id)
    if not item:
        return None
    item.quantity = quantity
    db.session.commit()
    return item.to_dict()