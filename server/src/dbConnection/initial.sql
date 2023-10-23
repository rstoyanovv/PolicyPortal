CREATE TABLE policyportal.users 
(   id SERIAL PRIMARY KEY, 
    username VARCHAR NOT NULL, 
    email VARCHAR NOT NULL UNIQUE, 
    password VARCHAR NOT NULL 
);

CREATE TABLE policyportal.articles 
(
    id SERIAL PRIMARY KEY,
    upload_by SERIAL NOT NULL,
    title VARCHAR NOT NULL,
    article TEXT NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    status VARCHAR NOT NULL,
    CONSTRAINT articles_upload_by_fk FOREIGN KEY (upload_by) REFERENCES policyportal.users(id)
);

CREATE TABLE policyportal.comments 
(
    id SERIAL PRIMARY KEY,
    upload_by SERIAL NOT NULL,
    for_article SERIAL NOT NULL,
    comment VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITHOUT TIME ZONE DEFAULT NOW(),
    CONSTRAINT comments_upload_by_fk FOREIGN KEY (upload_by) REFERENCES policyportal.users(id),
    CONSTRAINT comments_for_article_fk FOREIGN KEY (for_article) REFERENCES policyportal.articles(id)
);

CREATE TABLE policyportal.admins
(
    id SERIAL PRIMARY KEY,
    username VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    password VARCHAR NOT NULL
);