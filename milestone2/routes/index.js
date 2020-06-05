var express = require('express');
var router = express.Router();

/* GET home page. */

module.exports = router;

router.get('/', function(req, res, next) {
  res.sendFile('/home/ubuntu/wdc/project/milestone2/public/landing.html');
});

router.get('/login', function(req, res, next) {
  res.sendStatus(200);
});

router.get('/signup', function(req, res, next) {
  res.sendStatus(200);
});

router.get('/dbtest', function(req,res,next){

    req.pool.getConnection(function(err,connection){
        if(err){
            res.sendStatus(500);
            return;
        }

        var query = "SHOW TABLES";
        connection.query(query, function(err,rows,fields){
            connection.release();
            if(err){
                res.sendStatus(500);
                return;
            }
            res.json(rows);
        });
    });
});
