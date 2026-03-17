import json
import os

def read_data(file_name):

    path = os.path.join("data", file_name)

    if not os.path.exists(path):
        return []

    with open(path, "r") as f:
        return json.load(f)


def write_data(file_name, data):

    path = os.path.join("data", file_name)

    with open(path, "w") as f:
        json.dump(data, f, indent=4)