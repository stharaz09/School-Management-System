const con = require('../../database_setup/database')

// ------ Student ----------
exports.teacher = (req,res)=>{
    res.render('teacher',{studentInfo:'t'})
}

exports.teacherinfo = (req,res)=>{
    console.log("I am at post teacher");
    const {temail,tpassword,tfname,tmname,tlname,tdob,tphone,tmobile,tstatus,tdate} = req.body;
    const sql = "INSERT INTO teacher(email,password,fname,mname,lname,dob,phone,mobile,status,last_login_date) VALUES (?,?,?,?,?,?,?,?,?,?)"
    con.query(sql,[temail,tpassword,tfname,tmname,tlname,tdob,tphone,tmobile,tstatus,tdate],(err,result)=>{
        if(!err){
            console.log("Insert to teacher table!!");
            res.render('home');
        }else{
            console.log(err);
        }
    })
}