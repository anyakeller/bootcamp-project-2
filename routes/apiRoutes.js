var db = require("../models");

module.exports = function(app) {
    // OUR ROUTES
    // "/api/children" For the database of kids
    // "/api/parents" for the database of parents
    // "/IDKHELP" for the secure login for admins

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
