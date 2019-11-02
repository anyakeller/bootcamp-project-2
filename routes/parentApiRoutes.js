var db = require('../models');

module.exports = function(app) {

  app.get('/api/Parent', function(req, res) {

    db.Parent.findAll({
      include: [db.Child]
    }).then(function(dbParent) {
      JSON.stringify(dbParent);
			res.json(dbParent);
    });
  });

  app.get('/api/Parent/:id', function(req, res) {
    db.Parent.findOne({
      where: {id: req.params.id},
      include: [db.Child]
    }).then(function(dbParent) {
      res.json(dbParent);
    });
  });

  app.post('/api/Parent', function(req, res) {
    db.Parent.create(req.body).then(function(dbParent) { 
			console.log(dbParent);
			res.json(dbParent);
    });
  });
  app.delete('/api/Parent/:id', function(req, res) {
    db.Parent.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbParent) {
      res.json(dbParent);
    });
  });
};
