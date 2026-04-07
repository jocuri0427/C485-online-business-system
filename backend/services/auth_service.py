from storage.json_storage import read_data, write_data
from models.user import User

FILE = "user.json"

def get_all_users():
    return read_data(FILE)

def add_user(data):
    users = read_data(FILE)
    new_id = len(users) + 1
    user = User(
        data["username"],
        data["password"],
        data["confirmPassword"]
    )
    users.append(user.to_dict())
    write_data(FILE, users)
    return user.to_dict()