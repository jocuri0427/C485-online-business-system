class Inventory:

    def __init__(self, id, branch_id, product_name, quantity, price):
        self.id = id
        self.branch_id = branch_id
        self.product_name = product_name
        self.quantity = quantity
        self.price = price

    def to_dict(self):
        return self.__dict__