'use strict';

var TimeStamp = require(process.cwd() + '/app/controllers/timeStamp.server.js');

module.exports = function (app) {
  
  var timeStamp = new TimeStamp();
  
  app.route('/')
      .get(function (req, res) {
          res.sendFile(process.cwd() + '/public/index.html');
      });

  app.route('/:date')
      .get(function (req, res) {
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          res.send(timeStamp.getTimestamp(req.params.date));
      });
};
