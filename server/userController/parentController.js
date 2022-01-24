const con = require('../../database_setup/database')

//  ----------- Add Parent ---------------
exports.parent = (req,res)=>{
    res.render('parentdetails', {studentInfo:'p'});
}

exports.parentinfo = (req,res)=>{
   const {pemail,ppassword,pfname,pmname,plname,pdob,pphone,pmobile,pstatus,pdate} = req.body;
   const sql = 'INSERT INTO parent (email,password,fname,mname,lname,dob,phone,mobile,status,last_login_date) VALUES (?,?,?,?,?,?,?,?,?,?)'
   con.query(sql,[pemail,ppassword,pfname,pmname,plname,pdob,pphone,pmobile,pstatus,pdate],(err,value)=>{
        if(!err){
            console.log('Parent Added Successfully');
            res.render('home')
        }else{
            console.log(err);
        }
   })
}