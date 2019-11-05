var db = require('../models');

module.exports = function(app) {

	//get all parents
  app.get('/api/Parent', function(req, res) {
    db.Parent.findAll({
      include: [db.Child]
    }).then(function(dbParent) {
      JSON.stringify(dbParent);
      res.json(dbParent);
    });
  });

	//get one parent
  app.get('/api/Parent/:id', function(req, res) {
    db.Parent.findOne({
      where: {id: req.params.id},
      include: [db.Child]
    }).then(function(dbParent) {
      res.json(dbParent);
    });
  });

	//register parednt and move on to add kid form
  app.post('/api/Parent', function(req, res) {
    db.Parent.create(req.body).then(function(dbParent) { 
			//console.log(dbParent);
      //res.json(dbParent);
      res.render("newchild",{pid: dbParent.id});
    });
  })

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
