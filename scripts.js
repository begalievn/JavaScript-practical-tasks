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
