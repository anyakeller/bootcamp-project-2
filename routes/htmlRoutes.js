var db = require("../models");

module.exports = function(app) {
    //OUR ROUTES
    // "/" Landing page with login/create account options
    // "/home" page with week view and maybe a modal for the child profile
    // "/createAdminAccount" self explainitory
    // "/createParentAccount" self explainitory
    // "/registerChild"

    // Load index page
    app.get("/", function(req, res) {
        db.Example.findAll({}).then(function(dbExamples) {
            res.render("index", {
                msg: "Welcome!",
                examples: dbExamples
            });
        });
    });

    // Load example page and pass in an example by id
    app.get("/example/:id", function(req, res) {
        db.Example.findOne({ where: { id: req.params.id } }).then(function(
            dbExample
        ) {
            res.render("example", {
                example: dbExample
            });
        });
    });

    // Render 404 page for any unmatched routes
    app.get("*", function(req, res) {
        res.render("404");
    });
};
