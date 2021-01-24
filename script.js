var physicalExercises = ["Roll your shoulders back, reaching them up to your ears. Repeat 5 times, then switch directions.", "Stand up. Grab one wrist with the opposite hand and stretch to the side. Hold for 10 seconds and repeat on the other side.", "Let your head fall limp, then slowly roll it to the right. From the right, roll it to the left. Repeat 3 times.", "Stand up and touch your toes, body limp. Slowly roll up, picturing vertebrae by vertebrae stacking on top of each other. Repeat 3 times.", "Raise and bend one arm, touching your hand to the opposite shoulder. Take the other hand and pull your elbow towards your head, stretching your side. Hold for 10 seconds and repeat on the other side."];

var button = $('.physicalExerciseButton');
var adviceSpot = $('.emptyAdvice');
var previousChoice = "";

button.on("click", pickPhysicalExercise);

function pickPhysicalExercise() {
  var random = Math.random() * 5;
  var final = Math.floor(random);
  var choice = physicalExercises[final];
  if (choice !== previousChoice) {
    adviceSpot.text(choice);
  } else {
    var random = Math.random() * 5;
    var final = Math.floor(random);
    var choice = physicalExercises[final];
    adviceSpot.text(choice);
  }
  return previousChoice = choice;
}

var mentalExercises = ["'Become addicted to constant and never ending self-improvement.' Anthony J. D'Angelo", "If you continuously compete with others, you become bitter, but if you continuously compete with yourself you become better.", "Do something today that your future self will thank you for.", "Love yourself enough to work harder.", "Track one thing you're grateful for and one thing you accomplished everyday."];

var button = $('.mentalExerciseButton');
var adviceSpot = $('.emptyAdvice');
var previousChoice = "";

button.on("click", pickMentalExercise);

function pickMentalExercise() {
  var random = Math.random() * 5;
  var final = Math.floor(random);
  var choice = mentalExercises[final];
  if (choice !== previousChoice) {
    adviceSpot.text(choice);
  } else {
    var random = Math.random() * 5;
    var final = Math.floor(random);
    var choice = mentalExercises[final];
    adviceSpot.text(choice);
  }
  return previousChoice = choice;
}
