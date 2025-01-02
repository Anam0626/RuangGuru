-- TODO: answer here
SELECT 
    reports.id AS id,
    students.fullname AS fullname,
    students.class AS class,
    students.status AS status,
    reports.study AS study,
    reports.score AS score
FROM students
LEFT JOIN reports ON students.id = reports.student_id 
WHERE students.status = 'active' AND reports.score < 70
ORDER BY reports.score ASC