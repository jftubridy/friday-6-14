// Business Logic
var HAL = function(inputNumber) {
var three = 3;
var two = 2;
var one = 1;
// debugger;
  if(isNaN(inputNumber)) {
    return("I Think you're drunk Dave.");
  } else if (inputNumber <=0) {
    return("A number we can use Dave.");
  }
  var numToString = inputNumber.toString();
  var numArray = numToString.split('');
  for (index = 0; index < numArray.length;) {
    if (numArray[index] == 3){
      return " I'm Sorry, Dave, I'm afraid I can't do that.";
      break;
    }  else {
      index++;
    }
  }
  for (index = 0; index < numArray.length;) {
    if (numArray[index] == 2) {
      return 'Boop!';
      break;
    } else {
      index ++;
    }
  }
  for (index = 0; index < numArray.length;) {
    if (numArray[index] == 1) {
      return 'Beep!';
      break;
    } else {
      index ++;
    }
  }
  return '  '+inputNumber + '?';
}




// User Interface Logic
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    var response = HAL(inputNumber);
  $("#response").append("<li>"+response+"</li>"+' ');

});
});
