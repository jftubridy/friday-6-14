// Business Logic
var HAL = function(number) {
var three = 3;
var two = 2;
var one = 1;  //debugger;
  if(isNaN(number)) {
    alert("Please enter a valid number");
  } else if (number <=0) {
    alert("Please enter a number that is higher than 0");
  }
  // (number.includes('3',0)) {
   //   return "I'm Sorry, Dave, I'm afraid I can't do that.";
    // } else if (number.includes('2',0)) {
    //   return "Boop!";
    // } else if (number.includes('1',0)) {
    //   return "Beep!";
    // } else {
    //   return number;
    // }


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






// User Interface Logic
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
    var number = parseInt($("input#number").val());
    // var numArray = number.split('');
    // for (var i = 0; i <= numArray.length ; i++){
    //   if (three.includes(numArray[i])){
    //     return "I'm Sorry, Dave, I'm afraid I can't do that.";
    //   }else if (two.includes(numArray[i])){
    //     return "Boop!";
    //   }else if (one.includes(numArray[i])){
    //     return "Beep!";
    //   }else {
    //     return (numArray.join(''));

  //}

    var response = HAL(number);
  $("#response").append("<li>"+response+"</li>");

});
});
