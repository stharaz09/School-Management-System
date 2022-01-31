const con = require('../../database_setup/database')


// ------ Student ----------
exports.student = (req,res)=>{ 
    const sql = "SELECT * FROM parent";
    con.query(sql,(err,result)=>{
        if(!err){
            res.render('studentdetails',{studentInfo:'s', parentdetails: result});
        }else{
            console.log(err);
        }
    })   
    }

exports.studentinfo = (req,res)=>{
    const {semail, spassword, sfname, smname, slname,sdob, sphone, smobile, sstatus, sdate,parent} = req.body;
    sql='INSERT INTO student (email, password, fname, mname, lname,dob, phone, mobile, status, last_login_date,parent_id) VALUES (?,?,?,?,?,?,?,?,?,?,?)';
    con.query(sql,[semail, spassword, sfname, smname, slname,sdob, sphone, smobile, sstatus, sdate,parent],(err,result)=>{
        if(!err){
            console.log('Data insert Successful to the database');
            res.render('home')
        }else{
            console.log(err);
        }
    })
    console.log("I am at post student");
    
}