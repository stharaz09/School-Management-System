const con = require('../../database_setup/database')

exports.searchParent = (req,res)=>{
    res.render('search',{result: ''});
    console.log("At Serach!!");
}

exports.searchParentInfo = (req,res)=>{
    console.log('At post search');
    const mobile = req.body.smobilenumber;
    const dob = req.body.dob;
    console.log(mobile + ' ' +dob);
    const sql = 'SELECT fname,mname,lname,id FROM parent WHERE mobile=? and dob=?'
    con.query(sql,[mobile,dob], (err,result)=>{
        if(!err){
            console.log(result[0].id);
            if(result.length===0){
                res.render('search',{result: 'Not Found'})
            }else{
                res.render('studentdetails', {id: result[0].id});
            }
        }else{
            console.log(err);
        }
    })
}