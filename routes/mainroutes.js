module.exports = function(app) {

app.get('/', function(req, res) {
      res.render('index');})

  app.get('/genKids', function(req, res) {
    res.render('testdbPostRoutes');
  });
}