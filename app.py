#DRAFT TEMPLATE from 10.3 flask activities EXAMPLES

# 1. LEAVE THIS IN HERE import Flask
from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo
# LEAVE IN HERE FOR NOW, WE MAY NEED SOME...or more applicable imports
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

# Create an app, being sure to pass __name__
#################################################
# Flask Setup
#################################################
#LEAVE THIS IN HERE  SHOULD BE FIRST. 
app = Flask(__name__)

mongo = PyMongo(app, uri='mongodb://localhost:27017/USPoliceShootingData')

#################################################
# Database Setup
#################################################
#LEAVE THIS IN HERE
engine = create_engine("path to the .sqlite") ## needs to be .sqlite file name. 

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
Cities = Base.classes.cities



# Create a dictionary to hold a key, value pair.
city_obesity_dict = {"": ""}
city_mh_dict = {}
city_drvisit = {}

# 3. Define static routes. Define what to do when a user hits the index route
#################################################
# Flask Routes
#################################################
#each page of website needs its own app.route
#LEAVE THIS ROUTE AS IS. IT DEFINES THE HOMEPAGE. 
# Add function below it. 
@app.route("/")
def homepage():
    return render_template('index.html')

# Route to get data from MongoDB
@app.route("/mongo")
def readMongo():
    data = mongo.db.PoliceShootingData.find({}, {'_id': 0, 'latitude': 1, 'longitude': 1, 'is_geocoding_exact': 1,
                                            'name': 1, 'date': 1, 'age': 1, 'sex': 1, 'ethnicity': 1, 'armed': 1, 'city': 1, 'state': 1})
    result = []
    for item in data:
        result.append(item)
    print(jsonify(result))
    return jsonify(result)

def index():
    return "Welcome to Green Space and Health"
# or
def welcome():
    """List all available api routes."""
    return (
         f"Welcome to Green Space and Health<br/>"
        f"Available Routes:<br/>"
        f"/api/v1.0/justice-league<br/>"
        f"/api/v1.0/justice-league/superhero/batman<br/>"
        f"/api/v1.0/justice-league/real_name/bruce%20wayne"
    )

# First visualization page - map
@app.route("/map")
def map():
    return render_template('map.html')

# Second visualization page - bubble chart
@app.route("/bar_chart")
def bubble_chart():
    shootingData = mongo.db.PoliceShootingData.find({}, {'_id': 0, 'armed': 1})
    result = shootingData
    return render_template('bar_chart.html', result=result)

# Third visualization page - pie charts
@app.route("/pie_charts")
def pie_charts():
    shootingData = mongo.db.PoliceShootingData.find(
        {}, {'_id': 0, 'age': 1, 'ethnicity': 1, 'sex': 1})
    result = shootingData
    return render_template('pie_charts.html', result=result)

# @app.route("/about")
# def about():

@app.route("/api/v1.0/names")
def names():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of all passenger names"""
    # Query all passengers
    results = session.query(Passenger.name).all()

    session.close()

    # Convert list of tuples into normal list
    all_names = list(np.ravel(results))

    return jsonify(all_names)
#or
@app.route("/about")
def about():
    name = "Peleke"
    location = "Tien Shan"

    return f"My name is {name}, and I live in {location}."
# or
@app.route("/api/v1.0/justice-league/<real_name>")
def justice_league_character(real_name):
    """Fetch the Justice League character whose real_name matches
       the path variable supplied by the user, or a 404 if not."""

    canonicalized = real_name.replace(" ", "").lower()
    for character in justice_league_members:
        search_term = character["real_name"].replace(" ", "").lower()

        if search_term == canonicalized:
            return jsonify(character)

    return jsonify({"error": f"Character with real_name {real_name} not found."}), 404

@app.route("/api/v1.0/justice-league/superhero/<superhero>")
def justice_league_by_superhero__name(superhero):
    """Fetch the Justice League character whose superhero matches
       the path variable supplied by the user, or a 404 if not."""

    canonicalized = superhero.replace(" ", "").lower()
    for character in justice_league_members:
        search_term = character["superhero"].replace(" ", "").lower()

        if search_term == canonicalized:
            return jsonify(character)

    return jsonify({"error": "Character not found."}), 404

@app.route("/api/v1.0/passengers")
def passengers():
    # Create our session (link) from Python to the DB
    session = Session(engine)

    """Return a list of passenger data including the name, age, and sex of each passenger"""
    # Query all passengers
    results = session.query(Passenger.name, Passenger.age, Passenger.sex).all()

    session.close()

    # Create a dictionary from the row data and append to a list of all_passengers
    all_passengers = []
    for name, age, sex in results:
        passenger_dict = {}
        passenger_dict["name"] = name
        passenger_dict["age"] = age
        passenger_dict["sex"] = sex
        all_passengers.append(passenger_dict)

    return jsonify(all_passengers)


@app.route("/contact")
def contact():
    email = "peleke@example.com"

    return f"Questions? Comments? Complaints? Shoot an email to {email}."

# 4. Define what to do when a user hits the /about route.  print only appears for us in the termina, the return appears for the user.
@app.route("/about")
def about():
    print("Server received request for 'About' page...")
    return "Welcome to my 'About' page!"

@app.route('/data')
def data():
    shootingData = mongo.db.PoliceShootingData.find({}, {'_id': False})
    result = shootingData
    return render_template('data.html', result=result)

## LEAVE THIS IN HERE this has to be the very last 2 lines
# End Flask 
if __name__ == "__main__":
    app.run(debug=True)

