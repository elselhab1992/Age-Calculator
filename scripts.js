const ageCalculator = () => {
  let day = document.getElementById("day").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;

  let date = new Date();

  let currentDay = date.getDate();
  let currentMonth = 1 + date.getMonth();
  let currentYear = date.getFullYear();

  let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (day > currentDay) {
    currentDay = currentDay + months[months - 1];
    currentDay -= 1;
  }
  if (month > currentMonth) {
    currentMonth += 12;
    currentYear -= 1;
  }

  let newDay = currentDay - day;
  let newMonth = currentMonth - month;
  let newYear = currentYear - year;

  return `Your age is ${newYear} Years Old, ${newMonth} Months, ${newDay} Days.`;
};

let button = document.getElementById("button");
let age = document.getElementById("age");

button.addEventListener("click", () => {
  age.innerText = ageCalculator();
});
