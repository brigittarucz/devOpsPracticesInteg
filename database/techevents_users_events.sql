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
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` varchar(36) NOT NULL,
  `title` varchar(255) NOT NULL,
  `date` varchar(45) NOT NULL,
  `location` varchar(45) NOT NULL,
  `topics` longtext NOT NULL,
  `proffessional_target` longtext NOT NULL,
  `topics_difficulty` int NOT NULL,
  `event_link` longtext NOT NULL,
  `attendance_price` varchar(10) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES ('3c1246a5-fee9-485d-adb3-24f029c528b4','Deep Dive Design Thinking Workshop','06.10.2020-07.10.2020','Catacombs of Zoom','innovation, design thinking, business models, visualization and mapping for solution creation','entrepreneur, founder, designer, freelancer',1,'https://www.eventbrite.com/e/online-2-day-deep-dive-in-design-thinking-mindshoptm-tickets-121347161627?aff=ebdssbdestsearch','F540'),('5d8ade45-61cb-4cde-8a64-838d4a23541e','Web Unleashed','05.10.2020-07.10.2020','Virtual','new technologies, algorithms, frontend development','developer, business',1,'https://fitc.ca/event/webu20/','F310'),('98ee67f1-a2d8-4872-b87b-e6b91f1b7d1a','ReactiveConf','08.03.2021','Prague','react, reason, GraphQL, vue, security','developer, programmer',2,'https://reactiveconf.com/','NA'),('af2fb58d-594c-4f72-9536-5951a150f8bf','Web Summit','02.12.2020-04.12.2020','Lisbon','marketing and media, AI and machine learning, data science, software development, mobile development, privacy and security, business development, commerce, gaming and VR','developer, entrepreneur, investor, business, data scientist, programmer',5,'https://websummit.com/','F885'),('e6880fab-0129-4faf-bf5a-00d91a9d5d61','RTE2020','13.10.2020-14.10.2020','Virtual','product experience design, monetization, trending in machine learning, trending in VR/AR, ideation hackaton, startup 101','developer, entrepreneur, founder, designer',4,'https://www.runtheworld.today/app/c/rte2020','0');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
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
