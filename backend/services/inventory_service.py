from database import db
from models.inventory import InventoryItem as Inventory


def get_all_inventory():
    items = Inventory.query.all()
    return [item.to_dict() for item in items]


def add_inventory(data):
    item = Inventory(
        item_id=data.get("id"),
        branch_id=data.get("branch_id"),
        name=data["product_name"],
        quantity=data["quantity"],
        price=data["price"]
    )
    db.session.add(item)
    db.session.commit()
    return item.to_dict()


def delete_inventory(inventory_id):
    item = Inventory.query.get(inventory_id)
    if item:
        db.session.delete(item)
        db.session.commit()
