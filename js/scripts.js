$(document).ready(function() {

  $("form#greetings-form").submit(function(event) {
    var person1Input = $("input#person1").val();

    $("#person1").text("person1Input");

    event.preventDefault();
  });

  $("form#vacation-form").submit(function(event) {
    var questionOne = parseInt($("select#question-1").val());
    var questionTwo = parseInt($("select#question-2").val());
    var questionThree = parseInt($("select#question-3").val());
    var questionFour = parseInt($("select#question-4").val());
    var questionFive = parseInt($("select#question-5").val());
    var questionSix = parseInt($("select#question-6").val());
    var result = (questionOne + questionTwo + questionThree + questionFour + questionFive + questionSix);

    if (result === 0) {
      $("#destination").text("Destination One");
    } else if (result === 1) {
      $("#destination").text("Destination Two");
    } else if (result === 2) {
      $("#destination").text("Destination Three");
    } else if (result === 3) {
      $("#destination").text("Destination Four");
    } else if (result >= 4) {
      $("#destination").text("Destination Five");
    }

    $("#reveal").show();

    event.preventDefault();
  });
});
