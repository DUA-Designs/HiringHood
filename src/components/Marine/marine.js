import { useEffect } from "react";
import ConfusedCloud from "../confusedCloud";




export function Marine(){


//  fetch marine data
async function fetchMarineData() {
        // Taking references for required HTML elements
 
const pointForMarine = document.getElementById("pointForMarine");
 
const loaderForMarine = document.getElementById("loaderForMarine");
const errorForMarine = document.getElementById("errorForMarine");
const marineDetails = document.getElementById("marineDetails");

    // Hide the questionForMarine, errorForMarine elements
    document.getElementById("questionForMarine").style.display = "none";
    errorForMarine.style.display = "none";
     // Hide marineDetails
     marineDetails.style.display = "none";

    // Extract latitude and longitude from the input
    var point = pointForMarine.value.trim().split(",");
     //reject if the input has letters
   if(/[A-z]+/g.test(point[0])){
        alert(`Kindly enter latitiude and longitude separated by comma(eg.: 23,67.227487)`);
        return;
    }
    //Display loaderForMarine
    loaderForMarine.style.display = "grid";
    // Set the height of loaderForMarine based on the window size
    loaderForMarine.style.height = `${window.innerHeight - document.getElementById("searchForMarine").offsetHeight}px`;

    // Check if the input point is not empty
    if (pointForMarine.value.trim() !== "") {
        // Fetch data from the API
        const response = await fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${point[0].trim()}&longitude=${point[1].trim()}&daily=wave_height_max,wave_direction_dominant,wind_wave_height_max,wind_wave_direction_dominant,swell_wave_height_max,swell_wave_direction_dominant&forecast_days=1`);
        const data = await response.json();

        // Check if the response contains daily data
        if (data.hasOwnProperty("daily")) {
            // Update HTML elements with marine data
            document.getElementById("headForMarine").innerHTML = `Coordinates :  lat- ${data.latitude}, long-${data.longitude}`;
            document.getElementById("waveHeightMax").innerHTML = `${data.daily.wave_height_max} ${data.daily_units.wave_height_max}`;
            document.getElementById("waveDirectionDominant").innerHTML = `${data.daily.wave_direction_dominant} ${data.daily_units.wave_direction_dominant}`;
            document.getElementById("windWaveHeightMax").innerHTML =` ${data.daily.wind_wave_height_max} ${data.daily_units.wind_wave_height_max}`;
            document.getElementById("windWaveDirectionDominant").innerHTML =` ${data.daily.wind_wave_direction_dominant} ${data.daily_units.wind_wave_direction_dominant}`;
            document.getElementById("swellWaveHeightMax").innerHTML = `${data.daily.swell_wave_height_max} ${data.daily_units.swell_wave_height_max}`;
            document.getElementById("swellWaveDirectionDominant").innerHTML = `${data.daily.swell_wave_direction_dominant} ${data.daily_units.swell_wave_direction_dominant}`;

            // Simulate loading time with a brief delay
            await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 1000)));

            // Hide loaderForMarine and display marineDetails
            loaderForMarine.style.display = "none";
            marineDetails.style.display = "flex";
        } else {
            // Handle error scenarios
            if (data.error) {
                errorForMarine.innerHTML = `<h3 class="p-4 text-center shadow shadow my-3 rounded">${data.reason}</h3>`;
            }

            // Hide loaderForMarine and display errorForMarine
            loaderForMarine.style.display = "none";
            await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 500)));
            errorForMarine.style.display = "initial";
        }
    } else {
        await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 500)));
        errorForMarine.innerHTML = `<h3 class="p-4 text-center shadow my-3 rounded">Kindly Enter the coordinates...</h3>`;

        // Hide loaderForMarine and display errorForMarine
        loaderForMarine.style.display = "none";
        await new Promise(resolve => setTimeout(() => setTimeout(() => resolve("This is for loading Time"), 500)));
        errorForMarine.style.display = "initial";
    }
}

    useEffect(()=>{

        const pointForMarine = document.getElementById("pointForMarine");
const marineAPI = document.getElementById("marineAPI");
        // Event listener for Enter key press on latitude,longitude input
pointForMarine.addEventListener("keypress", (event) => {
    if(event.key==="Enter"){
      marineAPI.click();
    }
 });
 
 // Event listener for click on check Marine button
 marineAPI.addEventListener("click", fetchMarineData);
    })
    return ( <div id="marine" class="container">
    <div class="search  " id="searchForMarine">
      <a href="https://open-meteo.com/" title="Free Weather API">open-meteo</a>  <input type="text" id="pointForMarine" class="cityInput" placeholder="Enter latitude,longitude..."/> <button id="marineAPI" class="weatherAPI">Check Marine</button>
    </div>
    <div id="questionForMarine" class="container  ">
      <ConfusedCloud/>
    </div>
    <div id="loaderForMarine" class="  my-3"><div class="loader" ></div></div>
    <div id="errorForMarine" class="my-3 "></div>

    <div class="row my-3 p-3 shadow rounded" id="marineDetails">
      <div class="col-12 p-3 text-center "><h3 id="headForMarine" class="border rounded py-4"> </h3></div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-3"><p class="col-12 border-bottom  p-1"> <span>Wave height max</span><span id="waveHeightMax"></span></p></div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-3"><p class="col-12 border-bottom  p-1"> <span>Wave Direction Dominant</span><span id="waveDirectionDominant"></span></p></div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-3"><p class="col-12 border-bottom  p-1"> <span>Wind Wave Height Max</span><span id="windWaveHeightMax"></span></p></div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-3"><p class="col-12 border-bottom  p-1"> <span>Wind Wave Direction Dominant</span><span id="windWaveDirectionDominant"></span></p></div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-3"><p class="col-12 border-bottom  p-1"> <span>Swell Wave Height Max</span><span id="swellWaveHeightMax"></span></p></div>
      <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 p-3"><p class="col-12 border-bottom  p-1"> <span>Swell Wave Direction Dominant</span ><span id="swellWaveDirectionDominant"></span></p></div>

    </div>
       

  </div>
    )
}
