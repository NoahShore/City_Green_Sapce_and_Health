CREATE TABLE mental_health (
	city VARCHAR(100) NOT NULL,
	state VARCHAR(5) NOT NULL,
	mh_data_value NUMERIC NOT NULL
);

CREATE TABLE obesity (
	city VARCHAR(100) NOT NULL,
	state VARCHAR(5) NOT NULL,
	ob_data_value NUMERIC NOT NULL
);

CREATE TABLE dr_visits (
	city VARCHAR(100) NOT NULL,
	state VARCHAR(5) NOT NULL,
	dv_data_value NUMERIC NOT NULL
);

CREATE TABLE park_data (
	city VARCHAR(100) NOT NULL,
	state VARCHAR(5) NOT NULL,
	park_acres INT NOT NULL,
	percent_of_city_area INT NOT NULL
);

SELECT pd.city, pd.state, dv.city, dv.state, pd.park_acres
FROM park_data pd
LEFT JOIN dr_visits dv on pd.city = dv.city
	AND pd.state = dv.state
ORDER BY pd.city;

CREATE TABLE pd_dv_table AS
	SELECT pd.city, pd.state, pd.park_acres, pd.percent_of_city_area, dv.dv_data_value
	FROM park_data pd
	LEFT JOIN dr_visits dv on pd.city = dv.city	AND pd.state = dv.state
	ORDER BY pd.city;

DELETE FROM pd_dv_table 
WHERE dv_data_value IS NULL;

CREATE TABLE mh_ob_table AS
	SELECT mh.city, mh.state, ob.ob_data_value, mh.mh_data_value
	FROM mental_health mh
	LEFT JOIN obesity ob on mh.city = ob.city	AND mh.state = ob.state
	ORDER BY mh.city;

CREATE TABLE master_table AS
	SELECT pdt.city, pdt.state, pdt.park_acres, pdt.percent_of_city_area, pdt.dv_data_value, mot.ob_data_value, mot.mh_data_value
	FROM pd_dv_table pdt
	LEFT JOIN mh_ob_table mot on pdt.city = mot.city	AND pdt.state = mot.state
	ORDER BY pdt.city;
	
DELETE FROM master_table 
WHERE COALESCE (dv_data_value, ob_data_value, mh_data_value ) IS NULL;

SELECT * FROM master_table;