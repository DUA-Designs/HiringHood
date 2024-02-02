import { useEffect } from "react";
import ConfusedCloud from "../confusedCloud";




export function Timezone(){


// fetch timezone data
async function fetchTimezoneData() {

    // Taking reference for required HTML elements
const NameValue = document.getElementById("NameValue");
const RegionValue = document.getElementById("RegionValue");
const CountryValue = document.getElementById("CountryValue");
const LatitudeValue = document.getElementById("LatitudeValue");
const LongitudeValue = document.getElementById("LongitudeValue");
const TimezoneValue = document.getElementById("TimezoneValue");
const LocalValue = document.getElementById("LocalValue");

const cityForTimezone = document.getElementById("cityForTimezone");
const loaderForTimezone = document.getElementById("loaderForTimezone");
const timeDetails = document.getElementById('timeDetails');

  // Hide questionForTimezone, timeDetails, and errorForTimezone elements
  document.getElementById("questionForTimezone").style.display = "none";
  timeDetails.style.display = "none";
  document.getElementById('errorForTimezone').style.display = "none";

  await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 500)));

  // Display the loaderForTimezone element
  loaderForTimezone.style.display = "grid";
  // Set the height of loaderForTimezone based on the window size
  loaderForTimezone.style.height = `${window.innerHeight - document.getElementById("searchForTimezone").offsetHeight}px`;


  await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 500)));

  // Continue with the API request
  const response = await fetch(`https://api.weatherapi.com/v1/timezone.json?key=2f1a5f47063b4d3c96390406240201&q=${cityForTimezone.value.trim()}`);
  const dataFromAPI = await response.json();

  if (dataFromAPI.hasOwnProperty("location")) {
    // Update HTML elements with timezone data
    NameValue.innerHTML = dataFromAPI["location"]["name"];
    RegionValue.innerHTML = dataFromAPI["location"]["region"];
    CountryValue.innerHTML = dataFromAPI["location"]["country"]
    LatitudeValue.innerHTML = dataFromAPI["location"]["lat"];
    LongitudeValue.innerHTML = dataFromAPI["location"]["lon"];
    TimezoneValue.innerHTML = dataFromAPI["location"]["tz_id"];
    LocalValue.innerHTML = dataFromAPI["location"]["localtime"];

    await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 500)));

    // Hide the loaderForTimezone element and display timeDetails
    loaderForTimezone.style.display = "none";
    timeDetails.style.display = "flex";
  } else {
    // check error
    if (dataFromAPI.error.code === 1003) {
      document.getElementById("errorForTimezone").innerHTML = `<h3 class="p-2">Kindly enter relevant details...</h3>`;
    } else {
      document.getElementById("errorForTimezone").innerHTML = `<h3 class="p-2">${dataFromAPI.error.message}</h3>`;
    }

    await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 500)));

    // Hide the loaderForTimezone and timeDetails elements, and display errorForTimezone
    loaderForTimezone.style.display = "none";
    timeDetails.style.display = "none";
    document.getElementById("errorForTimezone").style.display = "initial";
  }
}
  useEffect(()=>{
    const timezoneAPI = document.getElementById("timezoneAPI");
    const cityForTimezone = document.getElementById("cityForTimezone");

// Event listener for Enter key press on city input
cityForTimezone.addEventListener("keypress", (event) => {
  if(event.key === "Enter"){ timezoneAPI.click();}
});

// Event listener for click on check Timezone button
timezoneAPI.addEventListener("click", fetchTimezoneData);
  })
  return (<div id="timezone" class="container">
  <div class="row">
     <div class="search  " id="searchForTimezone">
        <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' class="credit" alt="Weather data by WeatherAPI.com" / ></a>  <input type="text" id="cityForTimezone" class="cityInput" placeholder="Enter your city..."/> <button id="timezoneAPI" class="weatherAPI">Check Timezone</button>
     </div>
     <div id="questionForTimezone" class="container  ">
        <ConfusedCloud/>
     </div>
     <div id="loaderForTimezone"><div class="loader" ></div></div>
     <div id="errorForTimezone" class="row p-3 text-center shadow rounded my-4 mx-auto" ></div>
       
     
   <div class="row     p-lg-5 p-md-3 p-sm-1 p-xs-1 mx-auto  text-center" id="timeDetails">
     <div class=" col-12"  id="timeHead"><div class="row shadow py-2"><span class="col-12 border rounded my-2">Timezone </span> <span id="TimezoneValue" class="col-12"></span></div></div>
    
     <div class="col-lg-4  col-md-6 col-sm-6 col-xs-10 mx-auto p-1"><div class="shadow col-12 "><span>Name - &nbsp;</span> <span id="NameValue"></span ></div></div>
     <div class="col-lg-4  col-md-6 col-sm-6 col-xs-10 mx-auto p-1"><div class="shadow col-12 "><span>Region - &nbsp;</span> <span id="RegionValue"></span ></div></div>
     <div class="col-lg-4  col-md-6 col-sm-6 col-xs-10 mx-auto p-1"><div class="shadow col-12 "><span>Country - &nbsp;</span> <span id="CountryValue"></span ></div></div>
     <div class="col-lg-4  col-md-6 col-sm-6 col-xs-10 mx-auto p-1"><div class="shadow col-12 "><span>Latitude - &nbsp;</span> <span id="LatitudeValue"></span ></div></div>
     <div class="col-lg-4  col-md-6 col-sm-6 col-xs-10 mx-auto p-1"><div class="shadow col-12 "><span>Longitude - &nbsp;</span> <span id="LongitudeValue"></span ></div></div>
     
     <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 mx-auto p-2"><div class="shadow col-12 "><span>Local Date and  Time - &nbsp;</span> <span id="LocalValue"></span></div></div>
     
   </div>
 </div>
  
</div>)
}