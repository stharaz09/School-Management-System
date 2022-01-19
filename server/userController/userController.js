const con = require('../../database_setup/database')

const parent = require('../../parent');

// console.log(parent[0].fname);

exports.index = (req,res)=>{
    con.query('SELECT * FROM parent',(err,result)=>{
        {!err? console.log(result): console.log(err)}
    })
    res.send('Hello World!!');
}

exports.parentinfo = (req,res)=>{
    sql = 'INSERT INTO parent (email,password,fname,mname,lname,dob,phone,mobile,status,last_login_date) VALUES (?,?,?,?,?,?,?,?,?,?) ';
    con.query(sql,[parent[1].email,parent[1].password,parent[1].fname,parent[1].mname,parent[1].lname,parent[1].dob, parent[01].phone,parent[1].mobile,parent[1].status,parent[1].last_login_date],
        (err,result)=>{
            {!err? console.log(result): console.log(err)} 
        
        })
        res.redirect('/')
    }

