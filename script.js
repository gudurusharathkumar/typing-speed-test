const sentences = [
  "Software development is a continuous learning process that requires practice and patience.",
  "Typing speed tests improve accuracy and build confidence through regular practice.",
  "JavaScript allows developers to create interactive and dynamic web applications.",
  "Consistency and discipline are essential to succeed in the technology industry.",
  "Practicing typing daily improves speed, focus, and muscle memory."
];
let startTime, endTime;

function startTest() {
  startTime = new Date();

  document.getElementById("text").innerText =
    sentences[Math.floor(Math.random() * sentences.length)];

  document.getElementById("inputText").value = "";

  document.getElementById("time").innerText = "";
  document.getElementById("speed").innerText = "";
  document.getElementById("accuracy").innerText = "";
}



function endTest() {
    endTime = new Date();

    let totalTime = (endTime - startTime) / 1000; // seconds
    let typedText = document.getElementById("inputText").value;
    let referenceText = document.getElementById("text").innerText;

    let wordCount = typedText.trim().split(" ").length;
    let speed = Math.round((wordCount / totalTime) * 60);

    let correctChars = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === referenceText[i]) {
            correctChars++;
        }
    }

    let accuracy = Math.round((correctChars / referenceText.length) * 100);

    document.getElementById("time").innerText = "Time Taken: " + totalTime + " seconds";
    document.getElementById("speed").innerText = "Typing Speed: " + speed + " WPM";
    document.getElementById("accuracy").innerText = "Accuracy: " + accuracy + "%";
}



