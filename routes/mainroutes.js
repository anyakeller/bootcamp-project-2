var db = require('../models');

module.exports = function(app) {
  app.get('/', function(req, res) {
    db.Schedule.findAll({include: [db.Child]}).then(function(dbSchedule) {
      res.render('index', {schedules: dbSchedule});
    });
  });

  app.get('/genKids', function(req, res) {
    res.render('testdbPostRoutes');
  });

  app.get('/childprofile/:id', function(req, res) {
    db.Child.findOne({
			where:{id:req.params.id},
			include: [db.Schedule]
    }).then(function(dbChild) {
			res.render("childprofile",{child:dbChild,days:dbChild.Schedule});
			//res.json(dbChild.Schedule);
    });
  });
};
