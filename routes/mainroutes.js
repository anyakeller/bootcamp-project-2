module.exports = function(app) {
  app.get('/', function(req, res) {
			res.render('index');

  });

  app.get('/genKids', function(req, res) {
    res.render('testdbPostRoutes');
  });

  app.get('/childprofile', function(req, res) {
    res.render('testdbPostRoutes');
  });
};
