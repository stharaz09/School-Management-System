const con = require('../../database_setup/database')


// ------ Student ----------
exports.student = (req,res)=>{
    
    res.render('studentdetails',{studentInfo:'s'})
}

exports.studentinfo = (req,res)=>{
    console.log(req.body);
    sql='select * from parent where mobile=?'
    con.query(sql,[''],(err,result)=>{
        if(!err){
            console.log(result);
        }else{
            console.log(err);
        }
    })
    console.log("I am at post student");
    res.render('home')
}