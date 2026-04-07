from database import db
from models.user import User

def get_all_users():
    users = User.query.all()
    return [user.to_dict() for user in users]

def add_user(data):
    user = User(
        username=data["username"],
        password=data["password"]
    )
    db.session.add(user)
    db.session.commit()
    return user.to_dict()