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

// maybe have index go up by one as long as its<=longList somehow put index spot into another array as a number. then print all numbers, but anything with a 3,2,1, gets swapped.

// somehow I need to get an array with the same number of spots as the value of longList (call it weirdArray)
// and then compare the weirdArray[index]+1?
// except anything with a 3,2,1(anywhere in it) gets a special response, everything else prints the number

var longHAL = function(longList) {
  alert(longList);
  for (index = 0; index < inputNumber; index++){
    if (index = 2){
      return "I'm Sorry Dave, I'm afraid I can't do that.";
    } else if (index = 1){
      return 'Boop!';
    } else if (index = 0){
      return 'Beep!';
    } else {
      return longList;
    }

  }
}



// User Interface Logic
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var inputNumber = parseInt($("input#number").val());
    var response = HAL(inputNumber);
    $("#response").append("<li>"+response+"</li>"+' ');
  });
  $("form#form2").submit(function(event){
    event.preventDefault();
    var longList = parseInt($('input#longList').val());
    var response2 =(longList);
    $('#allValues').append('<li>'+response2+'</li>'+'');
  });
});
