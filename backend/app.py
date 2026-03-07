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


if __name__ == "__main__":
    app.run(debug=True)
