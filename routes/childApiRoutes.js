var db = require('../models');

module.exports = function(app) {
  //get all children
  app.get('/api/child', function(req, res) {
    db.Child.findAll({
      include: [db.Parent, db.Schedule]
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
    db.Child.findAll({
      where: {id: req.params.id},
      include: [db.Parent, db.Schedule]
    }).then(function(dbChild) {
      JSON.stringify(dbChild);
      res.json(dbChild);
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
      res.render('schedulechild', {
        childid: dbChild.id,
        pid: req.body.ParentId
      });
    });
  });

	app.post('/api/child/:id', function(req, res) {
    //console.log(req.body);
		var daysOfWeek = ["monday","tuesday","wednesday","thursday","friday"];
		var daysToUpdate = {};
		for (var i=0;i<daysOfWeek.length;i++){
			if(daysOfWeek[i] in req.body && req.body[daysOfWeek[i]]==="on") daysToUpdate[daysOfWeek[i]] = true;
			else daysToUpdate[daysOfWeek[i]]=false;
		}
		//res.json(req.body);
		
    db.Child.update(req.body,{where:{id:req.params.id}}).then(function(dbChild) {
		});
    db.Schedule.update(daysToUpdate,{where:{ChildId:req.params.id}}).then(function(dbChild) {
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
