var express = require ('express');
var app = express();
var PORT = 3000;



var middleware = {
  requireAuthentication: function(req,res,next) {
    console.log('private route hit!');
    next();
  },
  logger: function(req,res,next) {
    var d = new Date().toString();
    console.log('Request: ' + d + ' ' + req.method + ' ' + req.originalUrl);
    next();
  }
};

// app.use(middleware.requireAuthentication);

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication,function(req,res) {
  res.send ('About');
});

app.use(express.static(__dirname + '/public/'));

// console.log(__dirname + '/public/');

app.listen(PORT, function() {
  console.log('Express server has been started on port ' + PORT + '!');
});
