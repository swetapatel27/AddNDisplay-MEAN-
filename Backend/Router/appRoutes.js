var express = require('express');
var mongojs = require('mongojs');
var ObjectId = require('mongodb').ObjectID;
var router = express.Router();
var db = mongojs('student', ['student']);

router.get('/', (req, res, next) => {

    db.student.find({}, (err, data) => {
        if (!err) {
            res.status(200).json({
                msg: data
            });
        } else {
            res.status(500).json({
                msg: err
            });
        }

    });

});


router.post('/addstud', (req, res) => {
    var name = req.body.name;
    var pswd = req.body.pswd;


    db.student.save({
        "name": name,
        "pswd": pswd
    }, (err, data) => {
        if (!err) {
            res.status(200).json({
                msg: "successfully added"
            })
        } else {
            res.status(500).json({
                msg: err
            });
        }
    });
});

//update

router.put('/update', (req, res) => {
    db.student.update({
        _id: ObjectId(req.body._id)
    }, {
        $set: {
            name: req.body.name
        }
    }, (err, data) => {

        if (!err) {
            res.status(200).json({
                "msg": data
            });
        } else {
            res.status(200).json({
                "msg": err
            });
        }
    });
})


//delete
router.delete('/delstud/:id', (req, res) => {

    var t = req.params.id.toString();


    db.student.remove({
        _id: ObjectId(t)
    }, (err, msg) => {
        if (!err) {
            res.status(200).json({
                msg: msg
            });
        } else {
            res.status(500).json({
                msg: err
            });
        }
    })
})
module.exports = router;