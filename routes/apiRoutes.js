var db = require("../models");

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
    app.get("/api/examples", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.json(dbExamples);
        });
    });

    // Create a new example
    app.post("/api/examples", function(req, res) {
        db.Example.create(req.body).then(function(dbExample) {
            res.json(dbExample);
        });
    });

    // Delete an example by id
    app.delete("/api/examples/:id", function(req, res) {
        db.Example.destroy({ where: { id: req.params.id } }).then(function(
            dbExample
        ) {
            res.json(dbExample);
        });
    });
};
