-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               5.7.42-0ubuntu0.18.04.1 - (Ubuntu)
-- Server OS:                    Linux
-- HeidiSQL Version:             12.4.0.6659
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping structure for table workana.Fabrica
CREATE TABLE `Fabrica` (
	`IdFab` BIGINT(20) NOT NULL,
	`Descripcion` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	PRIMARY KEY (`IdFab`) USING BTREE
)
COLLATE='utf8mb4_general_ci' ENGINE=InnoDB ;

ALTER TABLE `Fabrica`
	ADD CONSTRAINT `FK_Fabrica_Productos` FOREIGN KEY (`IdFab`) REFERENCES `Productos` (`IdFab`) ON UPDATE NO ACTION ON DELETE CASCADE;

-- Dumping structure for table workana.Productos
CREATE TABLE `Productos` (
	`Id` BIGINT(20) NOT NULL,
	`Descripcion` TEXT NULL DEFAULT NULL COLLATE 'utf8mb4_general_ci',
	`Precio` DOUBLE NULL DEFAULT NULL,
	`Existencias` BIGINT(20) NULL DEFAULT NULL,
	`IdFab` BIGINT(20) NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (`IdFab`) USING BTREE
)
COLLATE='utf8mb4_general_ci' ENGINE=InnoDB ;

-- Dumping structure for table workana.Users
CREATE TABLE IF NOT EXISTS `Users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `email` varchar(120) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table workana.Users: ~1 rows (approximately)
INSERT INTO `Users` ( `name`, `email`, `username`, `password`) VALUES
	('johnq', 'johnq@user.com', 'johnq', 'password');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
