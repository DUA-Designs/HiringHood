import { useEffect } from "react";
import ConfusedCloud from "../confusedCloud";







export function Future(){
// fetch future weather data
async function fetchFutureData() {
  // Taking references for required HTML elements
 
const cityForFuture = document.getElementById("cityForFuture");
const futureDate = document.getElementById("futureDate");
const loaderForFuture = document.getElementById("loaderForFuture");
const futureDetails = document.getElementById('futureDetails');
const errorForFuture = document.getElementById("errorForFuture");
const questionForFuture = document.getElementById('questionForFuture');
const futureWeatherIcon=document.getElementById('futureWeatherIcon');
  // Remove "collapseFuture" class from futureDetails element
  futureDetails.classList.remove("collapseFuture");

  // Hide error message
  errorForFuture.style.display = "none";

  // Check if city and date are provided by the user
  if (!cityForFuture.value.trim() || !futureDate.value) {
    alert("Please enter both city and date to check the weather.");
    return;
  }

  // Validate if the date is within the specified range
  const forecastDate = new Date(futureDate.value);
  const currentDate = new Date();
  const minDate = new Date(currentDate);
  const maxDate = new Date(currentDate);

  // Set the minimum date to 14 days from today
  minDate.setDate(currentDate.getDate() + 14);

  // Set the maximum date to 300 days from today
  maxDate.setDate(currentDate.getDate() + 300);

  if (forecastDate < minDate || forecastDate > maxDate) {
    alert("Please enter a date within the range of 14 days to 300 days from today's date.");
    return;
  }

  // Hide questionForFuture element
  questionForFuture.style.display = "none";

  // Set the height of loaderForFuture based on the window size
  loaderForFuture.style.height = `${window.innerHeight - document.getElementById("searchForFuture").offsetHeight - document.getElementById("daysContainerFuture").offsetHeight}px`;

  await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 800)));

  // Display the loaderForFuture element
  loaderForFuture.style.display = "grid";

  await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 800)));

  // Continue with the API request
  const response = await fetch(`https://api.weatherapi.com/v1/future.json?key=26fc930a943946f6abb72609242501&q=${cityForFuture.value.trim()}&dt=${futureDate.value}`);
  const data = await response.json();

  // Check if there is no error in the API response
  if (!data.hasOwnProperty("error")) {
    // Update HTML elements with weather data if no error
    document.getElementById("futureHead").innerHTML = ` City - ${data.location.name}, ${data.location.region} <span id="tempForPastHead">${data.forecast.forecastday[0].day.avgtemp_c}<sup> o</sup><sub>c</sub> </span>`;
    document.getElementById("dateDisplay").innerHTML = ` Date: ${futureDate.value}`;
    document.getElementById("conditionFuture").innerHTML = `Condition - ${data.forecast.forecastday[0].day.condition.text}`;
    futureWeatherIcon.src = `${data.forecast.forecastday[0].day.condition.icon}`;
    document.getElementById("avgTempFuture").innerHTML = `${data.forecast.forecastday[0].day.avgtemp_c} <sup> o</sup><sub>c</sub></span>`;
    document.getElementById("humidityValueFuture").innerHTML = data.forecast.forecastday[0].day.avghumidity;
    document.getElementById("uvValueFuture").innerHTML = data.forecast.forecastday[0].day.uv;
    document.getElementById("windValueFuture").innerHTML = `${data.forecast.forecastday[0].day.maxwind_kph} km/h`;
    document.getElementById("precipitationValueFuture").innerHTML = `${data.forecast.forecastday[0].day.totalprecip_mm} mm`;

    // Hide the loaderForFuture element
    loaderForFuture.style.display = "none";

    await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 800)));

    // Add the "collapseFuture" class to futureDetails element
    futureDetails.classList.add("collapseFuture");

  } else {
    // Display error message
    errorForFuture.innerHTML = `<h3 class="p-2  shadow my-3 rounded text-center">${data.error.message}</h3>`;

    // Hide the loaderForFuture element
    loaderForFuture.style.display = "none";

    await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 800)));

    // Display the errorForFuture element
    errorForFuture.style.display = "initial";
  }
}
  useEffect(()=>{
    const futureAPI = document.getElementById("futureAPI");
const cityForFuture = document.getElementById("cityForFuture");
    // Event listener for Enter key press on city input
cityForFuture.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    futureAPI.click();
  }
});

// Event listener for click on button check future having id futureAPI
futureAPI.addEventListener("click", fetchFutureData);
  })
  return ( <div id="future" class="container">
  <div class="search  " id="searchForFuture">
    <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' class="credit" alt="Weather data by WeatherAPI.com" / ></a>  <input type="text" id="cityForFuture" class="cityInput" placeholder="Enter your city..."/> <button id="futureAPI" class="weatherAPI">Check Future</button>
    </div>
    <div class="row  p-1 border rounded">
      <div class="col-12  p-3"  id="daysContainerFuture">Select the date for which you would like to see the Future. &nbsp;<input type="date"  id="futureDate" /></div> 
     </div>
    <div id="questionForFuture" class="row">
     <ConfusedCloud/>
      </div>
    <div id="loaderForFuture" class="  my-3"><div class="loader" ></div></div>
    <div id="errorForFuture" class="my-3 "></div>
   
    
      

     <div  class="row " id="futureDetails">
      <h1  class="col-12 p-3 shadow my-1 border rounded text-center my-2" id="futureHead"> </h1>
      
        <div class="row p-2 p-sm-1 mx-auto  ">
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-1 my-2">
                <div class="col-12 p-lg-3 p-md-2 p-sm-2 p-xs-2 shadow rounded ">
                  <h3 id="dateDisplay" class="col-12 p-3  text-center">Date</h3>
                  <div class="col-12 p-2"><img  id="futureWeatherIcon" class="img-fluid d-block mx-auto"  alt="weather_Icon"/></div>
                  <div id="conditionFuture" class="col-12 p-2 text-center"></div>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12  p-1 my-2" id="additionalFuture">
                <div class="col-12 p-3 shadow  rounded">
                  <p><span>Average Temperature - </span> <span id="avgTempFuture"></span></p>
                  <p><span>Humidity - </span> <span id="humidityValueFuture"></span></p>
                  <p><span>Uv - </span> <span id="uvValueFuture"></span></p>
                  <p><span>Wind - </span> <span id="windValueFuture"></span></p>
                  <p><span>Precipitation - </span> <span id="precipitationValueFuture"></span></p>
                </div>
              </div>
        </div>
      </div>
    

     
 
        
    
   


</div>)
}
