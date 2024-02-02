import IMG1 from '../images/leaf.gif';
import IMG2 from '../images/wind.png';
import IMG3 from '../images/query-analysis.png';


export function Welcome(){
    return (
        <div id="welcome" class="container-fluid">
            <div class="row p-2 mt-1 mb-3 shadow rounded"><div class="col-lg-1  col-md-1 col-sm-2 col-xs-3 mx-auto"><img src={IMG1} class="img-fluid" alt="leaf_image" id="img1"/></div><h1 class=" py-2  col-lg-11 col-md-11 col-sm-12 col-xs-12 ">Welcome to Weather App &nbsp;</h1></div>
            <div class="row   p-2 shadow rounded ">
              <div class="col-lg-4 col-md-4 col-sm-4 col-xs-2   mx-auto p-5"><img src={IMG2} class="img-fluid " alt="wind_Image" id="img2"/></div>
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12  p-2  ">
                <div class="col-12 my-2   p-2 rounded d-flex flex-wrap  ">
 
                <p class="col-12 my-2 ">Weather App provides the below Weather data </p>
                <p class="col-12 my-2"><i class="fa-solid fa-angle-down"></i></p>
              
                <ul  class="col-lg-7 col-md-7 col-sm-12 col-xs-12    text-start"  >
                <h4>Main Categories</h4>
                  <li class="p-2 m-1" >Current</li>
                  <li class="p-2 m-1" >Forecast (upto 7 days ahead)</li>
                  <li class="p-2 m-1" >Historical (upto 7 days past)</li> 
                  <li class="p-2 m-1" >Future (In range - '14 to 300' days ahead)</li>
                  <li class="p-2 m-1" >Marine (only takes lat,long input)</li>
                  <li class="p-2 m-1" >Astronamy</li>
                  <li class="p-2 m-1" >Timezone</li>
                  <li class="p-2 m-1" >Sports</li>
                </ul>
              

                 <ul class=" col-lg-5 col-md-5 col-sm-12 col-xs-12  text-start">
                  <h4>Additional data</h4>
                <li class="p-2 m-1" >Air Quality  </li>
                </ul>
                 
                </div>
              
              </div>
              <div class="col-12 p-3 text-start">
                <p>Note: We are currently using free trial period of 14 days from the API provider. After 7th February the forecast will be reduced to 3 days and future feature would stop working. </p>
              </div>
              
             
            </div>
            <div class="row my-3 py-2 shadow rounded">
              <div class="col-lg-8 col-md-8 col-sm-8 col-xs-12  p-2">
                <div class="col-12 my-2 p-2   ">
                <p class="col-12">The details of the selected location will be shown so an input is required. </p>
                <p class="col-12 my-2"><i class="fa-solid fa-angle-down"></i></p>
                <ul class="col-12 text-start">
                  <h4 class="">Your query can be any of the following</h4>
                  <li  class="p-2 m-1">Latitude and Longitude (e.g.:  48.8567,2.3508)</li>
                  <li  class="p-2 m-1">City name (e.g.: Pune) </li>
                  <li  class="p-2 m-1">UK postcode (e.g.: SW1) - only UK postcode are supported</li>
                  <li  class="p-2 m-1">US zip (e.g.: 10001) - only US zip are supported</li>
                  <li  class="p-2 m-1">Metar code (e.g.: metar:VAPO PNQ)</li>
                  <li  class="p-2 m-1">iata:3 digit airport code (e.g:iata:PNQ)</li>
                  <li  class="p-2 m-1"> auto:ip IP lookup (e.g:auto:ip)</li>
                  <li  class="p-2 m-1">IP address (IPv4 and IPv6 supported) (e.g:100.0.0.1)</li>
                  

                </ul>
                </div>
              </div>
              <div class="col-lg-2 col-md-2 col-sm-2 col-xs-12  d-grid align-items-center  justify-content-center"><img src={IMG3} class="img-fluid" alt="query_Image" id="img3"/></div>
              <div class="col"></div>
            </div>
            
          
          </div>
    )
}