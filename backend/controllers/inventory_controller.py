from flask import Blueprint, request, jsonify
from services.inventory_service import get_all_inventory, add_inventory

inventory_bp = Blueprint("inventory", __name__)


@inventory_bp.route("/inventory", methods=["GET"])
def get_inventory():
    return jsonify(get_all_inventory())


@inventory_bp.route("/inventory", methods=["POST"])
def create_inventory():

    data = request.json

    item = add_inventory(data)

    return jsonify(item)