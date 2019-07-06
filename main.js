function check() {

var Question1 = document.quiz.Question1.value;
var Question2 = document.quiz.Question2.value;
var Question3 = document.quiz.Question3.value;
var correct = 0;

  if (Question1 == "seven"){
      correct++;
  }
  
  if (Question2 == "Dr. BabaSaheb Ambedkar") {
      correct++;
  }

   if (Question3 == "15th August 1947"){
       correct++;
   }

   var messages = ["Great Job!", "That's Not Bad!", "Better Luck Next Time!"];
   var pictures = ["img/win.gif" , "img/meh.gif" , "img/lose.gif"];
   var range;
     
   if (correct < 1) {
       range= 2;
   }

   if (correct > 0 && correct < 3){
      range =1;
   }

   if (correct > 2) {
       range = 0;
   }


document.getElementById("after_submit").style.visibility = "visible";


document.getElementById("messages").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("picture").src= pictures[range];
}