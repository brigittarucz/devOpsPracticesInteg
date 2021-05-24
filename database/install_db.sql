CREATE DATABASE IF NOT EXISTS techevents_users;

-- CREATE USER 'my-app-user'@'%' IDENTIFIED BY 'my-app-password';
GRANT ALL ON *.* TO 'root'@'%';

CREATE TABLE IF NOT EXISTS techevents_users.users(
    id VARCHAR(36) NOT NULL UNIQUE,
    email VARCHAR(45) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    proffesion VARCHAR(45) NOT NULL,
    experience INT,
    interests VARCHAR(255) DEFAULT NULL,
    events LONGTEXT,
    PRIMARY KEY (id)
);

INSERT IGNORE INTO techevents_users.users(id, email, password, proffesion, experience, interests, events)
VALUES (1, 'myemail@yahoo.com', 'password', 'Software Engineer', 1, 'Frontend Development', '');

CREATE TABLE IF NOT EXISTS techevents_users.events(
    id VARCHAR(36) NOT NULL UNIQUE,
    title VARCHAR(255) NOT NULL,
    date VARCHAR(45) NOT NULL,
    location VARCHAR(45) NOT NULL,
    topics LONGTEXT NOT NULL,
    proffessional_target LONGTEXT NOT NULL,
    topics_difficulty INT NOT NULL,
    event_link LONGTEXT NOT NULL,
    attendance_price VARCHAR(10) NOT NULL,
    PRIMARY KEY (id)
);

INSERT IGNORE INTO techevents_users.events VALUES ('3c1246a5-fee9-485d-adb3-24f029c528b4','Deep Dive Design Thinking Workshop','06.10.2020-07.10.2020','Catacombs of Zoom','innovation, design thinking, business models, visualization and mapping for solution creation','entrepreneur, founder, designer, freelancer',1,'https://www.eventbrite.com/e/online-2-day-deep-dive-in-design-thinking-mindshoptm-tickets-121347161627?aff=ebdssbdestsearch','F540'),('5d8ade45-61cb-4cde-8a64-838d4a23541e','Web Unleashed','05.10.2020-07.10.2020','Virtual','new technologies, algorithms, frontend development','developer, business',1,'https://fitc.ca/event/webu20/','F310'),('98ee67f1-a2d8-4872-b87b-e6b91f1b7d1a','ReactiveConf','08.03.2021','Prague','react, reason, GraphQL, vue, security','developer, programmer',2,'https://reactiveconf.com/','NA'),('af2fb58d-594c-4f72-9536-5951a150f8bf','Web Summit','02.12.2020-04.12.2020','Lisbon','marketing and media, AI and machine learning, data science, software development, mobile development, privacy and security, business development, commerce, gaming and VR','developer, entrepreneur, investor, business, data scientist, programmer',5,'https://websummit.com/','F885'),('e6880fab-0129-4faf-bf5a-00d91a9d5d61','RTE2020','13.10.2020-14.10.2020','Virtual','product experience design, monetization, trending in machine learning, trending in VR/AR, ideation hackaton, startup 101','developer, entrepreneur, founder, designer',4,'https://www.runtheworld.today/app/c/rte2020','0');