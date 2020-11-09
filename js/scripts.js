$(document).ready(function () {
  $("#numberConverter").submit(function (event) {
    event.preventDefault();
    $("#romanNumerals").empty();
    let userNumber = parseInt($("#number").val());
    let convertedNumber = [];
    if (userNumber >= 4000 || userNumber <= 0) {
      $("#romanNumerals").text("Please enter a number less than 4000 and greater than 0.");
      return;
    }
    else {
      while
        (userNumber > 0) {
        if (userNumber >= 1000) {
          userNumber -= 1000;
          convertedNumber.push("M");
        } else if (userNumber >= 900) {
          userNumber -= 900;
          convertedNumber.push("CM");
        } else if (userNumber >= 500) {
          userNumber -= 500;
          convertedNumber.push("D");
        } else if (userNumber >= 400) {
          userNumber -= 400;
          convertedNumber.push("CD");
        } else if (userNumber >= 100) {
          userNumber -= 100;
          convertedNumber.push("C");
        } else if (userNumber >= 90) {
          userNumber -= 90;
          convertedNumber.push("XC")
        } else if (userNumber >= 50) {
          userNumber -= 50;
          convertedNumber.push("L");
        } else if (userNumber >= 40) {
          userNumber -= 40;
          convertedNumber.push("XL");
        } else if (userNumber >= 10) {
          userNumber -= 10;
          convertedNumber.push("X");
        } else if (userNumber = 9) {
          userNumber -= 9;
          convertedNumber.push("IX");
        } else if (userNumber >= 5) {
          userNumber -= 5;
          convertedNumber.push("V");
        } else if (userNumber = 4) {
          userNumber -= 4;
          convertedNumber.push("IV");
        } else if (userNumber >= 1) {
          userNumber -= 1;
          convertedNumber.push("I");
        }
      }
    }
    $("#romanNumerals").text(convertedNumber.join(""));
  });
});