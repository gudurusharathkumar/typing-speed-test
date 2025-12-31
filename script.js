const sentences = [
  "Software development is a continuous learning process that requires practice and patience.",
  "Typing speed tests improve accuracy and build confidence through regular practice.",
  "JavaScript allows developers to create interactive and dynamic web applications.",
  "Consistency and discipline are essential to succeed in the technology industry.",
  "Practicing typing daily improves speed, focus, and muscle memory."
];

let startTime, endTime;

function startTest() {
  // pick random sentence
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const selectedSentence = sentences[randomIndex];

  // show sentence on screen
  document.getElementById("text").innerText = selectedSentence;

  // reset input & results
  document.getElementById("inputText").value = "";
  document.getElementById("time").innerText = "";
  document.getElementById("speed").innerText = "";
  document.getElementById("accuracy").innerText = "";

  // start timer
  startTime = new Date();
}

function endTest() {
  endTime = new Date();

  const totalTime = (endTime - startTime) / 1000; // seconds
  const typedText = document.getElementById("inputText").value.trim();
  const referenceText = document.getElementById("text").innerText.trim();

  if (typedText.length === 0 || referenceText.length === 0) {
    alert("Please click Start and type the sentence.");
    return;
  }

  const wordCount = typedText.split(/\s+/).length;
  const speed = Math.round((wordCount / totalTime) * 60);

  let correctChars = 0;
  for (let i = 0; i < typedText.length; i++) {
    if (typedText[i] === referenceText[i]) {
      correctChars++;
    }
  }

  const accuracy = Math.round((correctChars / referenceText.length) * 100);

  document.getElementById("time").innerText =
    "Time Taken: " + totalTime.toFixed(2) + " seconds";
  document.getElementById("speed").innerText =
    "Typing Speed: " + speed + " WPM";
  document.getElementById("accuracy").innerText =
    "Accuracy: " + accuracy + "%";
}
