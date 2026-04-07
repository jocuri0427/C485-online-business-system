from storage.json_storage import read_data, write_data
from models.branch import Branch

FILE = "branch.json"

def get_all_branches():
    return read_data(FILE)

def add_branch(data):
    branches = read_data(FILE)
    new_id = len(branches) + 1
    branch = Branch(
        new_id,
        data["branch_street"],
        data["branch_city"],
        data["branch_zipcode"],
        data["branch_state"],
        data["revenue"],
        data["number_of_employees"]
    )
    branches.append(branch.to_dict())
    write_data(FILE, branches)
    return branch.to_dict()

def delete_branch(branch_id):
    branches = read_data(FILE)
    branches = [branch for branch in branches if branch["id"] != branch_id]
    write_data(FILE, branches)