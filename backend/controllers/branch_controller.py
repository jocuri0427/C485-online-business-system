from flask import Blueprint, jsonify
from services.branch_service import get_all_branches

branch_bp = Blueprint("branches", __name__)

@branch_bp.route("/branches", methods=["GET"])
def get_branches():
    """Gets a list of all store locations."""
    return jsonify(get_all_branches()), 200
