USE hyf_class2023;
-- Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.id, task.title, user.email FROM task INNER JOIN user ON task.user_id = user.id WHERE user.email LIKE '%@spotify.com';
-- Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.id, task.title, task.created, user.name FROM task
INNER JOIN status ON task.status_id = status.id
INNER JOIN user ON task.user_id = user.id
WHERE status.name='Not started' AND user.name='Donald Duck';
-- Get all the tasks for 'Maryrose Meadows' that were created in september (hint: month(created)=month_number)
SELECT task.id, task.title, task.created, user.name FROM task
INNER JOIN user ON task.user_id = user.id
WHERE MONTH(task.created)=9 AND user.name='Maryrose Meadows';
-- Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november, etc.
SELECT MONTH(created) as 'Month Number', count(id) as 'No of tasks by month'
FROM task GROUP BY MONTH(created);