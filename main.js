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
let question1 = document.querySelector("#q1");
let bodyDiv = document.querySelector(".questions-body");

function setupNextListener() {
  next.addEventListener("click", () => {
    enableAll();
    removeAllClasses();
    bodyDiv.removeChild(question1);
    let questionDiv = document.createElement("div");
    questionDiv.classList.add("questions");
    questionDiv.id = "q2";
    questionDiv.innerHTML = `
    <p class="questionPara" id="question2">2. What is acrophobia a fear of?</p>
            <ul>
                <li><button id="AnswerNumber1Q2">Heights</button></li>
                <li><button id="AnswerNumber2Q2">Darkness</button></li>
                <li><button id="AnswerNumber3Q2">Spiders</button></li>
                <li><button id="AnswerNumber4Q2">Water</button></li>
            </ul>
    `;
    document.querySelector("hr").insertAdjacentElement("afterend", questionDiv);
    next.style.display = "none";
    let question2Answer1 = document.querySelector("#AnswerNumber1Q2");
    let question2Answer2 = document.querySelector("#AnswerNumber2Q2");
    let question2Answer3 = document.querySelector("#AnswerNumber3Q2");
    let question2Answer4 = document.querySelector("#AnswerNumber4Q2");

    question2Answer1.addEventListener("click", () => {
      question2Answer1.classList.add("right");
      question2Answer2.disabled = true;
      question2Answer3.disabled = true;
      question2Answer4.disabled = true;
      next.style.display = "block";
    });

    // Other answers - mark as wrong
    question2Answer2.addEventListener("click", () => {
      question2Answer2.classList.add("wrong");
      question2Answer1.classList.add("right");
      question2Answer3.disabled = true;
      question2Answer4.disabled = true;
      next.style.display = "block";
    });

    question2Answer3.addEventListener("click", () => {
      question2Answer3.classList.add("wrong");
      question2Answer1.classList.add("right");
      question2Answer2.disabled = true;
      question2Answer4.disabled = true;
      next.style.display = "block";
    });

    question2Answer4.addEventListener("click", () => {
      question2Answer4.classList.add("wrong");
      question2Answer1.classList.add("right");
      question2Answer2.disabled = true;
      question2Answer3.disabled = true;
      next.style.display = "block";
    });
  });
}
