
const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const config = require('./config')
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '12345',
  database : 'course_work'
});

app.use(express.static(__dirname + '/frontend'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.listen(config.PORT, () => {
  db.connect((error) => {
    if (error) {
      throw error;
    }
    console.log('MySql connected...');
  });
  console.log(`Server started on port ${config.PORT}`);
});

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/test', (req, res) => {  
  if (req.body.subjectsId.length < 3) {
    res.send({
      error: true,
      message: 'Заполните данные как минимум по трем предметам'
    });
  } else {
    let sql = `
      SELECT T1.id, points, FLOOR(points/LENGTH(T1.id)) as points_average, T0.university, T0.un_long_name, T0.facult, T0.facult_long_name, T0.name, sub_1, sub_2, sub_3, sub_4, subject_1, subject_2, subject_3, subject_4
        FROM 
        (SELECT  specialities.subjects as main_id, points, universities.long_name as un_long_name, facults.long_name as facult_long_name,
          speciality.name, universities.short_name as university, facults.name as facult from specialities
          inner join speciality on specialities.id = speciality.id
              inner join universities on speciality.university = universities.id
          inner join facults on speciality.facult = facults.id

        ) T0,
        (SELECT subjects.id as id, subjects.subject_1 AS sub_1, subject.name as subject_1  from subjects
            inner join subject on subjects.subject_1 = subject.id
        ) T1,
        (SELECT subjects.id as id, subjects.subject_2 as sub_2, subject.name as subject_2 from subjects
            inner join subject on subjects.subject_2 = subject.id
                  
        ) T2,
        (SELECT subjects.id as id, subjects.subject_3 as sub_3, subject.name as subject_3 from subjects
          inner join subject on subjects.subject_3 = subject.id
                
        ) T3,
          (SELECT subjects.id as id,  subjects.subject_4 as sub_4, subject.name as subject_4 from subject, subjects
            where (subjects.subject_4 = subject.id)
            group by id
        ) T4
        where T0.main_id RLIKE '^[${req.body.subjectsId}]+$' and T0.main_id = T1.id and T1.id = T2.id and T1.id = T3.id and T1.id = T4.id and points <= ${req.body.totalPoints};
    `;

    db.query(sql, (err, result) => {
      if (err) throw err;
      res.send(result);
    });
  }
});
