let ans1 = document.querySelector("#AnswerNumber1");
let ans2 = document.querySelector("#AnswerNumber2");
let ans3 = document.querySelector("#AnswerNumber3");
let ans4 = document.querySelector("#AnswerNumber4");
let next = document.querySelector("#nextBtn");
let nextQuestion = document.querySelector("#question");

function disableAll() {
  ans1.disabled = true;
  ans2.disabled = true;
  ans3.disabled = true;
  ans4.disabled = true;
}

ans1.addEventListener("click", () => {
  if (ans1.innerHTML === "Hong Kong") {
    ans1.classList.add("wrong");
  } else {
    ans3.classList.add("right");
    ans1.classList.add("wrong");
    ans2.disabled = true;
    ans4.disabled = true;
    setupNextListener();
  }
});

ans2.addEventListener("click", () => {
  if (ans2.innerHTML === "Hong Kong") {
    ans2.classList.add("wrong");
  } else {
    ans3.classList.add("right");
    ans2.classList.add("wrong");
    ans1.disabled = true;
    ans4.disabled = true;
    setupNextListener();
  }
});
ans3.addEventListener("click", () => {
  if (ans3.innerHTML === "Hong Kong") {
    ans3.classList.add("right");
    disableAll();
    setupNextListener();
  }
});
ans4.addEventListener("click", () => {
  if (ans4.innerHTML === "Hong Kong") {
    ans4.classList.add("wrong");
  } else {
    ans3.classList.add("right");
    ans4.classList.add("wrong");
    ans1.disabled = true;
    ans2.disabled = true;
    ans3.disabled = true;
    setupNextListener();
  }
});

function enableAll() {
  ans1.disabled = false;
  ans2.disabled = false;
  ans3.disabled = false;
  ans4.disabled = false;
}

function removeAllClasses() {
  ans1.classList.remove("wrong", "right");
  ans2.classList.remove("wrong", "right");
  ans3.classList.remove("wrong", "right");
  ans4.classList.remove("wrong", "right");
}

function setupNextListener() {
  next.disabled = false;
  next.addEventListener("click", () => {
    enableAll();
    removeAllClasses();
    next.style.display = "none";
    nextQuestion.innerHTML = `2. What is acrophobia a fear of?`;
    ans1.innerHTML = `Spiders`;
    ans2.innerHTML = `Heights`;
    ans3.innerHTML = `Darkness`;
    ans4.innerHTML = `Water`;
  });
}
