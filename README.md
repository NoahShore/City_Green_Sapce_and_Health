# City Green Space and Health: Obesity, Metal Health, Dr. visits for routine check-ups                       Updated 10/13/2023
## BootCamp: Data Visualization and Data Analytics Course Project 3, Group 4 

# Webpage Link: 
Interactive Dashboard with User driven dropdown menu selections, and visualizations for the selection. Pop-ups viewable with statistical data for city selected. 

# GitHub Repository: https://github.com/NoahShore/City_Green_Sapce_and_Health 
Find in directory 'City_Green_Space_and_Health/ with:
    Index.html, 
    ReadMe
    Presentation slides
    Sub-directories:
    Resources/ with files: raw and cleaned data, 
    Static/ with code files: data, CSS, JavaScript, ipynb, SQLite, App.py 
    Images/ with pictures 

# Acknowledgements: 
Group 4 Team Members: Gabriela D. Salazar, Kent Andrews, Noah Shore, Naseema Omer 
Bootcamp Course Data Visualization and Data Analytics Instructor: Hunter Hollis, TAs: Sam Espe and Randy Sendek, and Tutors.

## PROJECT OVERVIEW / STORY
### Hypothesis: Cities ranking higher in city green spaces have a lower:
        1.	obesity rate, 
        2.	mental health conditions, and 
        3.	adhere to regular health check-ups. 

### Project Description: 
We studied, for year 2017, the number of parks in a city from the Trust for Public (TPL) Land and related it to the specific Health Conditions'statistics documented based on populations in those cities by the Center of Disease Control and Prevention (CDC).  
Created an interactive User Friendly Dashboard on a Webpage with visual representations of our findings. 
For example User can select a 'city' from the list of cities in the dropdown menu. This will reveal specific information displayed for the city, and display the visual chartings of 
the Park Score Rank, the Obesity Value, Mental Health Value, Dr. visits for Routine CheckUp Value for the selected city. 

Define the CDC 'Value': 
Define the 'Park Score Rank':

Hypothesis: Cities ranking higher in city green spaces have a lower:
1.	obesity rate, 
2.	mental health conditions, and 
3.	adhere to regular health check-ups. 

### Study: 
        Based for Year 2017 data
        Explored 100 USA Cities
        For Health conditions:
            Obesity. Age Group Adults >=18 years
            Mental Health not good for >=14 days. Age Group Adults >=18 years 
            Visits to Doctor for Routine Check-ups.  Age Group Adults >=18 years

### Assumptions:
        Assumptions: Healthier populations use the city parks more perhaps due to conveniance, work schedules, lifestyles, safer environments, their ages, ......
        We did not look at whether the number of city parks was in proportion to the size of the city and its population. 
        We do not know how many people actually visited any of the city parks. 

### Summary: 

### Visualizations. Paste visualizations here ......
brief story of visualization....what the cdc value means, and what does the Park Score Rank mean.

### CONCLUSION:


### NEXT STEPS: 
Visit green spaces more often for various activities: Walks, bike rides, lunches / picnics, reading, meditations, etc. 

Visit your care provider for your wellness and health routine check-ups

Business can implement more wellness or within their wellness / incentive program offerings to encourage employees/families to enjoy green spaces

City or State Parks could develop apps for personal tracking of park visits to encourage more people to make the effort, and track their activities (fitness measures) specifically completed oon park grounds.  

Parks could gather counts of active app users to leverage getting more funding/grants for parks, and educational, wellness programs in the parks. 

Further research / analysis is needed on the density of the city compared to the number of city parks, counts of visits to the park, geographical locations income level of neighbourhoods,


## TECHNICAL DETAILS: 
The aim of this project is to combine the skills acquired in different programming languages and storytelling skills to create an interactive dashboard. The dashboard includes different visualizations representing the data gathered, cleaned, and analyzed to illustrate the impacts of health as it relates to available and accessible outdoor green spaces.

The project is powered by a Python Flask API and includes HTML/CSS, JavaScript, SQL database. 

### Programs Used
    SQLAlchemy was used to clean the datasets
    SQL (Postgres 14) was used to create a database with the cvs files with the data utilized and to show that it ran properly (screenshots attached).
    CSS was used to style our HTML document
    HTML/json was used to create the interactive dashboard and visualizations for the project using d3 and leaftlet
    Python FLASK API
    Multiple user-driven interactions: dropdown menu / filters, zoom feature are included in the dashboard

## Datasets Selected / Source: 
1.	TPL public data 
    Green Spaces (City Parks): https://www.tpl.org/park-data-downloads

    City Parks Data for year 2017: https://parkserve.tpl.org/downloads/historic/2017_ParkScoreRank.pdf

    The parks data downloadable zip file contains excel sheets with the acreage data that we will be using.

    State data for each city in the City Parks: https://www.tpl.org/2023-city-park-facts This file has the City and State data.  
    The State data from this file was added to the Cities Acreage Data for our analysis. 

2. CDC public data 
    Doctor Visits for routine checkup:  https://data.cdc.gov/500-Cities-Places/500-Cities-Visits-to-doctor-for-routine-checkup-wi/2q6t-jyye

    Obesity: https://data.cdc.gov/500-Cities-Places/500-Cities-Obesity-among-adults-aged-18-years/bjvu-3y7d

    Mental Health: https://data.cdc.gov/500-Cities-Places/500-Cities-Mental-health-not-good-for-14-days-amon/i2ek-k3pa


## Data Limitations: 
Rank and Score provided in data was used. The actual population size unknown. 


## ANALYSIS: 
Data cleansing:  Needed data retained from files. 
Database created in SQL Postgres named '
Tables: 
Data Joined using City and State Keys

Codes: 



# References:  
https://www.geeksforgeeks.org/split-a-text-column-into-two-columns-in-pandas-dataframe/

https://saturncloud.io/blog/how-to-remove-commas-from-all-columns-in-pandas-at-once/#:~:text=Now%20that%20we%20know%20which,replace()%20function%20in%20Pandas.&text=In%20this%20code%2C%20we%20loop%20through%20each%20column%20that%20contains,the%20commas%20from%20the%20column
