/* Task #1 */

/* Task #2 */

// Ex: 1
const ex2Button = document.getElementById("answer__task2-button");
ex2Button.addEventListener("click", () => {
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
