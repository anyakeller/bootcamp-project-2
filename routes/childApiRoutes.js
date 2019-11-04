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

  app.get('/api/child', function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Child.findAll({
      include: [db.Parent]
    }).then(function(dbChild) {
      JSON.stringify(dbChild);
			res.json(dbChild);
    });
  });
  app.get('/api/child/:id', function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Child.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Parent]
    }).then(function(dbChild) {
      JSON.stringify(dbChild);
			res.json(dbChild);
    });
  });



  app.post('/api/child', function(req, res) {
    db.Child.create(req.body).then(function(dbChild) {
			console.log(dbChild);
      res.json(dbChild);
    });
  });

  app.delete('/api/child/:id', function(req, res) {
    db.Child.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbChild) {
      res.json(dbChild);
    });
  });
};
