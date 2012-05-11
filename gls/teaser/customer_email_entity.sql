-- phpMyAdmin SQL Dump
-- version 3.4.10.1
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2012 年 05 月 10 日 09:10
-- 服务器版本: 5.1.48
-- PHP 版本: 5.3.3

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `test`
--

-- --------------------------------------------------------

--
-- 表的结构 `customer_email_entity`
--

CREATE TABLE IF NOT EXISTS `customer_email_entity` (
  `entity_id` int(11) NOT NULL AUTO_INCREMENT,
  `customer_email` varchar(50) NOT NULL,
  `created_at` datetime NOT NULL,
  PRIMARY KEY (`entity_id`),
  UNIQUE KEY `customer_email` (`customer_email`)
) ENGINE=InnoDB  DEFAULT CHARSET=gb2312 AUTO_INCREMENT=13 ;

--
-- 转存表中的数据 `customer_email_entity`
--

INSERT INTO `customer_email_entity` (`entity_id`, `customer_email`, `created_at`) VALUES
(1, '1@test.com', '2012-05-10 16:10:31'),
(2, '2@test.com', '2012-05-10 16:11:01'),
(3, '3@test.com', '2012-05-10 16:12:13'),
(4, '4@test.com', '2012-05-10 16:13:09'),
(5, '5@test.com', '2012-05-10 16:13:09'),
(6, '6@test.com', '2012-05-10 16:13:09'),
(7, '7@test.com', '2012-05-10 16:13:09'),
(8, '11@test.com', '2012-05-10 16:17:23'),
(9, '12@test.com', '2012-05-10 16:17:23'),
(10, '13@test.com', '2012-05-10 16:17:23'),
(11, '15@test.com', '2012-05-10 16:17:23'),
(12, '20@test.com', '2012-05-10 17:04:41');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
