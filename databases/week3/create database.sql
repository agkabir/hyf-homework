DROP DATABASE IF EXISTS `database_week_3`;
​
CREATE DATABASE IF NOT EXISTS `database_week_3`;
​
USE `database_week_3`;
-- create table meal
CREATE TABLE IF NOT EXISTS `Meal` (
  `id` int(10) unsigned NOT NULL ,
  `title` varchar(150) NOT NULL,
  `description` text(1000) ,
  `location` varchar(150) NOT NULL,
  `when` DATETIME NOT NULL,
  `max_reservations` int NOT NULL,
  `price` DECIMAL NOT NULL,
  `created_date` DATE NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
-- create table RESERVATION
CREATE TABLE IF NOT EXISTS `Reservation`(
 `id` int(10) unsigned NOT NULL ,
 `number_of_guests` int(10) unsigned NOT NULL ,
 `meal_id` int(10) unsigned NOT NULL ,
 `created_date` DATE NOT NULL,
 `contact_phonenumber` VARCHAR(15),
 `contact_name` VARCHAR(50),
 `contact_email` VARCHAR(50),
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_meal_res` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
ALTER TABLE Reservation MODIFY COLUMN ID int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
-- create table REVIEW
CREATE TABLE IF NOT EXISTS `Review`(
 `id` int(10) UNSIGNED NOT NULL,
 `title`VARCHAR(150),
 `description` TEXT NOT NULL,
 `meal_id` int(10) UNSIGNED NOT NULL,
 `stars` int(2) UNSIGNED NOT NULL,
 `created_date` DATE NOT NULL,
 PRIMARY KEY (`id`),
 CONSTRAINT `fk_meal_rev` FOREIGN KEY (`meal_id`) REFERENCES `Meal` (`id`) ON DELETE CASCADE
 ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
ALTER TABLE Review MODIFY COLUMN ID int(10) UNSIGNED NOT NULL AUTO_INCREMENT;