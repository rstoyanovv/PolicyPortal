CREATE TABLE policyportal.users 
(   id SERIAL PRIMARY KEY, 
    username VARCHAR NOT NULL, 
    email VARCHAR NOT NULL UNIQUE, 
    password VARCHAR NOT NULL );