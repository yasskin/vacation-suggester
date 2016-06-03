$(document).ready(function() {

  $("form#greetings-form").submit(function(event) {
    var person1Input = $("input#person1").val();

    $(".person1").text(person1Input);

    $("#reveal-name").show();

    event.preventDefault();
  });

  $("form#vacation-form").submit(function(event) {
    var questionOne = parseInt($("select#question-1").val());
    var questionTwo = parseInt($("select#question-2").val());
    var questionThree = parseInt($("select#question-3").val());
    var questionFour = parseInt($("select#question-4").val());
    var questionFive = parseInt($("select#question-5").val());
    var questionSix = parseInt($("select#question-6").val());
    var questionSeven = parseInt($("select#question-7").val());
    var questionEight = parseInt($("select#question-8").val());
    var questionNine = parseInt($("select#question-9").val());
    var questionTen = parseInt($("select#question-10").val());
    var result = questionOne + questionTwo + questionThree + questionFour + questionFive + questionSix +questionSeven + questionEight + questionNine + questionTen;

    if (result < 20) {
      $("#destination").text("Destination 1");
    } else if (result >= 10 && result < 20) {
      $("#destination").text("Destination 2");
    } else if (result >= 20 && result < 30) {
      $("#destination").text("Destination 3");
    } else if (result >= 30 && result < 40) {
      $("#destination").text("Destination 4");
    } else if (result >= 40 && result < 50) {
      $("#destination").text("Destination 5");
    } else if (result >= 50 && result < 60) {
      $("#destination").text("Destination 6");
    } else if (result >= 60 && result < 70) {
      $("#destination").text("Destination 7");
    } else if (result >= 70 && result <80) {
      $("#destination").text("Destination 8");
    } else if (result >= 80 && result <90) {
      $("#destination").text("Destination 9");
    } else if (result >= 90 && result <100) {
      $("#destination").text("Destination 10");
    } else if (result = 100) {
      $("#destination").text("Destination 11");
    }

    $("#reveal-destination").show();

    event.preventDefault();
  });

});
