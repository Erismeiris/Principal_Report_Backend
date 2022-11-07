-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: principal_report
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `activities_for_month`
--

DROP TABLE IF EXISTS `activities_for_month`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activities_for_month` (
  `id_activities_for_month` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `activities` varchar(300) DEFAULT NULL,
  `date_of_activity` date DEFAULT NULL,
  `achievements` varchar(300) DEFAULT NULL,
  `challenges` varchar(300) DEFAULT NULL,
  `corrective_measures` varchar(300) DEFAULT NULL,
  PRIMARY KEY (`id_activities_for_month`),
  UNIQUE KEY `id_activities_for_month_UNIQUE` (`id_activities_for_month`),
  KEY `activities_report_id_idx` (`report_id`),
  CONSTRAINT `activities_report_id` FOREIGN KEY (`report_id`) REFERENCES `report` (`id_report`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities_for_month`
--

LOCK TABLES `activities_for_month` WRITE;
/*!40000 ALTER TABLE `activities_for_month` DISABLE KEYS */;
INSERT INTO `activities_for_month` VALUES (2,22,'Las paredes','2022-09-02','Good happines','NO resources','repet'),(6,22,'Audited annual financial statement','2022-09-09','Lodfsdfdsf','sdfdsfdfd','sdfdfdsfsdfd'),(7,22,'Submission on PO20 Filling of vacant substantive Posts','2022-09-15','sfsdfsdfsdf','sdfsdfdfdf','sdfdfdf'),(8,22,'Assets spot check Quarterly on SA-SAMS','2022-09-24','Loas casos son varios','Loasddfdfd','dfdsfdfdfsdfsdfds'),(9,22,'Submission on PO20 Filling of vacant substantive Posts','2022-09-23','Czcxdcvfdbc fg fvfdg f f','df gfg fgf gfgf','df gdfgg f '),(10,22,'Assets spot check Quarterly on SA-SAMS','2022-09-09','zxczxcx','xcxcxcxc','czxcxvcx');
/*!40000 ALTER TABLE `activities_for_month` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curriculum_coverage`
--

DROP TABLE IF EXISTS `curriculum_coverage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curriculum_coverage` (
  `id_curriculum_coverage` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `grade` varchar(45) DEFAULT NULL,
  `subjects_behind_per_grade` varchar(45) DEFAULT NULL,
  `names_subject_teachers` varchar(45) DEFAULT NULL,
  `catchup_programme` varchar(45) DEFAULT NULL,
  `progress_monitoring` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_curriculum_coverage`),
  KEY `report_id_curriculum` (`report_id`),
  CONSTRAINT `report_id_curriculum` FOREIGN KEY (`report_id`) REFERENCES `report` (`id_report`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curriculum_coverage`
--

LOCK TABLES `curriculum_coverage` WRITE;
/*!40000 ALTER TABLE `curriculum_coverage` DISABLE KEYS */;
INSERT INTO `curriculum_coverage` VALUES (3,22,'Grade 2','Math','Erismeiris Hidalgo Reyes','I dont KNow','They must callme');
/*!40000 ALTER TABLE `curriculum_coverage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `curriculum_record`
--

DROP TABLE IF EXISTS `curriculum_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `curriculum_record` (
  `id_curriculum_record` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `dates_submissions` date DEFAULT NULL,
  `name_responsible_teacher` varchar(45) DEFAULT NULL,
  `actual_date` date DEFAULT NULL,
  `challenges_experienced` varchar(45) DEFAULT NULL,
  `verification_by_SMT` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_curriculum_record`),
  UNIQUE KEY `id_curriculum_record_UNIQUE` (`id_curriculum_record`),
  KEY `curriculum_record_report_id_idx` (`report_id`),
  CONSTRAINT `curriculum_record_report_id` FOREIGN KEY (`report_id`) REFERENCES `report` (`id_report`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `curriculum_record`
--

LOCK TABLES `curriculum_record` WRITE;
/*!40000 ALTER TABLE `curriculum_record` DISABLE KEYS */;
INSERT INTO `curriculum_record` VALUES (2,22,'2022-11-12','Lorenzo','2022-11-12','Lolololo','Yes'),(4,22,'2022-09-14','Erismeiris Hidalgo Reyes','2022-09-30','Dsacdfsfsd','sdfdsfsdf');
/*!40000 ALTER TABLE `curriculum_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `district`
--

DROP TABLE IF EXISTS `district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `district` (
  `id_district` int NOT NULL AUTO_INCREMENT,
  `district_name` varchar(45) NOT NULL,
  `province` varchar(45) NOT NULL,
  PRIMARY KEY (`id_district`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `district`
--

LOCK TABLES `district` WRITE;
/*!40000 ALTER TABLE `district` DISABLE KEYS */;
INSERT INTO `district` VALUES (1,'Fezile Dabi','Free State'),(3,'Pumalanga','Ester Cape');
/*!40000 ALTER TABLE `district` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `extracurricular_activities`
--

DROP TABLE IF EXISTS `extracurricular_activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `extracurricular_activities` (
  `id_extracurricular_activities` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `activity_date` date NOT NULL,
  `activity` varchar(45) NOT NULL,
  `learner_involved` int NOT NULL,
  PRIMARY KEY (`id_extracurricular_activities`),
  KEY `extracurricular_activities_report_id_idx` (`report_id`),
  CONSTRAINT `extracurricular_activities_report_id` FOREIGN KEY (`report_id`) REFERENCES `report` (`id_report`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `extracurricular_activities`
--

LOCK TABLES `extracurricular_activities` WRITE;
/*!40000 ALTER TABLE `extracurricular_activities` DISABLE KEYS */;
INSERT INTO `extracurricular_activities` VALUES (1,22,'2022-09-08','The populat dancing',135),(3,22,'2022-09-08','The populat dancing',135),(5,22,'2022-09-14','Big Party',12),(6,22,'2022-10-18','Another big party',325);
/*!40000 ALTER TABLE `extracurricular_activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `intervention_strategie`
--

DROP TABLE IF EXISTS `intervention_strategie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `intervention_strategie` (
  `id_intervention` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `grade` varchar(45) DEFAULT NULL,
  `name_teacher` varchar(45) DEFAULT NULL,
  `subject_underperforming` varchar(45) DEFAULT NULL,
  `intervention_strategies` varchar(45) DEFAULT NULL,
  `progress_in_month` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_intervention`),
  UNIQUE KEY `id_interventio_UNIQUE` (`id_intervention`),
  KEY `intervention_report_id_idx` (`report_id`),
  CONSTRAINT `intervention_report_id` FOREIGN KEY (`report_id`) REFERENCES `report` (`id_report`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `intervention_strategie`
--

LOCK TABLES `intervention_strategie` WRITE;
/*!40000 ALTER TABLE `intervention_strategie` DISABLE KEYS */;
INSERT INTO `intervention_strategie` VALUES (9,22,'Grade 2','Erismeiris Hidalgo Reyes','Math','sdfsdfsddf','sdfsdfsdfsdfd');
/*!40000 ALTER TABLE `intervention_strategie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `learner_attendance`
--

DROP TABLE IF EXISTS `learner_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `learner_attendance` (
  `id_learner_attendance` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `grade` varchar(45) NOT NULL,
  `roll` int NOT NULL,
  `actuall_attendance` int NOT NULL,
  `percentage_attendance` float NOT NULL,
  PRIMARY KEY (`id_learner_attendance`),
  UNIQUE KEY `idlearner_attendance_UNIQUE` (`id_learner_attendance`),
  KEY `report_id` (`report_id`),
  CONSTRAINT `report_id` FOREIGN KEY (`report_id`) REFERENCES `report` (`id_report`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `learner_attendance`
--

LOCK TABLES `learner_attendance` WRITE;
/*!40000 ALTER TABLE `learner_attendance` DISABLE KEYS */;
INSERT INTO `learner_attendance` VALUES (10,22,'Grade 2',156,133,85.26),(11,22,'Grade 1',1000,998,99.8),(18,22,'Grade 2',200,100,50),(19,22,'Grade 4',250,245,98);
/*!40000 ALTER TABLE `learner_attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `report`
--

DROP TABLE IF EXISTS `report`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `report` (
  `id_report` int NOT NULL AUTO_INCREMENT,
  `report_month` date NOT NULL,
  `school_id` int NOT NULL,
  `report_name` varchar(25) DEFAULT NULL,
  PRIMARY KEY (`id_report`),
  KEY `id_school_idx` (`school_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `report`
--

LOCK TABLES `report` WRITE;
/*!40000 ALTER TABLE `report` DISABLE KEYS */;
INSERT INTO `report` VALUES (18,'2022-08-26',14,'August-2022'),(19,'2023-06-26',14,'June-2023'),(22,'2022-08-11',5,'August-2022');
/*!40000 ALTER TABLE `report` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sba`
--

DROP TABLE IF EXISTS `sba`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sba` (
  `id_sba` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `term` varchar(45) NOT NULL,
  `grade` varchar(45) NOT NULL,
  `task` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_sba`),
  KEY `report_id_SBA` (`report_id`),
  CONSTRAINT `report_id_SBA` FOREIGN KEY (`report_id`) REFERENCES `report` (`id_report`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sba`
--

LOCK TABLES `sba` WRITE;
/*!40000 ALTER TABLE `sba` DISABLE KEYS */;
INSERT INTO `sba` VALUES (2,22,'term 1','Grade 4',' Loaloaloa'),(4,22,'Term 2','Grade 10','dsfgfdgfdgf'),(5,22,'Term 1','Grade 7','fgfghgf'),(6,22,'Term 1','Grade 1','fghfghghg');
/*!40000 ALTER TABLE `sba` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school`
--

DROP TABLE IF EXISTS `school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `school` (
  `id_school` int NOT NULL AUTO_INCREMENT,
  `id_district` int NOT NULL,
  `school_name` varchar(45) NOT NULL,
  `principal_name` varchar(45) NOT NULL,
  `grades` text NOT NULL,
  `password` varchar(45) NOT NULL,
  PRIMARY KEY (`id_school`),
  UNIQUE KEY `school_name_UNIQUE` (`school_name`),
  KEY `id_district_idx` (`id_district`),
  CONSTRAINT `id_district` FOREIGN KEY (`id_district`) REFERENCES `district` (`id_district`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school`
--

LOCK TABLES `school` WRITE;
/*!40000 ALTER TABLE `school` DISABLE KEYS */;
INSERT INTO `school` VALUES (5,1,'Las vegas','Erismeiris','GradeR,Grade1, Grade2, Grade3','123456'),(13,1,'Lolo','Lolollala','Grade R,Grade 1,Grade 2,Grade 3','123456'),(14,1,'Madrid','Barcelona','Grade 6,Grade 7,Grade 8,Grade 9','123456');
/*!40000 ALTER TABLE `school` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `support_given_to_learners`
--

DROP TABLE IF EXISTS `support_given_to_learners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `support_given_to_learners` (
  `id_support_given_to_learners` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `orphaned` int DEFAULT NULL,
  `households` int DEFAULT NULL,
  `teenage_pregnancy` int DEFAULT NULL,
  `receiving_support_at_school` int DEFAULT NULL,
  `referred_to_DBST` int DEFAULT NULL,
  `cases_successfully_closed` int DEFAULT NULL,
  `living_with_disabilities` int DEFAULT NULL,
  PRIMARY KEY (`id_support_given_to_learners`),
  UNIQUE KEY `id_support_given_to_learners_UNIQUE` (`id_support_given_to_learners`),
  KEY `support_given_report_id_idx` (`report_id`),
  CONSTRAINT `support_given_report_id` FOREIGN KEY (`report_id`) REFERENCES `report` (`id_report`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `support_given_to_learners`
--

LOCK TABLES `support_given_to_learners` WRITE;
/*!40000 ALTER TABLE `support_given_to_learners` DISABLE KEYS */;
INSERT INTO `support_given_to_learners` VALUES (1,22,2,3,5,3,6,6,26),(3,22,1,1,1,1,1,1,1);
/*!40000 ALTER TABLE `support_given_to_learners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `support_learners`
--

DROP TABLE IF EXISTS `support_learners`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `support_learners` (
  `id_support_learners` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `no_learners_special_education` int NOT NULL,
  `grade_remedial` varchar(45) NOT NULL,
  `number_remedial` int NOT NULL,
  `grade_integrated` varchar(45) NOT NULL,
  `number_integrated` int NOT NULL,
  PRIMARY KEY (`id_support_learners`),
  KEY `id_support_learner` (`report_id`),
  CONSTRAINT `id_support_learner` FOREIGN KEY (`report_id`) REFERENCES `report` (`id_report`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `support_learners`
--

LOCK TABLES `support_learners` WRITE;
/*!40000 ALTER TABLE `support_learners` DISABLE KEYS */;
INSERT INTO `support_learners` VALUES (5,22,10,'Grade 9',10,'Grade 8',1),(6,22,10,'Grade 3',3,'Grade 8',10),(7,22,1,'Grade 9',1,'Grade 1',1),(8,22,1,'Grade 1',1,'Grade 2',1);
/*!40000 ALTER TABLE `support_learners` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teacher_attendance`
--

DROP TABLE IF EXISTS `teacher_attendance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teacher_attendance` (
  `id_teacher_attendance` int NOT NULL AUTO_INCREMENT,
  `report_id` int NOT NULL,
  `teacher_name` varchar(45) DEFAULT NULL,
  `days_absent` int DEFAULT NULL,
  `type_leave` varchar(45) DEFAULT NULL,
  `date_leave_submitted` date DEFAULT NULL,
  `submitted` varchar(45) DEFAULT NULL,
  `actions` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id_teacher_attendance`),
  UNIQUE KEY `id_teacher_attendance_UNIQUE` (`id_teacher_attendance`),
  KEY `report_id_in_teacher` (`report_id`),
  CONSTRAINT `report_id_in_teacher` FOREIGN KEY (`report_id`) REFERENCES `report` (`id_report`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teacher_attendance`
--

LOCK TABLES `teacher_attendance` WRITE;
/*!40000 ALTER TABLE `teacher_attendance` DISABLE KEYS */;
INSERT INTO `teacher_attendance` VALUES (1,22,'Erismeiris',25,'vacations','2022-05-01','Yes','Lolololololool'),(4,22,'Erismeiris Hidalgo Reyes',25,'Hollydays','2022-08-26','N, I dont know','Call him many time');
/*!40000 ALTER TABLE `teacher_attendance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(250) NOT NULL,
  `email` varchar(45) NOT NULL,
  `rol` varchar(45) NOT NULL,
  PRIMARY KEY (`_id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Erismeris','123456','erismeidis@gmail.com','Admin'),(2,'Erismeiris Hidalgo','$2a$10$IHQiaceox9BUHgzFYgGUbOcd1xHmwhmogqVglyhuKubfxI7FOzd7a','prueba@gmail.com','Admin');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-07 16:31:06
