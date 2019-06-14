// Business Logic
var HAL = function(number) {
  //debugger;
  if(isNaN(number)) {
    alert("Please enter a valid number");
  } else if (number <=0) {
    alert("Please enter a number that is higher than 0");
  } else {
    for (var i = 0; i <= number.length; i ++) {

      }if (number == 3) {
        return "I'm Sorry, Dave, I'm afraid I can't do that.";
      } else if (number == 2) {
        return "Boop!";
      } else if (number == 1) {
        return "Beep!";
      } else {
        return number;
      }

  }
}






// User Interface Logic
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());


    var response = HAL(number);
  $("#response").append("<li>"+response+"</li>");
  });
});
