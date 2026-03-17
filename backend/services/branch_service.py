from database import db
from models.branch import Branch

def get_all_branches():
    branches = Branch.query.all()
    return [{"id": b.branch_id, "name": b.location_name} for b in branches]
