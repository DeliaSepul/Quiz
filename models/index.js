var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite:
DATABASE_URL = sqlite:///
DATABASE_STORAGE = quiz.sqlite
//Usar BBDD Postgres
//DATABASE_URL = postgres://ewxwdzbktsiedb:f3ohX3A-ABn9w2SKU4aicZOFOK@ec2-174-129-18-170.compute-1.amazonaws.com:5432/d3cpu76fi9fgps

var url, storage;

if(!process.env.DATABASE_URL) {
	url = "sqlite:///";
	storage = "quiz.sqlite"; 
} else {
	url = process.env.DATABASE_URL;
	storage = process.env.DATABASE_STORAGE || "";
}

var sequelize = new Sequelize(url, {storage: storage, omitNull: true});

var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

// sequelize.sync() crea e inicializa tabla de preguntas en DB
<<<<<<< HEAD
sequelize.sync()
.then(function() { //sync() crea la tabla quiz
	return Quiz.count()
		.then(function (c) {
			if (c === 0){ //la tabla se inicializa si está vacía
				return Quiz.bulkCreate([ {question: 'Capital de Italia', answer: 'Roma'},
								         {question: 'Capital de Portugal', answer: 'Lisboa'}
									])
=======
sequelize
.sync()
.then(function() { //sync() crea la tabla quiz
	return
		Quiz
		.count()
		.then(function (c) {
			if (c === 0){ //la tabla se inicializa si está vacía
				return
					Quiz
					.bulkCreate([ {question: 'Capital de Italia', answer: 'Roma'},
								  {question: 'Capital de Portugal', answer: 'Lisboa'}
								])
>>>>>>> d417748fa44979bdefc0067bb824e81958ec24e3
					.then(function() {
						console.log('Base de datos inicializada con datos');
					});
				}
		});
}).catch(function(error){
	console.log("Error Sincronizando las tablas de la BBDD:", error);
	process.exit(1);
});


exports.Quiz = Quiz;       // exportar definición de tabla Quiz

