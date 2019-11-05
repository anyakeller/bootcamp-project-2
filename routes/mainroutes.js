var db = require('../models');

module.exports = function(app) {
  app.get('/', function(req, res) {
    db.Child.findAll().then(function(dbChild) {
      JSON.stringify(dbChild);
      res.render('index', {children: dbChild});
    });
  });

  app.get('/genKids', function(req, res) {
    res.render('testdbPostRoutes');
  });

  app.get('/childprofile/:cid', function(req, res) {
    db.Child.findOne({where: {id: req.params.cid}}).then(function(dbChild) {
      JSON.stringify(dbChild);
      res.render('childprofile', {child: dbChild});
    });
  });
};
