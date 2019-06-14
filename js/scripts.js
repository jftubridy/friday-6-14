// Business Logic
var HAL = function(inputNumber) {
var three = 3;
var two = 2;
var one = 1;
// debugger;
  if(isNaN(inputNumber)) {
    alert("Please enter a valid number");
  } else if (inputNumber <=0) {
    alert("Please enter a number that is higher than 0");
  }
 //alert(typeof(inputNumber));
    var numToString = inputNumber.toString();
    //alert(typeof(numToString));
    var numArray = numToString.split('');
    //alert(typeof(numArray));
    for (index = 0; index < numArray.length;) {
      if (numArray[index] == 3){
        return "I'm Sorry, Dave, I'm afraid I can't do that.";
        break;
      }  else {
        index++;
      }
    }
    for (index = 0; index < numArray.length;) {
      if (numArray[index] == 2) {
        return "Boop!";
        break;
      } else {
        index ++;
      }
    }
    for (index = 0; index < numArray.length;) {
      if (numArray[index] == 1) {
        return "Beep!";
        break;
      } else {
        index ++;
      }
  }
  return inputNumber;
}




// User Interface Logic
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    var response = HAL(inputNumber);
  $("#response").append("<li>"+response+"</li>");

});
});
