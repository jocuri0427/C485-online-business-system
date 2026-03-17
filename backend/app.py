from unittest import result
from flask import Flask, request, jsonify
from flask_cors import CORS
from database import db
from controllers.inventory_controller import inventory_bp
import os

app = Flask(__name__)
CORS(app)

# sql config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///business_data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db to app
db.init_app(app)

# register blueprints
app.register_blueprint(inventory_bp)

# if tabbles DNE, create them
with app.app_context():
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)


##from flask_sqlalchemy import SQLAlchemy

##app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:admin@localhost/business_system'
##app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

##db = SQLAlchemy(app)    
## name of application : Businexus