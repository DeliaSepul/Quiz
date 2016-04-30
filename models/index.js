var path = require('path');

// Cargar Modelo ORM
var Sequelize = require('sequelize');

// Usar BBDD SQLite:
//DATABASE_URL = sqlite:///
//DATABASE_STORAGE = quiz.sqlite
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