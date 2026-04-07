from flask import Blueprint, request, jsonify
from services.inventory_service import get_all_inventory, add_inventory, delete_inventory

inventory_bp = Blueprint("inventory", __name__)


@inventory_bp.route("/inventory", methods=["GET"])
def get_inventory():
    return jsonify(get_all_inventory())


@inventory_bp.route("/inventory", methods=["POST"])
def create_inventory():
    data = request.json
    item = add_inventory(data)
    return jsonify(item)

@inventory_bp.route("/inventory/<int:inventory_id>", methods=["DELETE"])
def remove_inventory(inventory_id):
    delete_inventory(inventory_id)
    return jsonify({"message": "Inventory item deleted successfully"})