var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

//-------------------------------1.1---------------------------------
router.get('/brew', function(req, res, next) {
  var q = req.query.drink;
  if(q==='tea')
  {
    res.send('A delicuous cup of tea!');
  }
  else if( q==='coffee')
  {
    res.sendStatus('418');
  }
  else
  {
    res.sendStatus('400');
  }
});

//-------------------------------1.2---------------------------------
var post_count = 0;
var message;
var previous_message;

router.post('/pass-it-on', function(req, res, next) {

  previous_message = message;
  if(post_count === 0)
  {
    message = req.body.message;
    post_count++;
    res.send('first');
  }
  else if (Object.keys(req.body).length === 0)
  {
   res.sendStatus('400');
  }
  else
  {
   message = req.body.message;
   res.send(previous_message);
  }

});

//-------------------------------1.3---------------------------------
router.post('/combine', function(req, res, next) {
  var suffix = req.body.suffix;
  var lines = req.body.lines;
  var result = '';
  for(var i = 0; i < lines.length; i++)
  {
    result = result+ lines[i] + suffix + '\n';
  }
  res.send(JSON.stringify(result));

});

