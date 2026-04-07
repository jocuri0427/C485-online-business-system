from database import db
from models.branch import Branch

def get_all_branches():
    branches = Branch.query.all()
    return [branch.to_dict() for branch in branches]

def add_branch(data):
    branch = Branch(
        branch_id=data.get("id"),
        branch_street=data["branch_street"],
        branch_city=data["branch_city"],
        branch_zipcode=data["branch_zipcode"],
        branch_state=data["branch_state"],
        revenue=data["revenue"],
        number_of_employees=data["number_of_employees"]
    )
    db.session.add(branch)
    db.session.commit()
    return branch.to_dict()

def delete_branch(branch_id):
    branch = Branch.query.get(branch_id)
    if branch:
        db.session.delete(branch)
        db.session.commit()