const con = require('../../database_setup/database')

exports.grade = (req,res)=>{
    console.log('Grade Get');
    res.render('grade')
}

exports.gradeInfo =( req,res) =>{
        console.log(' I am at grade');
        console.log(req.body);
        res.redirect('/classroom');
        // res.render('course',{grade: req.body.grade })
}


exports.classroom=(req,res)=>{
    console.log("At class");
    console.log(res.body);
}

// exports.courseInfo = (req,res) =>{
    
//     const {physic, chemistry,math} = req.body
//     const value = [physic,]

//     console.log(physic);
//     // console.log(grade);
// //    con.query('INSERT INTO course (name,description, grade_id) VALUES ?',[[values, 'good', 1]], (err,result)=>{
// //        if(!err){
// //            console.log('Success');
// //        }else{
// //            console.log(err);
// //        }
// //    })
//     res.render('classroom')
// }
// exports.classroom =( req,res)=>{
        
// }





