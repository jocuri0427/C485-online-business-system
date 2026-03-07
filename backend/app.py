from unittest import result
from flask import Flask, request, jsonify
from flask_cors import CORS

from database import db

from models.business import Business
from models.branch import Branch
from models.inventory_item import InventoryItem
from models.employee import Employee


app = Flask(__name__)
CORS(app)

# sql config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///business_data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db to app
db.init_app(app)

# if tabbles DNE, create them
with app.app_context():
    db.create_all()

# api routes
app = Flask(__name__)

# inventory routes


@app.route("/inventory/<int:branch_id>", methods=["GET"])
def get_inventory(branch_id):
    items = InventoryItem.query.filter_by(branch_id=branch_id).all()

    result = []
    for item in items:
        result.append({
            "item_id": item.item_id,
            "name": item.name,
            "price": float(item.price),
            "quantity": item.quantity
        })
    return jsonify(result)


@app.route('/inventory', methods=['POST'])
def add_inventory():
    """Adds a new product to a specific branch."""
    data = request.get_json()
    new_item = InventoryItem(
        branch_id=data['branch_id'],
        name=data['name'],
        price=data['price'],
        quantity=data.get('quantity', 0)
    )
    db.session.add(new_item)
    db.session.commit()
    return jsonify({"message": "Item added!"}), 201


@app.route('/inventory/<int:item_id>', methods=['PUT'])
def update_stock(item_id):
    """Updates the stock level (Inline Editing)."""
    item = InventoryItem.query.get(item_id)
    if not item:
        return jsonify({"error": "Item not found"}), 404

    data = request.get_json()
    item.quantity = data['quantity']
    db.session.commit()
    return jsonify({"message": "Stock updated!"}), 200

# branches/employee routes


@app.route('/branches', methods=['GET'])
def get_branches():
    """Gets a list of all store locations."""
    branches = Branch.query.all()
    result = [{"id": b.branch_id, "name": b.location_name} for b in branches]
    return jsonify(result), 200


@app.route('/employees/<int:branch_id>', methods=['GET'])
def get_employees(branch_id):
    """Lists all employees for a specific branch."""
    employees = Employee.query.filter_by(branch_id=branch_id).all()
    result = [{"id": e.employee_id, "name": e.name, "role": e.role}
              for e in employees]
    return jsonify(result), 200


@app.route('/employees', methods=['POST'])
def add_employee():
    """Records new staff (No login created)."""
    data = request.get_json()
    new_emp = Employee(
        branch_id=data['branch_id'],
        name=data['name'],
        role=data['role']
    )
    db.session.add(new_emp)
    db.session.commit()
    return jsonify({"message": "Employee recorded!"}), 201


if __name__ == "__main__":
    app.run(debug=True)
