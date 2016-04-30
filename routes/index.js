var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

roter.get('/quizzes', quizController.index);
roter.get('/quizzes/:quizId(\\d+)', quizController.show);
roter.get('/quizzes/:quizId(\\d+)/check', quizController.check);

module.exports = router;
