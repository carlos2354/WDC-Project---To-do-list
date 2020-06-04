var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

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