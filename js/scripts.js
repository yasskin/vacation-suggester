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

    if (result < 5) {
      $("#destination").text("answer some more questions. Nothing in life is free. To get your recommendation, you must enter several responses");
    } else if (result >= 10 && result < 20) {
      $("#destination").text("go to London, England");
    } else if (result >= 10 && result < 20) {
      $("#destination").text("go to Sidney, Australia");
    } else if (result >= 20 && result < 30) {
      $("#destination").text("go to Amsterdam, Netherlands");
    } else if (result >= 30 && result < 40) {
      $("#destination").text("go to Paris, France");
    } else if (result >= 40 && result < 50) {
      $("#destination").text("go to Rome, Italy");
    } else if (result >= 50 && result < 60) {
      $("#destination").text("go to Budapest, Hungary");
    } else if (result >= 60 && result < 70) {
      $("#destination").text("go to Tokyo, Japan");
    } else if (result >= 70 && result <80) {
      $("#destination").text("go to Cusco, Peru");
    } else if (result >= 80 && result <90) {
      $("#destination").text("go to Marrakech, Morocco");
    } else if (result >= 90 && result <100) {
      $("#destination").text("go to Siem Reap, Cambodia");
    } else if (result = 100) {
      $("#destination").text("go to Kathmandu, Nepal");
    }

    $("#reveal-destination").show();

    event.preventDefault();
  });
});
