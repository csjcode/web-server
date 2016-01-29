
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


module.exports = middleware;
