var db = require('../models');

module.exports = function(app) {
  // OUR ROUTES
  // "/api/children" For the database of kids
  // GET - gets kids
  // POST - adds kid from form
  // "/api/parents" for the database of parents
  // GET - gets parents
  // POST - adds parents from form
  // "/authenticateAdmin" for the secure login for admins
  // GET - for verifying login
  // POST - for creating account

  // Get all examples

  app.get('/api/Parent', function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Parent.findAll({
      include: [db.Child]
    }).then(function(dbParent) {
      JSON.stringify(dbParent);
			res.json(dbParent);
    });
  });

  app.get('/api/Parent/:id', function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Parent.findOne({
      where: {id: req.params.id},
      include: [db.Child]
    }).then(function(dbParent) {
      db.Child.getChildren().then(d => console.log('\n\n\n\n', d));
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
