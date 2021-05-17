CREATE DATABASE IF NOT EXISTS techevents_users;

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

INSERT IGNORE INTO techevents_users.users VALUES (1, 'myemail@yahoo.com', 'password', 'Software Engineer', 1, 'Frontend Development', ''),('1c1903d7-e852-4578-8f39-69421a7849fa','brigitt1a121@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('1fbae622-3eba-496e-9b3b-967ca1c82e9b','brigitta1222121@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('265335fa-5c4a-42af-b5af-aac83d4f9a57','brigitta2@yahoo.com','password','frontend',10,'JS,Angular,Node,PHP,SASS','[\"3c1246a5-fee9-485d-adb3-24f029c528b4\",\"af2fb58d-594c-4f72-9536-5951a150f8bf\",\"5d8ade45-61cb-4cde-8a64-838d4a23541e\"]'),('32d148f9-8876-4c35-9af0-8d3000635fea','112br21i2giwq22tta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('3dac4453-7dc6-4991-95f0-26a14ab594b9','myemail2@email.com','myemail@email.com','frontend',2,'','[\"3c1246a5-fee9-485d-adb3-24f029c528b4\"]'),('415a828b-4d1c-4e77-a91d-385bff91f203','myem23121321ail@email.com','myemail@email.com','frontend',2,'',''),('56653997-1e7d-4c47-8fee-453d83f6b02c','brigitta121@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('59c5ab99-3f3e-4cf8-9b53-64d3239b913a','test@try.com','password','Designer',6,'Photoshop, Illustrator, Sketch',''),('59caae88-4e12-492c-bfd9-b1020d9ad4fd','myemail3@email.com','password','frontend',2,'JS, Angular, Node, PHP, SASS','[\"3c1246a5-fee9-485d-adb3-24f029c528b4\"]'),('630cbd40-1743-41b8-89a4-ba5d4ba0f1a3','bri@email.com','bri','frontend',2,'',''),('64e4e36c-0fdc-4704-bc06-fd2a96aa282c','11brigitta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('6881e526-0aec-46c5-8702-9eb293f8b193','brigit1ta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('768d4cbb-fe12-424c-b6a0-18e4a04b2ffa','brigit3221ta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript','[\"3c1246a5-fee9-485d-adb3-24f029c528b4\"]'),('795b202b-ff1d-46ef-9abd-2c4517613f24','brig9itt1a121@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('7b8008ee-e6fa-443f-83a5-370d3ef60c84','brigitta12221@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('8a65b630-c1f4-40e3-9b43-f72b56ca94d8','112brigitta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('bcda2372-f78f-4ce7-9ee8-47762c840b40','myemail@email.com','myemail@email.com','frontend',2,'Illustrator,   Photoshop, AC','[\"5d8ade45-61cb-4cde-8a64-838d4a23541e\",\"af2fb58d-594c-4f72-9536-5951a150f8bf\"]'),('c66cde31-84e7-49b9-95fa-0c20629ee4d3','brigitta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript','[\"af2fb58d-594c-4f72-9536-5951a150f8bf\"]'),('d0792de4-872b-4f6f-876f-5ebe11762cb7','brigitta12212121@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('d0856e94-4c29-442c-a826-3c853a8e43dc','brig222222itta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('dfc986c6-502f-4e14-95e3-1fc32edbc024','brigitta1223@yahoo.com','password1','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('f7cca59a-8e57-4b63-a38e-8ea1c59c224e','brigitta12@yahoo.com','password1','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('f92e91bb-8982-4605-9466-ce325797ea2f','brigitta125@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript','');

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

