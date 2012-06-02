var express=require('express');
var app = express.createServer();
app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);