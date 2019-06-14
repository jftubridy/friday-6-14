// Business Logic
function HAL(number) {

  if(isNaN(number)) {
    alert("Please enter a valid number");
  } else if (number <=0) {
    alert("Please enter a number that is higher than 0");
  } else {
    for (var index = num1; num1 <= num2; num1 += incr) {

    }if (number == 3) {

    } else if (number == 2) {

    } else if (number == 1) {

    } else {

    }

}
}





var number;
// User Interface Logic
$(document).ready(function(){
  $("form#userInput").submit(function(event){
    event.preventDefault();
  number = parseInt($("input#number").val());

  response = (number);
  $("#response").append("<li>"+response+"</li>");
});
});
