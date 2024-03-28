CREATE DATABASE quotesdb;

USE quotesdb;

SELECT NOW();

CREATE TABLE authors (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    author VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE quotes (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    quote VARCHAR(255) NOT NULL UNIQUE,
    author_id INT NOT NULL,
    category_id INT NOT NULL,
    FOREIGN KEY (author_id)
        REFERENCES authors (id),
    FOREIGN KEY (category_id)
        REFERENCES categories (id)
);

-- Insert authors
INSERT INTO authors (author) VALUES 
('John Doe'),
('Jane Smith'),
('Alice Johnson'),
('Bob Brown'),
('Emily Davis');

-- Insert categories
INSERT INTO categories (category) VALUES 
('Inspiration'),
('Motivation'),
('Life'),
('Love'),
('Success');

-- Insert quotes
INSERT INTO quotes (quote, author_id, category_id) VALUES 
('Success is not final, failure is not fatal: It is the courage to continue that counts.', 1, 2),
('The only way to do great work is to love what you do.', 2, 1),
('Life is what happens when you''re busy making other plans.', 3, 3),
('The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.', 4, 4),
('Believe you can and you''re halfway there.', 5, 2);


SELECT quotes.id, quotes.quote, authors.author, categories.category FROM quotes 
INNER JOIN authors ON quotes.author_id = authors.id
INNER JOIN categories ON quotes.category_id = categories.id;