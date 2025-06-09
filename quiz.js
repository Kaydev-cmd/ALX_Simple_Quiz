function checkAnswer() {
  const correctAnswer = "4";
  const userAnswer = document.querySelector("input[name='quiz']:checked").value;
  let feedback = document.getElementById("feedback");

  if (correctAnswer == userAnswer) {
    feedback.textContent = "Correct! Well done.";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
  }
}
