var db = require('../models');

module.exports = function(app) {
  app.get('/api/child', function(req, res) {
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

  app.post('/api/child/:childid', function(req, res) {
    console.log('schedule chidld');
    //console.log(req.body);
    //console.log(req.params);
    // make the results actually helpful
    var signedUpDates = {};
    var daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    for (var i = 0; i < daysOfWeek.length; i++) {
      if (daysOfWeek[i] in req.body) signedUpDates[daysOfWeek[i]] = true;
      else signedUpDates[daysOfWeek[i]] = false;
    }
    db.Child.update(
      {signedUpDates: signedUpDates},
      {where: {id: req.params.childid}},
      result => {
        console.log(result);
        res.json(result);
      }
    );
  });

  app.post('/api/child', function(req, res) {
    //console.log(req.body);
    db.Child.create(req.body).then(function(dbChild) {
      console.log(dbChild);
      //res.json(dbChild);
      res.render('schedulechild', {childid: dbChild.id});
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
