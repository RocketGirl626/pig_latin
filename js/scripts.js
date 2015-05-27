var pigLatin = function(phrase) {
  var normalSpeak = phrase;
  var pigSpeak = "";
  var firstLetter = normalSpeak.charAt(0);
  var secondLetter = normalSpeak.charAt(1);
  var thirdLetter = normalSpeak.charAt(2);
  var consonants = '';

    if (firstLetter.match(/[aeiouAEIOU]/)) {
      pigSpeak = normalSpeak.concat('-ay');
    }
    else if (firstLetter.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
      consonants = firstLetter;
      pigSpeak = normalSpeak.substr(1);
      if (secondLetter.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
        consonants = consonants.concat(secondLetter);
        pigConstruct = pigConstruct.shift();
      }
      if (thirdLetter.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
        consonants = consonants.concat(thirdLetter);
      }

    
    }

  return pigSpeak;
};

// var string = "text to split";
//     string = string.split(" ");
// var stringArray = new Array();
// for(var i =0; i < string.length; i++){
//     stringArray.push(string[i]);
//     if(i != string.length-1){
//         stringArray.push(" ");
//     }
// }
//
//
// $(document).ready(function() {
//   $("form#pigLatin").submit(function(event) {
//     var phrase = ($("input#phrase").val());
//     var number = parseInt($("input#number").val());
//     var result = factorial(number);
//
//     $(".result").text(result);
//
//     $("#result").show();
//     event.preventDefault();
//   });
// });
