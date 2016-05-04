var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

<<<<<<< HEAD
//Autoload de rutas que usen :quizId
router.param('quizId', quizController.load); //autoload :quizId

//DEfinición de rutas de /quizzes
router.get('/quizzes', quizController.index);
router.get('/quizzes/:quizId(\\d+)', quizController.show);
router.get('/quizzes/:quizId(\\d+)/check', quizController.check);
=======
roter.get('/quizzes', quizController.index);
roter.get('/quizzes/:quizId(\\d+)', quizController.show);
roter.get('/quizzes/:quizId(\\d+)/check', quizController.check);
>>>>>>> d417748fa44979bdefc0067bb824e81958ec24e3

module.exports = router;
