var factorial = function(number) {
  if (number == 0) {
    return 1;
  }
  for (var index = number; --index;) {
    number *= index;
  };
  return number;
};

// RECURSIVE FORMAT
// var factorial = function(number) {
//   if(number == 0) {
//     return 1
//   } else {
//     return number * factorial(number - 1);
//   }
// }


$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    var number_s = ($("input#number").val());
    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });
});
