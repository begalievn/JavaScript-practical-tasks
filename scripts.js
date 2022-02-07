/* Task #1 */
// Ex: 1
const task1Button = document.getElementById("answer__task1-button");
task1Button.addEventListener("click", () => {
  console.log("button is clicked");
});

/* Task #2 */

// Ex: 1
const ex1Button = document.getElementById("answer__task2-button");
ex1Button.addEventListener("click", () => {
  console.log("I have been clicked");
  const answerDiv = document.getElementsByClassName("answer__div-ex1")[0];

  answerDiv.innerHTML = displayCurrentDayAndTime();
});

const displayCurrentDayAndTime = () => {
  let resString = "";

  const currentTime = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  resString += `<p>Today is: ${weekday[currentTime.getDay()]} </p>`;
  resString += `<p>Current time is: ${
    currentTime.getHours() > 12
      ? (currentTime.getHours() % 12) + " PM"
      : currentTime.getHours() + " AM"
  }  : ${
    currentTime.getMinutes() < 10
      ? "0" + currentTime.getMinutes()
      : currentTime.getMinutes()
  } : ${
    currentTime.getSeconds() < 10
      ? "0" + currentTime.getSeconds()
      : currentTime.getSeconds()
  } </p>`;
  return resString;
};

// Ex: 2

const ex2Button = document.getElementById("answer__ex2-button");
ex2Button.addEventListener("click", () => {
  console.log("ex 2 button clicked");
  const answerDiv = document.getElementsByClassName("answer__div-ex2")[0];
  let number = window.prompt("Enter a number: ");
  let reversedString = number.split("").reverse().join("");
  number = Number(number);
  if (Number.isInteger(number)) {
    console.log("valid integer");
    answerDiv.innerHTML = `<p>x = ${number}</p>
                            <p>Output: ${reversedString} </p>`;
  } else {
    answerDiv.innerHTML = `<p><span style="color:red">* </span>Invalid input</p>`;
  }
});

// Ex: 3

const ex3Button = document.getElementById("answer__ex3-button");
ex3Button.addEventListener("click", () => {
  console.log("ex 3 button clicked");
  const answerDiv = document.getElementsByClassName("answer__div-ex3")[0];
  let number = window.prompt("Enter a number: ");
  const getFactorial = (x) => {
    let resStr = `${x}! = ${x} `;
    let resNum = x;
    for (let i = x - 1; i > 0; i--) {
      resNum = resNum * i;
      resStr += `* ${i} `;
    }
    resStr += ` = ${resNum}`;
    console.log(resStr);
    return resStr;
  };
  number = Number(number);
  if (Number.isInteger(number)) {
    answerDiv.innerHTML = `<p>${getFactorial(number)}</p>`;
  } else {
    answerDiv.innerHTML = `<p><span style="color:red">* </span>Invalid input</p>`;
  }
});

// Ex: 4

const ex4Button = document.getElementById("answer__ex4-button");
ex4Button.addEventListener("click", () => {
  console.log("ex 4 button clicked");
  const answerDiv = document.getElementsByClassName("answer__div-ex4")[0];
  let inputStrWith2Nums = window.prompt(
    "Enter two numbers with space between: "
  );
  inputStrWith2Nums = inputStrWith2Nums.split(" ");
  let num1 = Number(inputStrWith2Nums[0]),
    num2 = Number(inputStrWith2Nums[1]);
  if (Number.isInteger(num1) && Number.isInteger(num2)) {
    answerDiv.innerHTML = `<p>${Math.max(num1, num2)}</p>`;
  } else {
    answerDiv.innerHTML = `<p><span style="color:red">* </span>Invalid input</p>`;
  }
});

// Ex: 5

const ex5Button = document.getElementById("answer__ex5-button");
const answerDiv = document.getElementsByClassName("answer__div-ex5")[0];

ex5Button.addEventListener("click", () => {
  console.log("ex5 button clicked");
  let inputArray = window.prompt(
    "Your array should be in this form\n Red,Green,White\n Enter your input:"
  );
  answerDiv.innerHTML = `<p>"${inputArray.split(",").join(",")}"</p>
                          <p>"${inputArray.split(",").join("+")}"</p>`;
});

let sampleArray = ["Red", "Green", "White", "Black"];
answerDiv.innerHTML = `<p>${sampleArray.join(",")}</p>
                        <p>${sampleArray.join("+")}</p>`;

// Ex: 6
const month_name = (date) => {
  let monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  date = new Date(date);
  console.log(monthArray[date.getMonth()]);
  return monthArray[date.getMonth()];
};

const ex6Button = document.getElementById("answer__ex6-button");

ex6Button.addEventListener("click", () => {
  console.log("ex6 button clicked");
  const answerDiv = document.getElementsByClassName("answer__div-ex6")[0];
  let inputDate = window.prompt(
    "Input should in be in a form\n 11/09/2020\n Notice that month is a first number\n Enter a date: "
  );
  answerDiv.innerHTML = `<p>${inputDate}</p>
                          <p>${month_name(inputDate)}</p>`;
});

// Ex: 7

const ex7Button = document.getElementById("answer__ex7-button");

ex7Button.addEventListener("click", () => {
  let inputStr = window.prompt("Write a string: ");
  const answerDiv = document.getElementsByClassName("answer__div-ex7")[0];
  if (!isNaN(inputStr[0] * 1)) {
    console.log("first char is a number");
    answerDiv.innerHTML = `<p>${inputStr}</p>
                            <p>First char is not a letter</p>`;
  } else {
    if (inputStr[0] == inputStr[0].toUpperCase()) {
      console.log("true");
      answerDiv.innerHTML = `<p>${inputStr}</p>
                            <p>${true}</p>`;
    } else {
      console.log("false");
      answerDiv.innerHTML = `<p>${inputStr}</p>
                            <p>${false}</p>`;
    }
  }
});

/* Task 4 */

// Exercise: 1

const buttonEx1 = document.getElementById("task4-ex1-button");
buttonEx1.addEventListener("click", () => {
  const elements = document
    .getElementsByClassName("ex1-divs")[0]
    .querySelectorAll("div");
  for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].textContent);
  }
});

// Exercise: 2

const buttonEx2 = document.getElementById("task4-ex2-button");
buttonEx2.addEventListener("click", () => {
  const elements = document.getElementsByClassName("element");
  for (let i = 0; i < elements.length; i++) {
    if (i < 3) {
      elements[i].style.color = "red";
    } else {
      elements[i].style.color = "green";
    }
    console.log(elements[i]);
  }
});

// Exercise: 3

const buttonEx3 = document.getElementById("task4-ex3-button");
const tasks = [
  "Buy lemonade",
  "Make toasts",
  "Repair car",
  "Play games",
  "Pet a cat",
];
buttonEx3.addEventListener("click", () => {
  olElement = document.getElementById("todo-list");
  for (let i = 0; i < tasks.length; i++) {
    const liTag = document.createElement("li");
    let text = document.createTextNode(tasks[i]);
    liTag.appendChild(text);
    olElement.appendChild(liTag);
  }
  const answerDiv = document.getElementsByClassName("asnwer__div-task4-ex3")[0];
  console.log(answerDiv.innerHTML);
});

// Exercise: 4

const buttonEx4 = document.getElementById("task4-ex4-button");
buttonEx4.addEventListener("click", () => {
  console.log("button is clicked");
  const parags = document
    .querySelector(".ex4-article")
    .querySelector("article")
    .querySelectorAll("p");
  for (let i = 0; i < parags.length; i++) {
    const hrTag = document.createElement("hr");
    parags[i].parentNode.insertBefore(hrTag, parags[i].nextSibling);
  }
});

// Exercise: 5

const buttonEx5 = document.getElementById("task4-ex5-button");
buttonEx5.addEventListener("click", () => {
  console.log("button is clicked");
  const cartItems = document
    .getElementById("cart-items")
    .getElementsByClassName("item");
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].textContent.includes("Cola 1.5 l")) {
      cartItems[i].remove();
    }
    if (cartItems[i].textContent.includes("Chocolate bar")) {
      const newItem = document.createElement("div");
      newItem.innerHTML = `Canned Fish <span class="qty"> x4</span>`;
      newItem.classList.add("item");
      const parentNode = cartItems[i].parentNode;
      parentNode.replaceChild(newItem, cartItems[i]);
      console.log(newItem);
    }
  }
});

// Exercise: 6

const buttonEx6 = document.getElementById("task4-ex6-button");
buttonEx6.addEventListener("click", () => {
  const ulElement = document
    .getElementsByClassName("ex6-ul-container")[0]
    .getElementsByTagName("ul")[0];

  const inputItem = prompt("Write a task: ");
  if (inputItem === "") {
    console.log("input is empty");
  } else if (inputItem === null) {
    console.log("input is null");
  } else {
    const liElement = document.createElement("li");
    const taskText = document.createTextNode(inputItem);
    liElement.appendChild(taskText);
    ulElement.appendChild(liElement);
  }
});
