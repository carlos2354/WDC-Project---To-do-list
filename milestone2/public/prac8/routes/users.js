var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

//-------------------------------1.4---------------------------------

var post = [];

router.post('/addpost',function(req, res, next){
    post.unshift({
        title: req.body.title,
        content: req.body.content
    });
    res.end();
});

router.get('/getposts', function(req, res, next) {
    if("n" in req.query)
    {
        var n;
        if(post.length < req.query.n)
        {
            n = post.length;

        }
        else
        {
            n = req.query.n;
        }

        var postn = [];
        for(var i = 0; i < n; i++)
        {
            postn.push(post[i]);
        }

        res.json(postn);
    }
    else
    {
        res.json(post);
    }

});

router.get('/getposts/id/:n', function(req, res, next) {
    var n = post.length - 1;
    res.json(post[n -req.params.n]);
});


module.exports = router;