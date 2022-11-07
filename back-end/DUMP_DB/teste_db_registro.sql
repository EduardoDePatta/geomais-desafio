-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: teste_db
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
-- Table structure for table `registro`
--

DROP TABLE IF EXISTS `registro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registro` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) DEFAULT NULL,
  `cpf` varchar(14) DEFAULT NULL,
  `rg` varchar(12) DEFAULT NULL,
  `data_nasc` varchar(40) DEFAULT NULL,
  `sexo` varchar(9) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `cpf` (`cpf`),
  UNIQUE KEY `rg` (`rg`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registro`
--

LOCK TABLES `registro` WRITE;
/*!40000 ALTER TABLE `registro` DISABLE KEYS */;
INSERT INTO `registro` VALUES (1,'Francisca Julia da Costa','45769693665','473608972','1944-03-23','Feminino'),(2,'Noah Felipe Silva','95653143170','409747828','1964-07-01T03:00:00.000Z','Masculino'),(3,'Alícia Rosângela Melo','06629135318','362141411','1978-02-18','Feminino'),(4,'Cristiane Renata Ana das Neves','94607440108','323017368','1966-05-10','Feminino'),(5,'Priscila Benedita Vanessa Ferreira','88828239468','445246704','1966-11-15','Feminino'),(7,'Yuri Vicente Manuel Silveira','25011109356','185973619','1974-09-05','Masculino'),(8,'Melissa Alessandra Barros','44667591625','255986737','2000-01-13','Feminino'),(9,'Márcia Daniela Lara da Cruz','93280382602','406531766','1986-06-04','Feminino'),(10,'Filipe Anderson Rafael Assis','70486900541','393833343','1995-11-19','Masculino'),(11,'Luís Vinicius Sebastião Jesus','03596058856','299156928','1965-04-23','Masculino'),(12,'Cecília Caroline Nascimento','03439667278','486730669','1951-02-04','Feminino'),(13,'Raimunda Sandra Ferreira da Silva','75718789185','211898065','1974-11-17','Feminino'),(14,'Andreia Isabelly Juliana Melo','73634898585','246770181','1963-10-11','Feminino'),(15,'Nicolas Bernardo Moura','06137086526','163023438','1989-06-08','Masculino'),(16,'Diego Benjamin Tiago da Luz','99115244342','383151004','1990-06-04','Masculino'),(17,'Marlene Emanuelly Yasmin Cavalcanti','78123362552','210687423','1961-10-15','Feminino'),(18,'Vanessa Isabela da Luz','87213849085','442891933','1982-09-05','Feminino'),(19,'Camila Flávia Vera Mendes','79052451877','408479942','1952-07-01','Feminino'),(20,'Luana Lívia Lara Campos','53290105601','147329462','1981-08-19','Feminino'),(21,'Josefa Nina Galvão','37974383380','138786902','1943-01-27','Feminino'),(22,'Natália Isabelly Silvana da Paz','45417286729','229860965','1980-09-17','Feminino'),(23,'Amanda Sebastiana Vieira','70394103890','502511965','1960-06-08','Feminino'),(24,'Noah Pedro Alves','07473310658','321100153','1992-08-14','Masculino'),(25,'Giovana Camila da Conceição','41874684049','355202153','1947-06-25','Feminino'),(26,'Pietro Joaquim Emanuel Gonçalves','00350223025','120990684','1999-04-21','Masculino'),(27,'Tereza Kamilly Mariana Porto','05094670590','398309413','1959-06-16','Feminino'),(28,'Caroline Emanuelly Lívia Moreira','67383154657','245617279','1948-04-09','Feminino'),(29,'Gabriel Ricardo da Paz','82927017298','304071146','1980-03-24','Masculino'),(30,'Giovanni Igor Augusto Pires','58488049072','338742712','1946-08-24','Masculino'),(33,'Eduardo Giacometti De Patta','08486986907','4393787','1992-05-23','Masculino'),(34,'Beatriz Flores','10662461908','4235614','1991-02-02','Feminino'),(35,'James Carlo','55155155151','5551551','1954-05-02','Masculino'),(40,'Teste','111.111.111-11','11.111.111-1','2022-11-02T15:15:07.281Z','Masculino');
/*!40000 ALTER TABLE `registro` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-02 12:22:59
