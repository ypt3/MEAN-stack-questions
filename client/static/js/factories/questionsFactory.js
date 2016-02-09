// var myApp = angular.module("myApp");
//
// myApp.factroy("QuestionsFactory", function($http){
//   var factroy = {};
//   factroy.showQuestions = function(callback){
//     $http.get('/get-questions').success(function(response){
//       // console.log(response);
//       callback(response);
//     });
//   };
//
//   factroy.addQuestion = function(question, callback){
//     $http.post('/add-question', question).success(function(response){
//       // console.log(response);
//       callback(response);
//     });
//   };
//
//   factory.getQuestionById = function(questionId, callback){
//     $http.get('/get-question/'+questionId).success(function(response){
//       // console.log(response);
//       callback(response);
//     });
//   };
//
//   return factory;
// });

var app = angular.module("app");

app.factory("QuestionsFactory", function($http){
  var factory = {};

  factory.showQuestions = function(callback){
    $http.get('/get-questions').success(function(response){
      callback(response);
    });
  };

  factory.addQuestion = function(question, callback){
    $http.post('/add-question', question).success(function(response){
      callback(response);
    });
  };

  factory.getQuestionById = function(questionId, callback){
    $http.get('/get-question/'+questionId).success(function(response){
      callback(response);
    });
  };
  return factory;
});
