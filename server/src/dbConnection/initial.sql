CREATE TABLE policyportal.users 
(   id SERIAL PRIMARY KEY, 
    username VARCHAR NOT NULL, 
    email VARCHAR NOT NULL UNIQUE, 
    password VARCHAR NOT NULL 
);

CREATE TABLE policyportal.articles 
(
    id SERIAL PRIMARY KEY,
    upload_by NUMBER NOT NULL,
    title VARCHAR NOT NULL,
    article TEXT NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    status VARCHAR NOT NULL,
    CONSTRAINT articles_upload_by_fk FOREIGN KEY (upload_by) REFERENCES policyportal.users(id)
);    