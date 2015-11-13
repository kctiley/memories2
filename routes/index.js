var express = require('express');
var router = express.Router();
var pg = require('pg');
var conString = process.env.DATABASE_URL;
console.log(conString);

router.post('/api/v1/memories', function(req, res, next) {
  console.log(req.body)
  pg.connect(conString, function(err, client, done) {
    if (err) {
      return console.error('error fetching client from pool', err);
    }
    client.query('INSERT into memories(old_days, these_days, year) VALUES($1,$2,$3) ', [req.body.data.attributes.old_days, req.body.data.attributes.these_days, req.body.data.attributes.year], function(err, result) {
      done();
      if (err) {
        return console.error('error running query', err);
      } else {
        res.render('index', {});
      }
    });
  });
});

module.exports = router;