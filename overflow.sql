-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 01, 2017 at 10:37 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `overflow`
--

-- --------------------------------------------------------

--
-- Table structure for table `answer`
--

CREATE TABLE `answer` (
  `aid` int(255) NOT NULL,
  `qid` int(255) NOT NULL,
  `uid` int(255) NOT NULL,
  `answer` varchar(10000) NOT NULL,
  `answeredtime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `login`
--

CREATE TABLE `login` (
  `id` int(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `qid` int(255) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` varchar(5000) NOT NULL,
  `tags` varchar(500) NOT NULL,
  `askedby` int(255) NOT NULL,
  `askedtime` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `votes` int(255) NOT NULL,
  `extra` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`qid`, `title`, `description`, `tags`, `askedby`, `askedtime`, `votes`, `extra`) VALUES
(1, 'App keeps crashing while checking for user sign in Firebase', 'This is the main page of a simple blog app. I am trying to check for user sign in using the AuthStateListener in the OnCreate function. However, it never gets called when I launch the app.\r\n\r\nAlso, when I add the auth state listener to Firebase auth instance in the OnStart function, my app crashes on lauch.\r\n\r\nWhat am I doing wrong? How do I check for user login?\r\n\r\nI am using the Google sign in for Firebase ', 'Android java firebase', 51, '2017-09-25 12:38:43', 55, 0),
(2, 'How to hide data based on state name in Angularjs4?', 'The owner of pubads.g.doubleclick.net has configured their website improperly. To protect your information from being stolen, Firefox has not connected to this website.\r\n\r\nThis site uses HTTP Strict Transport Security (HSTS) to specify that Firefox may only connect to it securely. As a result, it is not possible to add an exception for this certificate.', 'Angular js firebase android samsung ', 51, '2017-09-25 12:37:22', 20, 0),
(3, 'Your connection is not secure', 'The owner of pubads.g.doubleclick.net has configured their website improperly. To protect your information from being stolen, Firefox has not connected to this website.\r\n\r\nThis site uses HTTP Strict Transport Security (HSTS) to specify that Firefox may only connect to it securely. As a result, it is not possible to add an exception for this certificate.', 'Internet question answer ', 51, '2017-09-25 12:40:19', 47, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `answer`
--
ALTER TABLE `answer`
  ADD PRIMARY KEY (`aid`);

--
-- Indexes for table `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`qid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `answer`
--
ALTER TABLE `answer`
  MODIFY `aid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `login`
--
ALTER TABLE `login`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;
--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `qid` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
