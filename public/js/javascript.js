function mycourse(){
    var x = document.getElementById('grade').value;
     
if( x==='sci11'){
       document.getElementById('course-sci').style.display = 'block';
       document.getElementById('course-mgm').style.display = 'none';
      
      
   }else if(x ==='mgm11'){
    document.getElementById('course-mgm').style.display = 'block';
    document.getElementById('course-sci').style.display = 'none';
   }

   else if(x==='none'){
    document.getElementById('course-mgm').style.display = 'none';
    document.getElementById('course-sci').style.display = 'none';
    document.getElementById('coursebtn').style.display ='none'
   }   
}
function search(){
  document.getElementById('parentSearch').style.display ='block'
}    
