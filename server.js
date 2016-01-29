var express = require ('express');
var app = express();
var middleware = require('./middleware.js');
var PORT = 3000;





// app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication,function(req,res) {
  res.send ('About!!!');
});

app.use(express.static(__dirname + '/public/'));

// console.log(__dirname + '/public/');

app.listen(PORT, function() {
  console.log('Express server has been started on port ' + PORT + '!');
});
