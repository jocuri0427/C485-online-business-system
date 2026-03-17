from flask import Blueprint, request, jsonify
from services.inventory_service import get_all_inventory, get_inventory_by_branch, add_inventory, update_stock

inventory_bp = Blueprint("inventory", __name__)

@inventory_bp.route("/inventory", methods=["GET"])
def get_inventory():
    return jsonify(get_all_inventory())

@inventory_bp.route("/inventory/<int:branch_id>", methods=["GET"])
def get_inventory_for_branch(branch_id):
    return jsonify(get_inventory_by_branch(branch_id))

@inventory_bp.route("/inventory", methods=["POST"])
def create_inventory():
    data = request.json
    item = add_inventory(data)
    return jsonify({"message": "Item added!", "item": item}), 201

@inventory_bp.route('/inventory/<int:item_id>', methods=['PUT'])
def update_inventory_stock(item_id):
    data = request.json
    item = update_stock(item_id, data.get('quantity'))
    if not item:
        return jsonify({"error": "Item not found"}), 404
    return jsonify({"message": "Stock updated!", "item": item}), 200