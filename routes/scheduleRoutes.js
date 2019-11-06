var db = require('../models');

module.exports = function(app) {
  //get whole schedule
  app.get('/api/schedule', function(req, res) {
    db.Schedule.findAll({
      include: [db.Child]
    }).then(function(dbSchedule) {
      JSON.stringify(dbSchedule);
      res.json(dbSchedule);
    });
  });

  //get schedule by child id
  app.get('/api/schedule/:cid', function(req, res) {
    db.Schedule.findAll({
      where: {
        ChildId: req.params.cid
      },
      include: [db.Child]
    }).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });

  //update child
  app.post('/api/schedule/:childid', function(req, res) {
		var theSchedule = {};
		theSchedule.ChildId = req.params.childid;
		var days = ["monday","tuesday","wednesday","thursday","friday"];
		for (var i=0; i <days.length;i++){
			if (days[i] in req.body){
				if(req.body[days[i]] === 'on') {theSchedule[days[i]] = true;
				}
			}
			else{
				theSchedule[days[i]] = false;
			}
		}
    db.Schedule.findOrCreate({
      where: {ChildId: req.params.childid},
      defaults: theSchedule
    }).then(function(dbSchedule) {
      res.render("addanotherchildprompt",{pid:req.body.ParentId});
    });
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

  app.delete('/api/Schedule/:id', function(req, res) {
    db.Schedule.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbSchedule) {
      res.json(dbSchedule);
    });
  });
};
