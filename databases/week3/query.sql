USE `database_week_3`;
-- Get all Meals
SELECT * FROM Meal;
-- Add a new meal
INSERT INTO Meal (`id`,`title`,`description`,`location`,`when`,`max_reservations`,`price`,`created_date`) VALUES (8,'Rosogolla','Bangladeshi food','ishoj','2023-02-15 07:54:30',10,85.00,'2022-12-23');
-- Get a meal with any id, fx 1
SELECT * from Meal WHERE id=1;
-- Update a meal with any id, fx 1. Update any attribute fx the title or multiple attributes
UPDATE Meal SET `when`='2023-03-28 06:54:16', max_reservations=15 WHERE id=6;
-- Delete a meal with any id, fx 1
DELETE FROM Meal WHERE id=1;
SELECT * FROM Meal;

-- Get all reservations
SELECT * FROM Reservation;
-- Add a new reservations
INSERT INTO Reservation (`id`,`number_of_guests`,`meal_id`,`created_date`,`contact_phonenumber`,`contact_name`,`contact_email`) VALUES (5,30,2,'2022-12-18','78507577','Louise','louise@abc.com');
-- Get a reservations with any id, fx 5
SELECT * from Reservation WHERE id=5;
-- Update a Reservation with any id, fx 5. Update any attribute fx the title or multiple attributes
UPDATE Reservation SET contact_phonenumber='91234567', number_of_guests=30 WHERE id=5;
-- Delete a Reservation with any id, fx 5
DELETE FROM Reservation WHERE id=5;
SELECT * FROM Reservation;

-- Get all Review
SELECT * FROM Review;
-- Add a new Review
INSERT INTO Review (`id`,`title`,`description`,`meal_id`,`stars`,`created_date`) VALUES (5,'better','The food was good but not the best.',2,3,'2022-10-28');
-- Get a Review with any id, fx 5
SELECT * from Review WHERE id=5;
-- Update a Review with any id, fx 5. Update any attribute fx the title or multiple attributes
UPDATE Review SET title='Price worthy', description='not the best but according to price it was nice' WHERE id=5;
-- Delete a Review with any id, fx 5
DELETE FROM Review WHERE id=5;
SELECT * FROM Review;

-- Additional queries
-- Get meals that has a price smaller than a specific price fx 90
SELECT `id`, `title`,  `price` FROM Meal WHERE `price`<90;
-- Get meals that still has available reservations
SELECT `id`, `title`, `when` FROM Meal WHERE `when`>(SELECT NOW());
-- Get meals that partially match a title. Rød grød med will match the meal with the title Rød grød med fløde
SELECT `id`, `title`,`location`,`price` FROM Meal WHERE `title` LIKE '%Rød grød med%';
-- Get meals that has been created between two dates
SELECT `id`, `title`, `created_date` FROM Meal WHERE (`created_date` BETWEEN '2022-12-14' AND '2022-12-28');
-- Get only specific number of meals fx return only 5 meals
SELECT `id`, `title`, `created_date` FROM Meal WHERE (`created_date` BETWEEN '2022-12-14' AND '2022-12-28') ORDER BY `created_date` DESC LIMIT 5;
-- Get the meals that have good reviews
SELECT Meal.id, Meal.title,Review.stars FROM Meal INNER JOIN Review on Meal.id=Review.meal_id WHERE Review.stars >=4;
-- Get reservations for a specific meal sorted by created_date
SELECT `id`,`number_of_guests`, `meal_id`, `created_date` FROM Reservation WHERE `meal_id`=1 ORDER BY `created_date` DESC;
-- Sort all meals by average number of stars in the reviews
SELECT Meal.id, Meal.title, AVG(Review.stars) as 'Average Stars' FROM Meal INNER JOIN Review on Meal.id=Review.meal_id GROUP BY Meal.id ORDER BY AVG(Review.stars) DESC;