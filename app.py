#DRAFT TEMPLATE from 10.3 flask activities EXAMPLES

#LEAVE THIS IN HERE import Flask
from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
import numpy as np

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

app.config["MONGO_URI"] = "mongodb://localhost:27017/green_spaces_and_health"

mongo = PyMongo(app)

#Define static routes. Define what to do when a user hits the index route
#################################################
# Flask Routes
#################################################
#each page of website needs its own app.route
# Add function below it. 
@app.route("/")
def welcome():
    return (
            "Hello World"
        )
     #return render_template('index.html')

# Route to get data from MongoDB
#################################################
# Database Setup
#################################################

@app.route("/mongo")
def readMongo():
    data = mongo.db.data.find({}, {'_id': 0, 'city': 1, 'state': 1, 'park_acres': 1,
                                            'percent_of_city_area': 1, 'dv_data_value': 1, 'ob_data_value': 1, 
                                            'mh_data_value': 1})
    result = []
    for x in data:
        result.append(x)
    print(jsonify(result))
    return jsonify(result)

# First visualization page - map
@app.route("/map")
def map():
    return render_template('map.html')

# Second visualization page - bubble chart
@app.route("/bar_chart")
def bar_chart():
    city_data = mongo.db.data.find({}, {'_id': 0, 'cities': 1, 'state': 1, 'park_acres':1})
    result = city_data
    return render_template('bar_chart.html', result=result)

# Third visualization page - pie charts
@app.route("/bubble_chart")
def bubble_chart():
    bub_data = mongo.db.data.find(
        {}, {'_id': 0, 'cities': 1, 'state': 1, 'ob_data_value': 1})
    result = bub_data
    return render_template('bubble_chart.html', result=result)

# @app.route("/about")
# def about():

# @app.route("/api/v1.0/names")
# def names():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of all passenger names"""
#     # Query all passengers
#     results = session.query(Passenger.name).all()

#     session.close()

#     # Convert list of tuples into normal list
#     all_names = list(np.ravel(results))

#     return jsonify(all_names)
# #or
# @app.route("/about")
# def about():
#     name = "Peleke"
#     location = "Tien Shan"

#     return f"My name is {name}, and I live in {location}."
# # or
# @app.route("/api/v1.0/justice-league/<real_name>")
# def justice_league_character(real_name):
#     """Fetch the Justice League character whose real_name matches
#        the path variable supplied by the user, or a 404 if not."""

#     canonicalized = real_name.replace(" ", "").lower()
#     for character in justice_league_members:
#         search_term = character["real_name"].replace(" ", "").lower()

#         if search_term == canonicalized:
#             return jsonify(character)

#     return jsonify({"error": f"Character with real_name {real_name} not found."}), 404

# @app.route("/api/v1.0/justice-league/superhero/<superhero>")
# def justice_league_by_superhero__name(superhero):
#     """Fetch the Justice League character whose superhero matches
#        the path variable supplied by the user, or a 404 if not."""

#     canonicalized = superhero.replace(" ", "").lower()
#     for character in justice_league_members:
#         search_term = character["superhero"].replace(" ", "").lower()

#         if search_term == canonicalized:
#             return jsonify(character)

#     return jsonify({"error": "Character not found."}), 404

# @app.route("/api/v1.0/passengers")
# def passengers():
#     # Create our session (link) from Python to the DB
#     session = Session(engine)

#     """Return a list of passenger data including the name, age, and sex of each passenger"""
#     # Query all passengers
#     results = session.query(Passenger.name, Passenger.age, Passenger.sex).all()

#     session.close()

#     # Create a dictionary from the row data and append to a list of all_passengers
#     all_passengers = []
#     for name, age, sex in results:
#         passenger_dict = {}
#         passenger_dict["name"] = name
#         passenger_dict["age"] = age
#         passenger_dict["sex"] = sex
#         all_passengers.append(passenger_dict)

#     return jsonify(all_passengers)


# @app.route("/contact")
# def contact():
#     email = "peleke@example.com"

#     return f"Questions? Comments? Complaints? Shoot an email to {email}."

# # 4. Define what to do when a user hits the /about route.  print only appears for us in the termina, the return appears for the user.
# @app.route("/about")
# def about():
#     print("Server received request for 'About' page...")
#     return "Welcome to my 'About' page!"

# @app.route('/data')
# def data():
#     shootingData = mongo.db.PoliceShootingData.find({}, {'_id': False})
#     result = shootingData
#     return render_template('data.html', result=result)

## LEAVE THIS IN HERE this has to be the very last 2 lines
# End Flask 
if __name__ == "__main__":
    app.run(debug=True)

