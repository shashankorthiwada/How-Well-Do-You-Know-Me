var readLineSync = require(readline-sync);

var userName = readLineSync.question("What is your name ? ");

console.log("Welcome " + userName + " to The Shashank's Quiz ");

var score = 0;
function quiz(question, answer) {
  let userAnswer = readLineSync.question(question);
  if (userAnswer.split(" ").join("").toLowerCase() === answer.toLowerCase()) {
    console.log("Correct");
    score = score + 1;
  } else {
    console.log("Wrong");
  }
}

let questions = [
  {
    question: "Where do Shashank live?",
    answer: "Bangalore",
  },
  {
    question: "Where is Shashank's HomeTown?",
    answer: "Siddipet",
  },
  {
    question: "Who is Shashank's Favorite Football Player?",
    answer: "Messi",
  },
  {
    question: "What Shashank Loves the most?",
    answer: "Coding",
  },
  {
    question: "Is Shashank a Marvel Fan or DC Fan?",
    answer: "Marvel",
  },
  {
    question: "Who is Shashank's Favorite Marvel Character?",
    answer: "IronMan",
  },
  {
    question: "What is Shashank's Most Played Sport?",
    answer: "Cricket",
  },
  {
    question: "Out of two Which he picks Always Football or Cricket?",
    answer: "Cricket",
  },
  {
    question: "Who is Shashank's Favorite Cricketer?",
    answer: "Sachin",
  },
  {
    question: "Dream Place to visit for Shashank?",
    answer: "Barcelona",
  },
];

for (let i = 0; i < questions.length; i++) {
  quiz(questions[i].question, questions[i].answer);
}

console.log("Your Score is: " + score);

var highestScore = [
  {
    name: "Shashank",
    score: 7,
  },
  {
    name: "Sunny",
    score: 10,
  },
  {
    name: "Harideep",
    score: 9,
  },
  {
    name: "Shiva",
    score: 9,
  },
];

highestScore.push({ name: userName, score: score });
let sortedArray = highestScore.sort(function (a, b) {
  return b.score - a.score;
});

if (score >= sortedArray[0].score) {
  console.log("Yay!!!! you beat the Highest Score");
} else {
  console.log("You Played Well!!!!.. Keep Trying For Highest Score");
}

console.log("The LeaderBoard: ");
sortedArray.forEach((ele) => {
  console.log(ele.name, ele.score);
});
