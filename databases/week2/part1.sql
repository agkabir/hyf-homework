USE hyf_class2023;
-- add a task
insert into task (title, description, created, updated, due_date, status_id, user_id) values ('DB week 2 home work', 'Insert a new task', '2017-10-20 01:41:53', '2017-10-04 07:19:56', '2017-12-23 10:13:42', 2, NULL);
-- changing title of the created task 
UPDATE task SET title = 'updated title' WHERE id = 36;
SELECT * FROM task WHERE id = 36;
-- Change a task due date
UPDATE task SET due_date = '2023-01-19' WHERE id = 36;
SELECT * FROM task WHERE id = 36;
-- Change a task status
UPDATE task SET status_id = 1 WHERE id = 36;
SELECT * FROM task WHERE id = 36;
-- Mark a task as complete (have to set status id = 3 )
UPDATE task SET status_id = 3 WHERE id = 36;
SELECT * FROM task WHERE id = 36;
-- Delete a task
DELETE from task WHERE id = 36;
SELECT * FROM task;