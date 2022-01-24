const con = require('../../database_setup/database')

exports.classroom=(req,res)=>{
    console.log("At Get class");
       res.render('classroom')
}

exports.classroomInfo = (req,res)=>{
        console.log("At Post Classroom");
        res.redirect('/cls_std')
}