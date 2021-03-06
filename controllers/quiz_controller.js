var models = require('../models');

//Autoload el quiz asociado a :quizId
exports.load = function(req, res, next, quizId) {
	models.Quiz.findById(quizId)
		.then(function(quiz) {
			if(quiz) {
				req.quiz = quiz;
				next();
			} else {
				next(new Error('No existe quizId=' + quizId));
			}
		}).catch(function(error) { next(error); });
};

//GET /quizzes
exports.index = function(req, res, next){
	if(req.url == '/quizzes.json'){
		var body = [];
		models.Quiz.findAll() //Busca la primera pregunta
		.then(function(quizzes) {
			for (i=0; i<=(quizzes.length-1); i++){
				var id = quizzes[i].id;
				var question = quizzes[i].question;
				var answer = quizzes[i].answer;
				body.push( { id: id, question: question, answer: answer} );
			}
			res.json(body);	
		}).catch(function(error) { next(error); });
	}else if(req.query.search == undefined){
		models.Quiz.findAll() //Busca la primera pregunta
		.then(function(quizzes) {
			res.render('quizzes/index.ejs', {quizzes: quizzes});
		})
	} else{
		var search = '%' +(String(req.query.search)).replace(/\s/g,"%")+'%' || '';
		models.Quiz.findAll({where: {question: {$like: search }}}) 
		.then(function(quizzes) {
			res.render('quizzes/index.ejs', {quizzes: quizzes});
		}).catch(function(error) { next(error); });
	} 
};

//GET /quizzes/:id
exports.show = function(req, res, next){
	if(req.url == '/quizzes/'+ req.quiz.id +'.json'){
		models.Quiz.findAll() //Busca la primera pregunta
		.then(function(quiz) {
				var id = req.quiz.id;
				console.log('id', id );
				var question = req.quiz.question;
				var answer = req.quiz.answer;
				var body = ( { id: id, question: question, answer: answer} );
			res.json(body);
			
		}).catch(function(error) { next(error); });
	}else{
		models.Quiz.findById(req.params.quizId) //Busca la primera pregunta
		.then(function(quiz) {
			if(quiz){
				var answer = req.query.answer || '';
				res.render('quizzes/show', {quiz: req.quiz, answer: answer});
			} else {throw new Error('No existe ese quiz en la BBDD'); }
		}).catch(function(error) { next(error); });
	}
};


//GET /quizzes/:id
exports.check = function(req, res){
	models.Quiz.findById(req.params.quizId) //Busca la primera pregunta
	.then(function(quiz) {
		if(quiz){
			var answer = req.query.answer || '';
			var result = answer === req.quiz.answer ? 'Correcta' : 'Incorrecta';
			res.render('quizzes/result', {quiz: req.quiz, result: result, answer: answer});
		} else {throw new Error('No existe ese quiz en la BBDD'); }
		
	}).catch(function(error) { next(error); });
};


