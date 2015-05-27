var pigLatin = function(phrase) {
  var normalSpeak = phrase;
  var pigSpeak = "";
  var firstLetter = normalSpeak.charAt(0);
  var secondLetter = normalSpeak.charAt(1);
  var thirdLetter = normalSpeak.charAt(2);
  var qAlert = false;
  var consonants = '';

    if (firstLetter.match(/[aeiouAEIOU]/)) {
      pigSpeak = normalSpeak.concat('-ay');
      return pigSpeak;
    }
    else if (firstLetter.match(/[yY]/)) {
      consonants = firstLetter;
      pigSpeak = normalSpeak.substr(1).concat("-").concat(consonants).concat("ay");
      return pigSpeak;
    }
    else if ((firstLetter.match(/[qQ]/)) && (secondLetter.match(/[uU]/))) {
      consonants = "qu";
      pigSpeak = normalSpeak.substr(2);
      pigSpeak = pigSpeak.concat("-").concat(consonants).concat("ay");
      return pigSpeak;
    }
    else if ((secondLetter.match(/[qQ]/)) && (thirdLetter.match(/[uU]/))) {
      consonants = firstLetter.concat("qu");
      pigSpeak = normalSpeak.substr(3);
      pigSpeak = pigSpeak.concat("-").concat(consonants).concat("ay");
      return pigSpeak;
    }
    else if (firstLetter.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
      consonants = firstLetter;
      pigSpeak = normalSpeak.substr(1);

      if (secondLetter.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
        consonants = consonants.concat(secondLetter);
        pigSpeak = normalSpeak.substr(2);
      }
      if (thirdLetter.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/)) {
        consonants = consonants.concat(thirdLetter);
        pigSpeak = normalSpeak.substr(3);
      }
      pigSpeak = pigSpeak.concat("-").concat(consonants).concat("ay");
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
