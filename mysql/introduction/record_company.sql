CREATE DATABASE test;

CREATE TABLE test (
    test_column INT
);

ALTER TABLE test
ADD another_column VARCHAR(255);

DROP TABLE test;

-- CREATE 
CREATE DATABASE record_company;

USE record_company; 

CREATE TABLE bands (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE albums (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    release_year INT,
    band_id INT NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (band_id)
        REFERENCES bands (id)
);

-- INSERT 
INSERT INTO bands (name)
VALUES ("Iron maiden");

INSERT INTO bands (name)
VALUES ("Deuce"), ("Avenged sevenfold"), ("Ankor");

INSERT INTO albums (name,release_year,band_id)
VALUES ("The Number of the Beasts",1985,1),
	   ("Power slave",1984,1),
       ("Nightmare",2018,2),
       ("Nightmare",2010,3),
       ("Test album",NULL,3);
       
-- SELECT 
SELECT * FROM bands;

SELECT * FROM bands LIMIT 2;

SELECT name FROM bands;

SELECT id AS 'ID', name AS 'NAME' FROM bands; 
    
SELECT * FROM bands ORDER BY name; -- ascending order by default
SELECT * FROM bands ORDER BY name ASC; 
SELECT * FROM bands ORDER BY name DESC;

SELECT * FROM albums;
SELECT name FROM albums;

SELECT DISTINCT name FROM albums;

-- UPDATE
UPDATE albums 
SET release_year = 1982; -- Will update all rows

UPDATE albums 
SET release_year = 1982
WHERE id = 1; 

-- SELECT with filter
SELECT * FROM albums k
WHERE release_year < 2000;

SELECT * FROM albums 
WHERE name LIKE "%er%"; -- select all the data where name has "er" in it. "%" is a wild card.

SELECT * FROM albums
WHERE name LIKE "%er%" OR band_id = 2;

SELECT * FROM albums 
WHERE release_year = 1984 AND band_id = 1;

SELECT * FROM albums
WHERE release_year BETWEEN 2000 AND 2018;

SELECT * FROM albums 
WHERE release_year IS NULL;

-- DELETE
DELETE FROM albums; -- Will delete all rows 

DELETE FROM albums
WHERE id = 5;

-- JOIN
SELECT * FROM albums;
SELECT * FROM bands; 

SELECT * FROM bands
JOIN albums ON bands.id = albums.band_id; 

SELECT * FROM bands
INNER JOIN albums ON bands.id = albums.band_id; -- INNER JOIN is same as JOIN. It returns only the data that matches the condition from both sides (left and right)

SELECT * FROM bands 
LEFT JOIN albums ON bands.id = albums.band_id; -- LEFT JOIN returns all the data from the left table even if it doesn't have a corresponding match on the right table.

SELECT * FROM bands
RIGHT JOIN albums ON bands.id = albums.band_id; -- Even if there is an album that is not associated with a band, it will be returned

SELECT * FROM albums
RIGHT JOIN bands ON albums.band_id = bands.id;

-- Aggregate functions

-- AVG (average of a selected column)
SELECT AVG(release_year) FROM albums; 

-- SUM
SELECT SUM(release_year) FROM albums;

-- ALIAS
SELECT 
    a.id, a.name AS album_name
FROM
    albums AS a;
    
-- COUNT, GROUP BY
SELECT band_id,COUNT(band_id) FROM albums
GROUP BY band_id; -- To get how many albums each band has

-- ALIAS, JOIN, COUNT, GROUP BY
SELECT 
    b.name AS band_name, COUNT(a.band_id) AS num_of_albums
FROM
    bands AS b
        LEFT JOIN
    albums AS a ON b.id = a.band_id
GROUP BY b.id;

-- Filter by Aggregate
SELECT 
    b.name AS band_name, COUNT(a.band_id) AS num_of_albums
FROM
    bands AS b
        LEFT JOIN
    albums AS a ON b.id = a.band_id
WHERE
    b.name = 'Deuce' -- WHERE can only be used before GROUP BY
GROUP BY b.id
HAVING num_of_albums >= 1; -- similar to WHERE. WHERE can't be applied on the data after GROUP BY. Hence we use HVAING.

-- exercises : https://github.com/WebDevSimplified/Learn-SQL

