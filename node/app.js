var express = require('express');
var mysql = require('mysql');
var bodyparser = require('body-parser');
var app=express();

app.use(bodyparser.urlencoded({}));
var pool=mysql.createPool({
  host:"127.0.0.1",
  user:"root",
  password:"",
  database:"coco",
  port:3306
});


//查询
app.get('/', function(req, res) {
  res.setHeader('Access-Control-Allow-Origin','*');
  pool.getConnection(function(err,connection){
    if(err){
      console.log(err);
      return
    }
    var sql=`select * from houses limit 6,3`;
    connection.query(sql,function(err,data){
      if(err){
        console.log(err);
        return
      }
      console.log(data);
      res.send(data);
      connection.end()
    })
  })
});


//截取
// app.post('/sle',function (req, res) {
//     res.setHeader('Access-Control-Allow-Origin','*');
//     var id = req.body.id;
//     pool.getConnection(function(err,connection){
//         if(err){
//             console.log(err);
//             return
//         }
//         var sql=`select * from houses limit 7,3`;
//         connection.query(sql,function(err,data){
//             if(err){
//                 console.log(err);
//                 return
//             }
//             console.log(data);
//             res.send(data);
//             connection.end()
//         })
//     })
// });


app.listen(8000,function(){
  console.log("ok")
});
