-- -- ------- CREATE Parent TABLE ---------

-- CREATE TABLE parent (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     email VARCHAR(45) NOT NULL,
--     password VARCHAR(45) NOT NULL,
--     fname VARCHAR(45) NOT NULL,
--     mname VARCHAR(45),
--     lname VARCHAR(45) NOT NULL,
--     dob DATE NOT NULL,
--     phone VARCHAR(15),
--     mobile VARCHAR(15) NOT NULL,
--     status BOOLEAN,
--     last_login_date TIMESTAMP NOT NULL
-- );


-- -- -- --------- Student table ------------
-- CREATE TABLE student (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     email VARCHAR(45) NOT NULL,
--     password VARCHAR(45) NOT NULL,
--     fname VARCHAR(45) NOT NULL,
--     mname VARCHAR(45),
--     lname VARCHAR(45) NOT NULL,
--     dob DATE NOT NULL,
--     phone VARCHAR(15),
--     mobile VARCHAR(15),
--     date_of_join DATE,
--     status BOOLEAN,
--     last_login_date TIMESTAMP NOT NULL,
--     parent_id INT,
--      FOREIGN KEY(parent_id) REFERENCES parent(id) ON UPDATE CASCADE ON DELETE RESTRICT
-- );

-- -- ------------- Teacher Table -----------
-- CREATE TABLE teacher (
--     teacher_id INT PRIMARY KEY AUTO_INCREMENT,
--     email VARCHAR(45) NOT NULL,
--     password VARCHAR(45) NOT NULL,
--     fname VARCHAR(45) NOT NULL,
--     mname VARCHAR(45),
--     lname VARCHAR(45) NOT NULL,
--     dob DATE NOT NULL,
--     phone VARCHAR(15),
--     mobile VARCHAR(15) NOT NULL,
--     date_of_join DATE NOT NULL,
--     status BOOLEAN,
--     last_login_date TIMESTAMP NOT NULL
-- );

-- -------- Grade- Mapping for classroom and course TABLE
-- CREATE TABLE grade (
--     grade_id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(45) NOT NULL,
--     `desc` VARCHAR(45)
--  );

-- ---------- Courses Table ---------------
-- CREATE TABLE course (
--     course_id INT PRIMARY KEY AUTO_INCREMENT, 
--     name VARCHAR(45) NOT NULL,
--     description VARCHAR(45),
--     grade_id INT,
--     FOREIGN KEY(grade_id) REFERENCES grade(grade_id) ON DELETE RESTRICT ON UPDATE CASCADE
--  );



-- ---------- Class Room -----
-- CREATE TABLE classroom (
--     classroom_id INT PRIMARY KEY AUTO_INCREMENT,
--     year YEAR,
--     grade_id INT,
--     FOREIGN KEY (grade_id) REFERENCES grade(grade_id) ON DELETE RESTRICT ON UPDATE CASCADE,
--     section CHAR(2),
--     status BOOLEAN,
--     remarks VARCHAR(45),
--     teacher_id INT,
--     FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id) ON DELETE RESTRICT ON UPDATE CASCADE
    
--  );

-- ----- CLASSROOM STUDENT-----
-- CREATE TABLE classroom_student (
--     classroom_id INT ,
--     std_id INT,
--     FOREIGN KEY (classroom_id) REFERENCES classroom (classroom_id) ON DELETE RESTRICT ON UPDATE CASCADE, 
--     FOREIGN KEY (std_id) REFERENCES student (id) ON DELETE RESTRICT ON UPDATE CASCADE    
--  );

-- --------------- Attendance --------------
-- CREATE TABLE attendance (
--     date DATE NOT NULL,
--     std_id INT,
--     status BOOLEAN,
--     remark TEXT,
--     FOREIGN KEY (std_id) REFERENCES student (id) ON DELETE RESTRICT ON UPDATE CASCADE
--  );

--   -- ---------- Exam Type ---------
--  CREATE TABLE exam_type (
--      exam_type_id INT PRIMARY KEY AUTO_INCREMENT,
--      name VARCHAR(45) NOT NULL,
--      `desc` VARCHAR(45)
--   );

-- --  ------------- EXAM -------------
-- CREATE TABLE exam (
--     exam_id INT PRIMARY KEY AUTO_INCREMENT,
--     exam_type_id INT,
--     FOREIGN KEY (exam_type_id) REFERENCES exam_type (exam_type_id) ON DELETE RESTRICT ON UPDATE CASCADE,
--     name VARCHAR(45) NOT NULL,
--     start_date DATE NOT NULL
--  );

--  -- ------------------EAXM RESULT
-- CREATE TABLE exam_result (
--     exam_id INT,
--     student_id INT,
--     course_id INT,
--     marks VARCHAR(45) NOT NULL,
--     FOREIGN KEY (exam_id) REFERENCES exam (exam_id) ON DELETE RESTRICT ON UPDATE CASCADE,
--     FOREIGN KEY (student_id) REFERENCES student (id) ON DELETE RESTRICT ON UPDATE CASCADE,
--     FOREIGN KEY (course_id) REFERENCES course (course_id) ON DELETE RESTRICT ON UPDATE CASCADE
--  );