const con = require('../../database_setup/database')

// ------ Student ----------
exports.teacher = (req,res)=>{
    res.render('teacher',{studentInfo:'t'})
}

exports.teacherinfo = (req,res)=>{
    console.log("I am at post teacher");
    res.render('home')
}