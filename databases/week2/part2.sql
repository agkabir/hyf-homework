USE hyf_class2023;

-- create table Class with the columns: id, name, begins (date), ends (date)
CREATE TABLE IF NOT EXISTS Class (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `begins_date` DATETIME NOT NULL,
  `ends_date` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB;
-- create table Student: with the columns: id, name, email, phone, class_id (foreign key)
CREATE TABLE IF NOT EXISTS Student (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(255) NOT NULL,
  `class_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_class` FOREIGN KEY (`class_id`) REFERENCES `Class` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB;

-- creating or index for column name for student TABLE
CREATE INDEX `name_index` ON Student (name);
-- Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished
ALTER TABLE Class ADD status ENUM('Not-started', 'ongoing', 'finished');
