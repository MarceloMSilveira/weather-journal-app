/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

function setCurrentYearInFooter() {
  const spanElement = document.querySelector("#this-year");
  const thisYear = new Date().getFullYear();
  console.log('test');
  console.log(thisYear);
  spanElement.textContent = thisYear;
}

setCurrentYearInFooter();