# City Green Space and Health                     
    BootCamp: Data Visualization and Data Analytics Course Project 3, Group 4 
    Project Group Members: Gabriela D. Salazar, Kent Andrews, Noah Shore, Naseema Omer 

# Website
Interactive Python powered Flask API website created to display our data and the visualizations using HTML, CSS, JavaScript, and Python. 
    Python is used to build the Flask app that supports the website and interacts with the MongoDB database on the user's behalf, 
    HTML is used to create the basic structure of the webpages, and 
    JavaScript is used to build the visualizations and insert them into the pages. 
    Bootstrap and CSS used to style the pages.

Navigate links on website to visit pages: Home, Bar Chart, interactive Map and Scatter Plot. 
Click on a city in the map to view more information. Click on the scatter plot to view health values.  

To access the website, see the TECHNICAL DETAILS below.
  
# Project Overview / Story
## Project Description
    Studied year 2017 data:
        Top 100 city parks data from the Trust for Public (TPL) Land, and related it to 
        Health data on populations in those cities obtained from the Center of Disease Control and Prevention (CDC). 
            Health data for adults aged 18 and over for:
            1. Obesity,
            2. Mental Health (those reported as unwell for a minimum of 14 days), and 
            3. Visits to Doctor for Routine Check-ups. 

    Created an interactive Flask website with visual representations of our data findings. 
        1. Map of the 95 cities with acerage of city parks
        2. Bar Charts showing the Top 10 cities and their health values: Obesity, Mental Health, Dr. Visits for routine check-ups, city park acerage.  
        3. Scatter Plots for Health Values: Obesity, Mental Health, Dr. Visits   

## Hypothesis: Cities ranking higher in city green spaces have a
    1.	lower obesity rate, 
    2.	lower mental health conditions, and 
    3.	higher adherence to regular health check-ups.         

## Assumptions
    Healthier populations use the city parks more perhaps due to convenience, work schedules, lifestyles, safer environments, and their ages.
    We did not examine the coorelation between the number of city parks and the size or population of the city. 
    We do not know the number of people who actually visit(ed) the city parks. 

## [Visualizations](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/images)
    Pictures located in the 'images' folder. 
<img src="map.png" alt="Cities Map" width="400" height="200">
<img src="scatter.plot.png" alt="Health Values by Cities" width="11400" height="300">
<img src="parks_bar_chart.png" alt="Top Ten Park Acreages by City" width="11400" height="150">
<img src="ob_bar_chart.png" alt="Top Ten Cities with Highest Obesity Prevalence by City" width="11400" height="150">
<img src="mh_bar_chart.png" alt="Top Ten Cities with Highest Poor Mental Health Prevalence by City" width="11400" height="150">
<img src="dv_bar_chart.png" alt="Top Ten Cities with Highest Routine Dr. Visits Prevalence by City" width="11400" height="150">

## Conclusion
    It appears that there is little to no correlation between the acreage of city parks and the overall health of populations.

## Action Items 
    Visit green spaces more often for various activities: Walks, bike rides, lunches / picnics, reading, meditations, etc. 

    Visit your care provider for wellness and health routine check-ups.

    Businesses may implement more wellness or within their wellness / incentive program offerings to encourage employees/families to enjoy green spaces.

## Next Steps

    City or State Parks could develop apps for personal tracking of park visits to encourage more people to make the effort and track their activities (fitness measures) specifically completed on park grounds.  

    Parks could gather counts of active app users to leverage getting more funding/grants for parks, and educational, wellness programs in the parks. 

    Further research / analysis is needed on the density of the city compared to the number of city parks, counts of visits to the park, geographical locations income level of neighborhoods,

# Technical Details 
    The aim of this project is to combine the skills acquired in different programming languages and storytelling to create an interactive dashboard. The dashboard includes different visualizations representing the data gathered, cleaned, and analyzed to illustrate the impacts of health as it relates to available and accessible outdoor green spaces.

## Programs Used
    Apexchart 
    CSS 
    D3 JSON 
    FLASK API Application 
    HTML
    JavaScript
    Leaflet
    MongoDB
    Multiple user-driven interactions: zoom feature are included in the dashboard
    Pandas
    Plotly
    Python, Jupyter Notebook
    SQLAlchemy was used to clean the datasets

## Data Directories
    Main Directory: ['City_Green_Space_and_Health/](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main)   
    Key Contents: 
        [a500_cities_data](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/a500_cities_data)
        [app.py](https://github.com/NoahShore/City_Green_Space_and_Health/blob/main/app.py)
        [city_park_data](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/city_park_data)
        [csv_outputs](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/csv_outputs)
        [Data: ](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/Data)
                mongo_setup.ipynb, 500_cities_data_sort.ipynb, city_park_data_sort.ipynb, coords_cleaning.ipynb
        [images:](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/images)
        [master_table.csv](https://github.com/NoahShore/City_Green_Space_and_Health/blob/main/master_table.csv)
        [master_table_and_coords.csv](https://github.com/NoahShore/City_Green_Space_and_Health/blob/main/master_table_and_coords.csv)
        [Presentation slides](https://github.com/NoahShore/City_Green_Space_and_Health/blob/main/Presentation%20Slides.pdf)
        [README](https://github.com/NoahShore/City_Green_Space_and_Health/blob/main/README.md)
        [SQL_schema](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/SQL-schema)
        [static: /css](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/static/css) mapstyle.css
        [static: /js](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/static/js) bar_chart.js, map.js, scatter_plot.js
        [templates:](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/templates) 
                html files: home.html, bar_chart.html, scatter_plot.html, map.html

## Datasets / Source
1.	TPL public data 
    [Green Spaces (City Parks):](https://www.tpl.org/park-data-downloads)
    [City Parks Data for the year 2017:](https://parkserve.tpl.org/downloads/historic/2017_ParkScoreRank.pdf)
    The parks data downloadable zip file contains Excel sheets with the acreage data that we will be using.
    [State data for each city in the City Parks:](https://www.tpl.org/2023-city-park-facts) This file has the City and State data.  
    The State data from this file was added to the Cities Acreage Data for our analysis. 

2. CDC public data 
    [Doctor Visits for routine checkup:](https://data.cdc.gov/500-Cities-Places/500-Cities-Visits-to-doctor-for-routine-checkup-wi/2q6t-jyye)
    [Obesity:](https://data.cdc.gov/500-Cities-Places/500-Cities-Obesity-among-adults-aged-18-years/bjvu-3y7d)
    [Mental Health:](https://data.cdc.gov/500-Cities-Places/500-Cities-Mental-health-not-good-for-14-days-amon/i2ek-k3pa)

3. [Coordinates of the City,State from:](https://simplemaps.com/data/us-cities)

## Data Limitations: 
    Health Values and Park Score provided in the data were used. 
    The actual city population and city size was not used. 

## Process and Analysis 
### Extraction, Transformation, and Loading 
    Extraction: Pandas to access and read the raw data from the CSV file. Raw Source Data files are located in:
         [a500_cities_data](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/a500_cities_data), 
         [city_park_data](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/city_park_data), 
         [csv_outputs](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/csv_outputs). 

    Transformation: Data cleansing: cleaned the data using Pandas in a Jupyter Notebook. Retained needed data from source data. 
        Cleaned data files located in:
            [Data directory:](https://github.com/NoahShore/City_Green_Space_and_Health/tree/main/Data) 
                ['500_cities_data_sort.ipynb'](https://github.com/NoahShore/City_Green_Space_and_Health/blob/main/Data/500_cities_data_sort.ipynb), 
                ['city_park_data_sort.ipynb'](https://github.com/NoahShore/City_Green_Space_and_Health/blob/main/Data/city_park_data_sort.ipynb), and  
                ['coords_cleaning.ipynb'](https://github.com/NoahShore/City_Green_Space_and_Health/blob/main/Data/coords_cleaning.ipynb). 
            ['master_table.csv'](https://github.com/NoahShore/City_Green_Space_and_Health/blob/main/master_table.csv), and 
            ['master_table_and_coords.csv'](https://github.com/NoahShore/City_Green_Space_and_Health/blob/main/master_table_and_coords.csv) 

    Loading: After the data was cleaned and transformed, it was loaded into MongoDB using Pymongo. Data joins using City and State Keys.
        Database setup file: ['Mongo_setup.ipynb'](https://github.com/NoahShore/City_Green_Space_and_Health/blob/main/Data/mongo_setup.ipynb). 

### Instructions to recreate the results
    Before running the Jupyter Notebook files, ensure that your environment can use the following Python packages:
    Flask, 
    Pandas, 
    requests, and 
    Pymongo. 
    You must also have MongoDB installed on your computer to proceed.
    Clone the repo.
    Ensure that your environment is compatible with the dependencies specified in the first code cell of the Juptyer Notebook.
    Run the cells of the Jupyter Notebook, in order. This will import the raw data, refine and clean it, and create and populate the database in MongoDB.
    Close the Jupyter Notebook, and end the Jupyter Notebook session.
    On the command line, open app.py using Python.
    Open a new tab or window in Google Chrome, and navigate to the address specified in the terminal window (typically, this is 127.0.0.1:5000). This should open the Flask website on the index page.
    Use the navigation bar and links to visit the different pages of the website.

## To access the Flask API Website
    1. Find 'mongo_setup.ipynb' code file in the 'Data' folder.
    2. Run the mongo_setup.ipynb code file.
    3. Run the 'app.py' code file located in the main directory 'City_Green_Space_and_Health' to get to the web page.
    4. Enjoy and Thank you for visiting our web page. 
    
    Note: Programs needed for this: Flask Application, Flask-PyMongo, Python, Jupyter Notebook.  
          
    CAUTION: RUN ONCE ONLY the mongo_setup code file to avoid data reloading and resulting in duplicates. To delete preiously loaded data from the mongo_setup.ipynb database, run " x = db.green_spaces_and_health3.delete_many({})   print(x.deleted_count, "docs deleted")  "

# Acknowledgements: 
Instructor: Hunter Hollis, TAs: Sam Espe and Randy Sendek, and Tutors for their guidance on this project.