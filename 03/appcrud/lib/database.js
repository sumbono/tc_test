var mysql=require('mysql');
 var connection=mysql.createConnection({
   host:'localhost',
   user:'tokocrypto',
   password:'123456',
   database:'users'
 });
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
module.exports = connection;