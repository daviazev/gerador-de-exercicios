function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function answered(button) {
  const exercise = button.parentElement;
  const num1 = parseInt(exercise.querySelector(".num1").innerText);
  const num2 = parseInt(exercise.querySelector(".num2").innerText);
  let answer = exercise.querySelector(".answer").value;
  const operation = exercise.dataset.operation;

  if (operation === "addition") {
    if (answer == num1 + num2) {
      exercise.style.backgroundColor = "#aeffae";
    } else {
      exercise.style.backgroundColor = "#ffaeae";
    }
  }

  if (operation === "subtraction") {
    if (answer == num1 - num2) {
      exercise.style.backgroundColor = "#aeffae";
    } else {
      exercise.style.backgroundColor = "#ffaeae";
    }
  }

  if (operation === "multiplication") {
    if (answer == num1 * num2) {
      exercise.style.backgroundColor = "#aeffae";
    } else {
      exercise.style.backgroundColor = "#ffaeae";
    }
  }
}

let exercise = document.querySelectorAll(".questions");

function updateNumber(button) {
  const exercise = button.parentElement;
  let num1 = exercise.querySelector(".num1");
  let num2 = exercise.querySelector(".num2");

  num1.innerText = randomNumber(100, 1000);
  num2.innerText = randomNumber(2, 100);

  exercise.style.backgroundColor = "#ffffff";
}

function changeBackgroundColor(input) {
  const exercise = input.parentElement;
  exercise.style.backgroundColor = "#ffffff";
}
