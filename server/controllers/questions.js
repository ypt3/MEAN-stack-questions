var mongoose = require('mongoose');
var Question = mongoose.model('Question');

module.exports = (function(){
  return {
    getAll: function(req, res){
      Question.find({}, function(err, questions){
        if (err){
          console.log(err);
        } else {
          res.json(questions);
        }
      });
    },

    getQuestionById: function(req, res){
      Question.findOne({_id: req.params.id}).populate("answers").exec(function(err, question){
        if (err) {
          console.log(err);
        } else {
          res.json(question);
        }
      });
    },

    addNew: function(req, res){
      var question = new Question({
        title: req.body.title,
        description: req.body.description,
        answers:[]
      });
      console.log(question);

      question.save(function(err){

        if(err){
          console.log(err);
        } else {
          console.log("successfully save");
          console.log(question);
          res.json({
            status: "success",
            message: "Ok"
          });
        }
      });
    }
  };
})();
