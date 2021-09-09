var Question = function(question, answers, correct){
   this.question = question;
   this.answers = answers;
   this.correct = correct;
}

Question.prototype.displayQuestion = function() {
   console.log(this.question);

   for (var i = 0; i < this.answers.length; i++){
      console.log(i + ': ' + this.answers[i]);
   }
}

Question.prototype.checkAnswer = function(ans, callback){
      var sc;
      if(ans === this.correct){
      console.log('Correct answer!');
      sc = callback(true);
   } else {
      console.log('Wrong answer. Try again!');
      sc = callback(false);
   }
   this.displayScore(sc);
}

Question.prototype.displayScore = function(score) {
   console.log('Your current score is ' + score);
   console.log('--------------------------------------');
}

var q1 = new Question('JavaScript is object oriented programming?', ['True', 'False', 'None'], 0);
var q2 = new Question('How do you describe JavaScript?', ['Boring', 'Fun', 'Difficult'], 1);
var q3 = new Question('Do you love computer programming?', ['Yes', 'No', 'None'], 0);

var arrayQuestion = [ q1, q2, q3];

// A function that Updates and returns sc(score)
function score(){
   var sc = 0;
   return function(correct){
      if(correct){
         sc++;
      }
      return sc;
   }
}
var keepScore = score();


function nextQuestion(){

   var n = Math.floor(Math.random() * arrayQuestion.length);
   arrayQuestion[n].displayQuestion();

   var ansInput = (prompt('Please select the correct answer. Use number'));
   
   if(ansInput !== 'exit'){
      arrayQuestion[n].checkAnswer(parseInt(ansInput), keepScore);
      nextQuestion();
   }
}
nextQuestion()