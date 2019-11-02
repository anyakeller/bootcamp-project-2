module.exports = function(app) {

    app.get('/newParent', function(req, res) {
        res.render('newParent');
    });

    app.get('/newChild', function(req, res) {
        res.render('newChild');
    });

    app.get('/scheduleChild', function(req, res) {
        res.render('scheduleChild');
    });
}