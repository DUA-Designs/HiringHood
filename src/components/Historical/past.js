import { useEffect } from "react";
import ConfusedCloud from "../confusedCloud";







export function Historical(){

  // Function to fetch past weather data
async function fetchpastData() {
  // Taking references for all HTML elements

const cityForPast = document.getElementById("cityForPast");
const pastDate = document.getElementById("pastDate");
const loaderForPast = document.getElementById("loaderForPast");
const pastDetails = document.getElementById('pastDetails');
const errorForPast = document.getElementById("errorForPast");
const questionForPast = document.getElementById('questionForPast');
const pastWeatherIcon=document.getElementById('pastWeatherIcon');
  // Removes "collapsePast" class from pastDetails element
  pastDetails.classList.remove("collapsePast");

  // Hide error message
  errorForPast.style.display = "none";

  // Check if city and date are given by the user
  if (!cityForPast.value || !pastDate.value) {
    alert("Please enter both city and date to check the weather.");
    return;
  }

  // Validate if the date is in the past within the last 7 days
  const forecastDate = new Date(pastDate.value);
  const currentDate = new Date();
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() - 7);

  // Check if the forecast date is within the valid range
  if (forecastDate > currentDate || forecastDate < maxDate) {
    alert("Please enter a date of the past less than 7 days from the current date.");
    return;
  }

  
  questionForPast.style.display = "none";

  // Set the height of loaderForPast based on the window size
  loaderForPast.style.height = `${window.innerHeight - document.getElementById("searchForPast").offsetHeight - document.getElementById("daysContainerPast").offsetHeight}px`;

  
  await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 800)));

  loaderForPast.style.display = "grid";

  await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 800)));

  // Continue with the API request
  const response = await fetch(`https://api.weatherapi.com/v1/history.json?key=7353f0a0bd6145ac85931954241801&q=${cityForPast.value.trim()}&dt=${pastDate.value}`);
  const data = await response.json();

  // Check if there is no error in the API response
  if (!data.hasOwnProperty("error")) {
    // Update HTML elements with weather data if no error
    document.getElementById("pastHead").innerHTML = ` City - ${data.location.name}, ${data.location.region} <span id="tempForPastHead">${data.forecast.forecastday[0].day.avgtemp_c}<sup> o</sup><sub>c</sub> </span>`;
    document.getElementById("dateDisplayPast").innerHTML = ` Date: ${pastDate.value}`;
    document.getElementById("conditionPast").innerHTML = `Condition - ${data.forecast.forecastday[0].day.condition.text}`;
    pastWeatherIcon.src = `${data.forecast.forecastday[0].day.condition.icon}`;
    document.getElementById("avgTempPast").innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} <sup> o</sup><sub>c</sub></span>`;
    document.getElementById("humidityValuePast").innerHTML = data.forecast.forecastday[0].day.avghumidity;
    document.getElementById("uvValuePast").innerHTML = data.forecast.forecastday[0].day.uv;
    document.getElementById("windValuePast").innerHTML = `${data.forecast.forecastday[0].day.maxwind_kph} km/h`;
    document.getElementById("precipitationValuePast").innerHTML = `${data.forecast.forecastday[0].day.totalprecip_mm} mm`;

    loaderForPast.style.display = "none";

    await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 800)));

    // Add the "collapsePast" class to pastDetails element
    pastDetails.classList.add("collapsePast");

  } else {
    // Display error message
    errorForPast.innerHTML = `<h3 class="p-3  shadow my-3 rounded text-center">${data.error.message}</h3>`;
    
    loaderForPast.style.display = "none";

    await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 800)));

    // Display the errorForPast element
    errorForPast.style.display = "initial";
  }
}

  useEffect(()=>{

    const pastAPI = document.getElementById("pastAPI");
    const cityForPast = document.getElementById("cityForPast");
    // Event listener for Enter key press on city input
cityForPast.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    pastAPI.click();
  }
});

// Event listener for click on button having pastAPI as id
pastAPI.addEventListener("click",fetchpastData);
  })
  return ( <div id="history" class="container">
  <div class="search  " id="searchForPast">
    <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' class="credit" alt="Weather data by WeatherAPI.com"  /></a>  <input type="text" id="cityForPast" class="cityInput" placeholder="Enter your city..."/> <button id="pastAPI" class="weatherAPI">Check Historical</button>
    </div>

    <div class="row  p-1 border rounded">
      <div class="col-12  p-3"  id="daysContainerPast">Select the date for which you would like to see the historical weather. &nbsp;<input type="date"  id="pastDate" /></div> 
     </div>

     <div id="questionForPast" class="container">
           <ConfusedCloud/> 
      </div>

        <div id="loaderForPast" class="  my-3"><div class="loader"></div></div>

        <div id="errorForPast" class="my-3 p-2"></div>
   
  
     

    

     <div  class="col-12 " id="pastDetails">
      <h1  class="col-12 p-3 shadow my-1 border rounded text-center my-2" id="pastHead"> </h1>
      
        <div class="row p-2 p-sm-1   ">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-1 my-2">
                <div class="col-12 p-lg-3 p-md-2 p-sm-2 p-xs-2 shadow rounded ">
                  <h3 id="dateDisplayPast" class="col-12 p-3  text-center">Date</h3>
                  <div class="col-12 p-2"><img  id="pastWeatherIcon" class="img-fluid d-block mx-auto" alt="weather_Icon"/></div>
                  <div id="conditionPast" class="col-12 p-2 text-center"></div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12  p-1 my-2" id="additionalPast">
                <div class="col-12 p-3 shadow  rounded">
                  <p><span>Average Temperature - </span> <span id="avgTempPast"></span></p>
                  <p><span>Humidity - </span> <span id="humidityValuePast"></span></p>
                  <p><span>Uv - </span> <span id="uvValuePast"></span></p>
                  <p><span>Wind - </span> <span id="windValuePast"></span></p>
                  <p><span>Precipitation - </span> <span id="precipitationValuePast"></span></p>
                </div>
              </div>
        </div>
      </div>
    

     
 
        
    
</div>)
}
