-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2024 at 04:11 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `curd_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `crud`
--

CREATE TABLE `crud` (
  `id` int(250) NOT NULL,
  `PRODUCT_ID` varchar(250) NOT NULL,
  `PRODUCT_NAME` varchar(250) NOT NULL,
  `CATEGORY_ID` varchar(250) NOT NULL,
  `CATEGORY_NAME` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `crud`
--

INSERT INTO `crud` (`id`, `PRODUCT_ID`, `PRODUCT_NAME`, `CATEGORY_ID`, `CATEGORY_NAME`) VALUES
(1, '0', 'WirelessMouse', '0', 'Electronics'),
(2, '4', 'Water Bottle', '3', 'Accessories'),
(4, '2', 'Bluetooth Speaker', '1', 'Electronics'),
(5, '5', ' home Speaker', '36', 'Electronics for shop'),
(6, '42', ' Gaming Consoler', '51', 'Video Games'),
(7, '58', ' Fitness Tracker', '70', 'Health and Fitness'),
(8, '60', 'Ergonomic Chair', '15', 'Furniture'),
(9, '61', 'Leather Jacket', '20', 'Clothing'),
(10, '62', 'Yoga Mat', '70', 'Health and Fitness'),
(11, '64', 'Organic Apple', '30', 'Grocery'),
(12, '65', 'The Great Gatsby', '35', 'Books'),
(13, '66', 'Blender', '40', 'Kitchen Appliances'),
(14, '67', 'Gaming Mouse', '45', 'Gaming Accessories'),
(15, '68', 'Wall Clock', '50', 'Home Decor'),
(16, '69', 'Baby Stroller', '55', 'Baby Products'),
(17, '70', 'Shampoo', '60', 'Personal Care'),
(18, '71', 'Pen Set', '65', 'Office Supplies'),
(19, '72', 'Car Phone Mount', '75', 'Automotive'),
(20, '73', 'Acoustic Guitar', '80', 'Musical Instruments'),
(21, '', '', '', ''),
(22, '2', 'shopping bag', '34', 'bags'),
(23, 'bv', 'hg45', 'gh', 'vbv'),
(24, '0', 'WirelessMouse', '0', 'Electronics op'),
(25, '', '', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `crud`
--
ALTER TABLE `crud`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `crud`
--
ALTER TABLE `crud`
  MODIFY `id` int(250) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
