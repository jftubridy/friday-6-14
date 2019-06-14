// Business Logic
var HAL = function(inputNumber) {
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
    }  else {
      index++;
    }
  }
  for (index = 0; index < numArray.length;) {
    if (numArray[index] == 2) {
      return 'Boop!';
    } else {
      index ++;
    }
  }
  for (index = 0; index < numArray.length;) {
    if (numArray[index] == 1) {
      return 'Beep!';
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
