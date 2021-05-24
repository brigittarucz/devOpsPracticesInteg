-- MySQL dump 10.13  Distrib 8.0.21, for Win64 (x86_64)
--
-- Host: localhost    Database: techevents_users
-- ------------------------------------------------------
-- Server version	8.0.21

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

CREATE DATABASE IF NOT EXISTS techevents_users;
USE techevents_users;

DROP TABLE IF EXISTS techevents_users.users;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE techevents_users.users (
  `id` varchar(36) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(255) NOT NULL,
  `proffesion` varchar(45) NOT NULL,
  `experience` int NOT NULL,
  `interests` varchar(255) DEFAULT NULL,
  `events` longtext,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
);

-- ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES techevents_users.users WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO techevents_users.users VALUES ('1c1903d7-e852-4578-8f39-69421a7849fa','brigitt1a121@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('1fbae622-3eba-496e-9b3b-967ca1c82e9b','brigitta1222121@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('265335fa-5c4a-42af-b5af-aac83d4f9a57','brigitta2@yahoo.com','password','frontend',10,'JS,Angular,Node,PHP,SASS','[\"3c1246a5-fee9-485d-adb3-24f029c528b4\",\"af2fb58d-594c-4f72-9536-5951a150f8bf\",\"5d8ade45-61cb-4cde-8a64-838d4a23541e\"]'),('32d148f9-8876-4c35-9af0-8d3000635fea','112br21i2giwq22tta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('3dac4453-7dc6-4991-95f0-26a14ab594b9','myemail2@email.com','myemail@email.com','frontend',2,'','[\"3c1246a5-fee9-485d-adb3-24f029c528b4\"]'),('415a828b-4d1c-4e77-a91d-385bff91f203','myem23121321ail@email.com','myemail@email.com','frontend',2,'',''),('56653997-1e7d-4c47-8fee-453d83f6b02c','brigitta121@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('59c5ab99-3f3e-4cf8-9b53-64d3239b913a','test@try.com','password','Designer',6,'Photoshop, Illustrator, Sketch',''),('59caae88-4e12-492c-bfd9-b1020d9ad4fd','myemail3@email.com','password','frontend',2,'JS, Angular, Node, PHP, SASS','[\"3c1246a5-fee9-485d-adb3-24f029c528b4\"]'),('630cbd40-1743-41b8-89a4-ba5d4ba0f1a3','bri@email.com','bri','frontend',2,'',''),('64e4e36c-0fdc-4704-bc06-fd2a96aa282c','11brigitta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('6881e526-0aec-46c5-8702-9eb293f8b193','brigit1ta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('768d4cbb-fe12-424c-b6a0-18e4a04b2ffa','brigit3221ta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript','[\"3c1246a5-fee9-485d-adb3-24f029c528b4\"]'),('795b202b-ff1d-46ef-9abd-2c4517613f24','brig9itt1a121@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('7b8008ee-e6fa-443f-83a5-370d3ef60c84','brigitta12221@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('8a65b630-c1f4-40e3-9b43-f72b56ca94d8','112brigitta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('bcda2372-f78f-4ce7-9ee8-47762c840b40','myemail@email.com','myemail@email.com','frontend',2,'Illustrator,   Photoshop, AC','[\"5d8ade45-61cb-4cde-8a64-838d4a23541e\",\"af2fb58d-594c-4f72-9536-5951a150f8bf\"]'),('c66cde31-84e7-49b9-95fa-0c20629ee4d3','brigitta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript','[\"af2fb58d-594c-4f72-9536-5951a150f8bf\"]'),('d0792de4-872b-4f6f-876f-5ebe11762cb7','brigitta12212121@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('d0856e94-4c29-442c-a826-3c853a8e43dc','brig222222itta1@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('dfc986c6-502f-4e14-95e3-1fc32edbc024','brigitta1223@yahoo.com','password1','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('f7cca59a-8e57-4b63-a38e-8ea1c59c224e','brigitta12@yahoo.com','password1','Frontend Developer',2,'HTML5, CSS3, JavaScript',''),('f92e91bb-8982-4605-9466-ce325797ea2f','brigitta125@yahoo.com','password','Frontend Developer',2,'HTML5, CSS3, JavaScript','');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-28 19:37:01
