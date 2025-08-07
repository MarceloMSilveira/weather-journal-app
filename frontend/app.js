/* zip for tests:  
  miami: 33101 
33125-1234 (Miami)
  Orlando: 32801
32801-5678 (Orlando)

10001-0001 (New York)
10001 (Manhattan)

https://api.openweathermap.org/data/2.5/weather?zip=32801,us&appid=dd6c3ba86f66f547459582b843e14bc8
*/

//imports
import axios from "axios";

/* Global Variables */
const baseURL = "https://api.openweathermap.org/data/2.5/weather";
const apikey = 'dd6c3ba86f66f547459582b843e14bc8';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



// async function callPost() {
//   const generateBtn = document.getElementById('generate');
//   generateBtn.addEventListener('click',(evt)=>{

//   })
// }

function setCurrentYearInFooter() {
  const spanElement = document.querySelector("#this-year");
  const thisYear = new Date().getFullYear();
  console.log('test');
  console.log(thisYear);
  spanElement.textContent = thisYear;
}

async function getWeather(zipCode) {
  const fullUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=dd6c3ba86f66f547459582b843e14bc8`;
  const {data:result} = await axios.get(fullUrl);
  console.log(result.name);
}

setCurrentYearInFooter();
getWeather(33101);

