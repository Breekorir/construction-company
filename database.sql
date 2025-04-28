-- Create Database
CREATE DATABASE construction_db;
USE construction_db;

-- Table for contact form submissions
CREATE TABLE contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Table for services
CREATE TABLE services (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

-- Table for unemployment statistics
CREATE TABLE unemployment_stats (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category VARCHAR(255) NOT NULL, -- e.g., General, Youth
    rate DECIMAL(5,2) NOT NULL, -- e.g., 7.30, 17.20
    year INT NOT NULL, -- e.g., 2023, 2024
    description TEXT
);

-- Insert sample data into contacts
INSERT INTO contacts (name, email, message) VALUES
('Jean Dupont', 'jean.dupont@example.com', 'Intéressé par un projet de maison individuelle.'),
('Marie Martin', 'marie.martin@example.com', 'Demande de devis pour une rénovation.');

-- Insert sample data into services
INSERT INTO services (title, description) VALUES
('Residential Construction', 'Custom homes built with precision and care.'),
('Commercial Projects', 'Offices and retail spaces designed for success.'),
('Renovations', 'Transform your space with modern upgrades.');

-- Insert sample data into unemployment_stats
INSERT INTO unemployment_stats (category, rate, year, description) VALUES
('General', 7.30, 2024, 'Taux de chômage de la population active au T4 2024.'),
('Youth', 17.20, 2023, 'Taux de chômage des jeunes (15-24 ans) en moyenne en 2023.');