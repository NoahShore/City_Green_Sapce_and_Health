# City Green Space and Health: Obesity, Metal Health, Dr. visits for routine check-ups                      
## BootCamp: Data Visualization and Data Analytics Course Project 3, Group 4 
Project Group 4 Team Members: Gabriela D. Salazar, Kent Andrews, Noah Shore, Naseema Omer 

# GitHub Repository: https://github.com/NoahShore/City_Green_Sapce_and_Health 
Please refer to the TECHNICAL DETAILS below for the listing of the Repository Directory Contents.

# link to Presentation Slides: https://drive.google.com/drive/folders/1O8KciX3Mv4CMJ-GINdosS46Rzd8cVeJ-?usp=sharing


# Website: 
Interactive Python powered FLASK API Website. Navigate links to visit pages: Home, Bar Chart, Map, or Scatter Plot. 
Click on a city in the map to view more information. Click on the scatter plot to view health values.   

To access the website, see the TECHNICAL DETAILS below in 'INSTRUCTIONS TO RECREATE THE RESULTS, and TO ACCESS THE FLASK API WEBSITE.

Flask API website created to display our data and the visualizations thereof using HTML, CSS, JavaScript, and Python. Python is used to build the Flask app that supports the website and interacts with the MongoDB database on the user's behalf, HTML is used to create the basic structure of the webpages, and JavaScript is used to build the visualizations and insert them into the pages. We then used Bootstrap and CSS to style the pages.
  
## PROJECT OVERVIEW / STORY
### Hypothesis: Cities ranking higher in city green spaces have a lower:
        1.	obesity rate, 
        2.	mental health conditions, and 
        3.	Dr Visits for regular health check-ups. 

### Project Description: 
We studied, for the year 2017, the number of parks in a city from the Trust for Public (TPL) Land and related it to the specific Health Conditions statistics documented based on populations in those cities by the Center of Disease Control and Prevention (CDC).  

Created an interactive Flask website with visual representations of our data findings. 
    1. Map of the 95 cities with acerage of city parks
    2. Bar Charts showing the Top 10 cities and their health values: Obesity, Mental Health, Dr. Visits for routine check-ups, city park acerage.  
    3. Scatter Plots for Health Values: Obesity, Mental Health, Dr. Visits   

Hypothesis: Cities ranking higher in city green spaces have a:
1.	lower obesity rate, 
2.	lower mental health conditions, and 
3.	higher adherence to regular health check-ups. 

### Study: 
        Based on Year 2017 data
        Explored 100 USA Cities
        For Health conditions:
            Obesity. Age Group Adults >=18 years
            Mental Health not good for >=14 days. Age Group Adults >=18 years 
            Visits to Doctor for Routine Check-ups.  Age Group Adults >=18 years

### Assumptions:
        Assumptions: Healthier populations use the city parks more perhaps due to convenience, work schedules, lifestyles, safer environments, their ages, ......
        We did not look at whether the number of city parks was in proportion to the size of the city and its population. 
        We do not know how many people actually visited any of the city parks. 

### Visualizations. Paste visualizations here ......
Visualization pictures are located in the 'images' folder. 

### CONCLUSION:
From the visualizations it appears that there is little to no correlation between the acreage of city parks and the overall health of populations

### NEXT STEPS: 
Visit green spaces more often for various activities: Walks, bike rides, lunches / picnics, reading, meditations, etc. 

Visit your care provider for your wellness and health routine check-ups

Businesses can implement more wellness or within their wellness / incentive program offerings to encourage employees/families to enjoy green spaces

City or State Parks could develop apps for personal tracking of park visits to encourage more people to make the effort and track their activities (fitness measures) specifically completed on park grounds.  

Parks could gather counts of active app users to leverage getting more funding/grants for parks, and educational, wellness programs in the parks. 

Further research / analysis is needed on the density of the city compared to the number of city parks, counts of visits to the park, geographical locations income level of neighborhoods,

## TECHNICAL DETAILS: 
The aim of this project is to combine the skills acquired in different programming languages and storytelling skills to create an interactive dashboard. The dashboard includes different visualizations representing the data gathered, cleaned, and analyzed to illustrate the impacts of health as it relates to available and accessible outdoor green spaces.

The project is powered by a Python Flask API and includes HTML/CSS, JavaScript, and SQL database. 

### Programs Used
    SQLAlchemy was used to clean the datasets
    Database = Mongo Db
    JavaScript
    <!-- SQL (Postgres 14) was used to create a database with the cvs files with the data utilized and to show that it ran properly (screenshots attached). -->
    CSS was used to style 
    HTML
    D3 JSON 
    Pandas
    Python, Jupyter Notebook
    Plotly
    Leaflet
    Apexchart (new library for the scatter plot)
    FLASK API Application 
    Multiple user-driven interactions: zoom feature are included in the dashboard

## Data Directories: 
Main Directory name:  'City_Green_Space_and_Health/  key contents: 
        a500_cities_data
        city_park_data
        csv_outputs
        README
        app.py
        Presentation slides
        Data: MongoDb: mongo_setup.ipynb, 500_cities_data_sort.ipynb, city_park_data_sort.ipynb, coords_cleaning.ipynb
        master_table_and_coords.csv
        master_table.json
        SQL_table_schema
        static: /js bar_chart.js, map.js, scatter_plot.js
        static: /css mapstyle.css
        templates: html files: home.html, bar_chart.html, scatter_plot.html, map.html
        images:pictures 

## Datasets Selected / Source: 
1.	TPL public data 
    Green Spaces (City Parks): https://www.tpl.org/park-data-downloads
    City Parks Data for the year 2017: https://parkserve.tpl.org/downloads/historic/2017_ParkScoreRank.pdf
    The parks data downloadable zip file contains Excel sheets with the acreage data that we will be using.
    State data for each city in the City Parks: https://www.tpl.org/2023-city-park-facts This file has the City and State data.  
    The State data from this file was added to the Cities Acreage Data for our analysis. 

2. CDC public data 
    Doctor Visits for routine checkup:  https://data.cdc.gov/500-Cities-Places/500-Cities-Visits-to-doctor-for-routine-checkup-wi/2q6t-jyye
    Obesity: https://data.cdc.gov/500-Cities-Places/500-Cities-Obesity-among-adults-aged-18-years/bjvu-3y7d
    Mental Health: https://data.cdc.gov/500-Cities-Places/500-Cities-Mental-health-not-good-for-14-days-amon/i2ek-k3pa

3. Coordinates of the City,State from: https://simplemaps.com/data/us-cities

## Data Limitations: 
Health Values and Park Score provided in the data were used. The actual population size is unknown. 

## PROCESS & ANALYSIS: 
### Extraction, Transformation, and Loading 
Extraction: Pandas to access and read the raw data from the CSV file. Raw Source Data files are located in 'a500_cities_data', city_park_data, csv_outputs. 

Transformation: Data cleansing: cleaned the data using Pandas in a Jupyter Notebook. Retained needed data from source data. 
Cleaned data files located in the Data directory. '500_cities_data_sort.ipynb', 'city_park_data_sort.ipynb'. coords_cleaning.ipynb. 
Tables: master_table.csv and master_table_and_coords.csv 
Loading: After the data was cleaned and transformed, it was loaded into MongoDB using Pymongo. Data joins using City and State Keys.
'Mongo_setup.ipynb' database setup file. 

## INSTRUCTIONS TO RECREATE THE RESULTS:
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

## TO ACCESS THE FLASK API WEBSITE:
    1. Find in the folder 'Data' the 'mongo_setup.ipynb' code file.
    2. Run the mongo_setup.ipynb code file.
    3. Run the 'app.py' code file located in the main directory 'City_Green_Space_and_Health' to get to the web page.
    4. Enjoy and Thank you for visiting our web page. 
    Note: Programs needed for this: Flask Application, Flask-PyMongo, Python, Jupyter Notebook.  
          ONLY RUN ONCE: The mongo_setup code should only be run one time avoid data reloading and resulting in duplicates. To delete preiously loaded data from the mongo_setup.ipynb database, run " x = db.green_spaces_and_health3.delete_many({})   print(x.deleted_count, "docs deleted")  "

# Acknowledgements: 
Instructor: Hunter Hollis, TAs: Sam Espe and Randy Sendek, and Tutors for their guidance on this project.

# References:  
Colors hex codes: https://www.w3schools.com/colors/colors_picker.asp

https://www.geeksforgeeks.org/split-a-text-column-into-two-columns-in-pandas-dataframe/

https://saturncloud.io/blog/how-to-remove-commas-from-all-columns-in-pandas-at-once/#:~:text=Now%20that%20we%20know%20which,replace()%20function%20in%20Pandas.&text=In%20this%20code%2C%20we%20loop%20through%20each%20column%20that%20contains,the%20commas%20from%20the%20column
