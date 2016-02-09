var questions = require('./../controllers/questions.js');
var answers = require('./../controllers/answers.js');

module.exports = function(app){
  app.post('/add-question', questions.addNew);
  app.get('/get-questions', questions.getAll);
  app.get('/get-question/:id', questions.getQuestionById);
  app.post('/add-answer', answers.addNew);
  app.post('/add-like', answers.addLike);
};
