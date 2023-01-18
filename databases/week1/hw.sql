USE `hyf_class2023`;

-- 1. Find out how many tasks are in the task table
SELECT COUNT(id) as 'Number of Tasks' FROM task;
--2. Find out how many tasks in the task table do not have a valid due date
SELECT COUNT(id) FROM task WHERE due_date IS NULL;
--3. Find all the tasks that are marked as done
SELECT * FROM task INNER JOIN status ON task.status_id = status.id AND status.name='Done';
--4. Find all the tasks that are not marked as done
SELECT * FROM task INNER JOIN status ON task.status_id = status.id AND status.name!='Done';
--5. Get all the tasks, sorted with the most recently created first
SELECT id,title,created FROM task ORDER BY created DESC;
--6. Get the single most recently created task
SELECT id,title,created FROM task ORDER BY created DESC LIMIT 1;
--7. Get the title and due date of all tasks where the title or description contains database
SELECT title, due_date FROM task WHERE (title like '%database%') OR (description like '%database%');
--8. Get the title and status (as text) of all tasks
SELECT task.title, status.name as 'text' FROM task INNER JOIN status ON task.status_id=status.id;
--9. Get the name of each status, along with a count of how many tasks have that status
SELECT status.name, COUNT(task.id) as 'No. of tasks' FROM status INNER JOIN task ON status.id=task.status_id GROUP BY task.status_id;
--10. Get the names of all statuses, sorted by the status with most tasks first
SELECT status.name, COUNT(task.id) as no_of_task FROM status INNER JOIN task ON status.id=task.status_id GROUP BY status.name ORDER BY
no_of_task DESC;