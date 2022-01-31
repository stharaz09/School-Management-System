const con = require('../../database_setup/database')

exports.classroom=(req,res)=>{       
    console.log("At Get class");
    const sql="SELECT * FROM teacher"
    con.query(sql,(err,result)=>{
        if(!err){
                res.render('classroom',{teachresult: result})
        }else{
                console.log(err);
        }
    })      
}

exports.classroomInfo = (req,res)=>{
        console.log("At Post Classroom");
        console.log(req.body);
        res.redirect('/cls_std')
}