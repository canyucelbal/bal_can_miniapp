-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Dec 16, 2020 at 11:13 AM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `minidata`
--

-- --------------------------------------------------------

--
-- Table structure for table `minis`
--

DROP TABLE IF EXISTS `minis`;
CREATE TABLE IF NOT EXISTS `minis` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(30) NOT NULL,
  `seats` int(11) NOT NULL,
  `emission` varchar(15) NOT NULL,
  `consumption` varchar(15) NOT NULL,
  `price` varchar(15) NOT NULL,
  `image` varchar(35) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `minis`
--

INSERT INTO `minis` (`id`, `model`, `seats`, `emission`, `consumption`, `price`, `image`) VALUES
(1, 'Mini Electric', 4, '0.0 g/km', '18 kWsa', '33.900 $', 'electric.jpg'),
(2, 'Mini Cabrio', 4, '129 g/km', '5,6 l', '31.900 $', 'cabrio.jpg'),
(3, 'Mini Clubman', 5, '137 g/km', '6,1 l', '36.500 $', 'clubman.jpg'),
(4, 'Mini Countryman', 5, '157 g/km', '6,9 l', '32.100 $', 'countryman.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
