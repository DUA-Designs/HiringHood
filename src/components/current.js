import { useEffect } from 'react';
import ConfusedCloud from './confusedCloud';

export function Current(){

async function fetchCurrentData(){
    //selected the required html elements
const locationHead=document.getElementById("locationHead");
const flexBox=document.getElementById("flex-box");

const weatherIcon=document.getElementById("weatherIcon");
const temp=document.getElementById("temp");
const realfeel=document.getElementById("realfeel");
const humidityValue=document.getElementById("humidityValue");
const uvValue=document.getElementById("uvValue");
const windValue=document.getElementById("windValue");
const gustValue=document.getElementById("gustValue");
const weather=document.getElementById("weather");
const city=document.getElementById('city');
const cloudValue=document.getElementById("cloudValue");
const precipitationValue=document.getElementById("precipitationValue");
const windDegreeValue=document.getElementById("windDegreeValue");
const pressureValue=document.getElementById("pressureValue");

const moreDetails=document.getElementById("moreDetails");
const airCheck=document.getElementById("airCheck");
 
const coValue=document.getElementById("coValue");
const no2Value=document.getElementById("no2Value");
const o3Value=document.getElementById("o3Value");
const so2Value=document.getElementById("so2Value");
const pm10Value=document.getElementById("pm10Value");
const usEpa =document.getElementById("us-epa-indexValue");
const loader=document.getElementById("loader");
const condition=document.getElementById("condition");
const time=document.getElementById("time");
const conditionArray=["Good","Moderate","Unhealthy for sensitive group","Unhealthy for all","Very Unhealthy","Hazardous"];
const smiley=[`<i class="fa-regular fa-face-smile-beam"></i>`,`<i class="fa-regular fa-face-smile"></i>`,`<i class="fa-regular fa-face-frown-open"></i>`,`<i class="fa-regular fa-face-frown"></i>`,`<i class="fa-regular fa-face-sad-tear"></i>`,`<i class="fa-regular fa-face-sad-cry"></i>`];

    document.getElementById("questionForCurrent").style.display="none";
    document.getElementById("errorForCurrent").style.display="none";
    flexBox.classList.remove("CollapseMe");
    moreDetails.classList.remove("makeVisible");

    await new Promise(resolve=>setTimeout(()=>setTimeout(()=>resolve("This is for loading Time"),1000)));
    //displaying loader
    loader.style.height= `${window.innerHeight-document.getElementById("searchForCurrent").offsetHeight}px`;
    //changing the view point to the details.
    document.getElementById("comeHere").scrollIntoView({behavior:"smooth"});
    loader.style.display="grid";
  


    await new Promise(resolve=>setTimeout(()=>setTimeout(()=>resolve("This is for loading Time"),500)));
 
     
    
      
    
     const response= await fetch(`https://api.weatherapi.com/v1/current.json?key=2f1a5f47063b4d3c96390406240201&q=${city.value.trim()}&aqi=${airCheck.value}`);
    
            const data=await response.json();
        //if no error we proceed with adding the details
       if(data.current){
       locationHead.innerHTML=`City - ${data.location.name}, ${data.location.region} <span id="deg"  >${data.current.temp_c}<sup>o</sup><sub>c</sub></span>`;
       weatherIcon.src=`${data.current.condition.icon}`;
       temp.innerHTML=data.current.temp_c;
       realfeel.innerHTML=`Realfeel ${data.current.feelslike_c}`;
       humidityValue.innerHTML=data.current.humidity;
       uvValue.innerHTML=data.current.uv;
       windValue.innerHTML=`${data.current.wind_dir} ${data.current.wind_kph} km/h`;
       gustValue.innerHTML=`${data.current.gust_kph} km/h`;
       weather.innerHTML=`Condition - ${data.current.condition.text}`;
       windDegreeValue.innerHTML= `${data.current.wind_degree}`;
       cloudValue.innerHTML=`${data.current.cloud} %`;
       pressureValue.innerHTML=`${data.current.pressure_mb} mb`;
       precipitationValue.innerHTML=`${data.current.precip_mm} mm`;
       const timeCheck=data.location.localtime.split(" ")[1].split(":")[0];

       time.innerHTML=`${data.location.localtime} ${timeCheck>=12?"PM":"AM"}`;



                  // if user needs air quality
                if(airCheck.value==="yes"){
                         coValue.innerHTML=data.current.air_quality.co;   
                         no2Value.innerHTML=data.current.air_quality.no2;
                         o3Value.innerHTML=data.current.air_quality.o3;
                 so2Value.innerHTML=data.current.air_quality.so2;
                  pm10Value.innerHTML=data.current.air_quality.pm10;
                  let ind=data.current.air_quality["us-epa-index"];
         
                 usEpa.innerHTML=data.current.air_quality["us-epa-index"];
                 condition.innerHTML=`As per the "US - EPA standard" the condition seems to be "${conditionArray[ind>=6?5:ind-1]}" ${smiley[ind>=6?5:ind-1]}`;
          
          
                //displaying air quality
                 document.getElementById("req").style.display="flex";
                 //removing not requested section
                 document.getElementById("notReq").style.display="none";



              }
              //otherwise for air quality
              else{
                    //removing air quality details
                  document.getElementById("req").style.display="none";
                    //displaying not requested section 
                document.getElementById("notReq").style.display="block";
                }

       await new Promise(resolve=>setTimeout(()=>setTimeout(()=>resolve("This is for loading Time"),1000)));
         //removing the loader
       loader.style.display="none";

         //expanding the flexbox as a dropdown (lookup the css for clarity) 
       flexBox.classList.add("CollapseMe");
         //just a timeout for moreDetails section to make  smooth transition 
       setTimeout(()=>{
       
        moreDetails.classList.add("makeVisible");
       },500); 
   
    }
    //otherwise for api response
    else{
          //handling errors
       if(data.error.code===1003){
        document.getElementById("errorForCurrent").innerHTML=`<h3 class="p-4 shadow rounded text-center">Kindly enter relevant details.</h3>`;
       }
       else{  
        document.getElementById("errorForCurrent").innerHTML=`<h3 class="p-4 shadow rounded text-center">${data.error.message}</h3>`;

       }
      


        await new Promise(resolve=>setTimeout(()=>setTimeout(()=>resolve("This is for loading Time"),1000)));
        loader.style.display="none";
         //returning the viewpoint to the search 
        document.getElementById("searchForCurrent").scrollIntoView({behavior:"smooth"});
         //displaying the error section
        document.getElementById("errorForCurrent").style.display="initial";

       
       
    
    }
     

      
}
useEffect(()=>{
    

    const API=document.getElementById("weatherAPI");
const more=document.getElementById("more");
const moreDetails=document.getElementById("moreDetails");
const city=document.getElementById('city');

//Event Listener for Enter keypress on the city input
city.addEventListener("keypress",(event)=>{
         if( event.key==="Enter"){
            API.click();
           }
});

//Event Listener for button

API.addEventListener("click",fetchCurrentData);

//Event Listener for more button
more.addEventListener("click",()=>{
 //toggling the dropdown of moreDetails section
      console.log("toggled");
 moreDetails.classList.toggle("CollapseMe");

 //conditions to change innerHTML of more button
 if(moreDetails.classList.contains("CollapseMe")){
    more.innerHTML=`Less Details <i class="fa-solid fa-up-down"></i>`;
 }
 else{
    more.innerHTML=`More Details <i class="fa-solid fa-up-down"></i>`;

  }
});

 
 

 
 
})

    return (<div id="current"> 

    <div class="search" id="searchForCurrent">
        <a href="https://www.weatherapi.com/" title="Free Weather API"><img src='//cdn.weatherapi.com/v4/images/weatherapi_logo.png' class="credit" alt="Weather data by WeatherAPI.com"/ ></a>  <input type="text" id="city" class="cityInput" placeholder="Enter your city..."/> <button id="weatherAPI" onClick={fetchCurrentData} class="weatherAPI">Check Weather</button>

    </div>

    <div id="air" class="p-4 border rounded   mx-4"> <span> Need air quality? Select the option before typing the city name.</span> <label>Get Air Quality <select  id="airCheck"> <option value="yes">Yes</option><option value="no" selected>No</option></select></label></div>
    <div id="questionForCurrent" class="container  ">
       <ConfusedCloud/>
    </div>
    <div id="loader" class="  my-3"><div class="loader" ></div></div>
    <div id="errorForCurrent" class="row"></div>
    <div id="flex-box" class="  my-3 container"> 
  
      <div  id="container-box" class="row">
        <h1 id="locationHead" class="py-4 shadow rounded "> </h1>
          <div class="flex-box-childs   my-2 p-1  col-lg-6 col-md-5 col-sm-12 col-xs-12" id="comeHere">
           <div class="col-12 shadow p-5 rounded"  >
            <h4  class="p-1">Current Weather</h4>
            <div id="time" class="p-1"></div>
            <div id="two-boxes" class="p-1 my-1"><div id="box1"><img   id="weatherIcon" alt="weather_Icon" /></div><div id="box2"><h1 id="temp"> </h1><p id="realfeel"></p></div></div>
            <div id="weather" class="p-1 my-1"></div>
           </div>
       
          </div>
          <div class="flex-box-childs   my-2 p-1 col-lg-6 col-md-5 col-sm-12 col-xs-12">
           <div class="col-12 shadow p-3 rounded"  >
            <p><span>Humidity</span>  <span id="humidityValue"></span></p>
            <p><span>Uv</span>  <span id="uvValue"></span></p>
            <p><span>Wind</span>  <span id="windValue"></span></p>
            <p><span>Wind Gusts</span>  <span id="gustValue"></span></p>
          <div id="moreDetails">
            <p><span>Wind Degree</span>  <span><span id="windDegreeValue"></span> <sup id="windDegreeSup">O</sup></span></p>
            <p><span>Cloud</span>  <span id="cloudValue"></span></p>
            <p><span>Pressure</span>  <span id="pressureValue"></span></p>
            <p><span>Precipitation</span>  <span id="precipitationValue"></span></p>
        
          </div>
          <button id="more" class="btn btn-light" >More Details <i class="fa-solid fa-up-down"></i></button>
           </div>

        
         </div>
      </div>
     
      <div class="row shadow rounded my-3 p-3 ">
         <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12 p-2 fs-4 border-end  d-grid align-items-center"><h4 class="text-center" style={{fontSize:"1.5rem"}}>Air Quality</h4></div>
         <div id="airQualityDetails" class="col-lg-10 col-md-10 col-sm-10 col-xs-12 ">
            <div class="row  " id="req">
              <div id="loader"><div class="loader" ></div></div>
             <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-3  "><div class="myReqDetails"><span>co</span> <span id="coValue"></span></div></div>
             <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-3 "><div class="myReqDetails"><span>no2</span> <span id="no2Value"></span></div></div>
             <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-3 "><div class="myReqDetails"><span>o3</span> <span id="o3Value"></span></div></div>
             <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-3 "><div class="myReqDetails"><span>so2</span> <span id="so2Value"></span></div></div>
             <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-3 "><div class="myReqDetails"><span>pm10</span> <span id="pm10Value"></span></div></div>
             <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12 p-3 "><div class="myReqDetails"><span>us-epa-index</span> <span id="us-epa-indexValue"></span></div></div>
             <div class="col-12 p-3" id="condition"></div>
            </div>
            <div id="notReq" class="col-12 text-center ">Not Requested</div>
         </div>  
        
      </div>
         
    </div>
    </div>

  )
}