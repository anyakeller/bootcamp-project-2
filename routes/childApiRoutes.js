var db = require('../models');

module.exports = function(app) {
	//get all children
  app.get('/api/child', function(req, res) {
    db.Child.findAll({
      include: [db.Parent]
    }).then(function(dbChild) {
      JSON.stringify(dbChild);
      res.json(dbChild);
    });
  });

	//get child by id
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
	

	// schedule child form
  app.post('/api/child/schedule/:childid', function(req, res) {
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
      {where: {id: req.params.childid}} ).then(result => {
      console.log('result');
      console.log(result);
      db.Child.findOne({where: {id: req.params.childid}}).then(result => {
        res.render('addanotherchildprompt.handlebars', {pid: result.ParentId});
      });
    });
  });

	//add new child form
  app.get('/api/child/new/:pid', function(req, res) {
    res.render('newchild', {pid: req.params.pid});
  });

	//add new child
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
