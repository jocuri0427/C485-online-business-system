from flask import Flask, jsonify
from flask_cors import CORS
from database import db
from controllers.inventory_controller import inventory_bp
from controllers.branch_controller import branch_bp
from controllers.employee_controller import employee_bp

app = Flask(__name__)
CORS(app)

# sql config
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///business_data.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db to app
db.init_app(app)

# register blueprints
app.register_blueprint(inventory_bp)
app.register_blueprint(branch_bp)
app.register_blueprint(employee_bp)

# if tabbles DNE, create them
with app.app_context():
    # Import all models to ensure SQLAlchemy knows about them before create_all
    import models.business
    import models.branch
    import models.employee
    import models.inventory
    
    db.create_all()

if __name__ == "__main__":
    app.run(debug=True)


##from flask_sqlalchemy import SQLAlchemy

##app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:admin@localhost/business_system'
##app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

##db = SQLAlchemy(app)    
## name of application : Businexus