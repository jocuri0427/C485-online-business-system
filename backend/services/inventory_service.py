from storage.json_storage import read_data, write_data
from models.inventory import Inventory

FILE = "inventory.json"

def get_all_inventory():
    return read_data(FILE)


def add_inventory(data):

    inventory = read_data(FILE)

    new_id = len(inventory) + 1

    item = Inventory(
        new_id,
        data["branch_id"],
        data["product_name"],
        data["quantity"],
        data["price"]
    )

    inventory.append(item.to_dict())

    write_data(FILE, inventory)

    return item.to_dict()