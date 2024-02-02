import { useState,useEffect } from "react"; 
 import { Welcome } from "./components/welcome";
 import { Current } from "./components/current";
import { Forecast } from "./components/Forecast/forecast";
import { Historical } from "./components/Historical/past";
import { Future } from "./components/Future/future";
import { Marine } from "./components/Marine/marine";
import { Astronomy } from "./components/Astronomy/astro";
import { Timezone } from "./components/Timezone/timezone";
import { Sports } from "./components/Sports/sports";

 
function App() {
     const [select,setSelect]=useState(<Welcome/>);

  async function renderComp(comp){

    document.getElementById("dashboard").classList.remove("expandMe");
    await new Promise(resolve=>setTimeout(()=>setTimeout(()=>resolve("This is for loading Time"),200)));

    let sections=["welcome","current","forecast","historical","future","marine","astronomy","timezone","sports"]
     let components=[<Welcome/>,<Current/>,<Forecast/>,<Historical/>,<Future/>,<Marine/>,<Astronomy/>,<Timezone/>,<Sports/>];
      setSelect("");
    document.getElementById("componentLoader").style.display="grid";
    await new Promise(resolve=>setTimeout(()=>setTimeout(()=>resolve("This is for loading Time"),500)));

    document.getElementById("componentLoader").style.display="none";
        
           setSelect(components[sections.indexOf(comp)]);
        
         
      

  }
 useEffect(()=>{
   /*Mobile Dashboard */
      //add an event to bars Icon
      document.getElementById("dashToggle").addEventListener("click",()=>{

        //increase the size to allow user to select elements
       document.getElementById("dashboard").classList.add("expandMe");
        //make cross Icon visible
       document.getElementById("close").classList.add("expandMe");

    });
     //add an event to cross Icon
    document.getElementById("close").addEventListener("click",()=>{
          //remove the cross Icon

        document.getElementById("dashboard").classList.remove("expandMe");
           

    });
/* End of Dashboard */
 })

  return (
    <div id="app">

      <span id="dashToggle" ><i class="fa-solid fa-bars"></i></span>

      <div id="dashboard" class="  text-white  shadow ">
          <i id="close" class="fa-solid fa-xmark"></i>
          <h1 id="dashIcon" onClick={()=>renderComp('welcome')}> <i class="fi fi-ss-cloud-code"></i> <span></span> </h1>
        <div class="container ">
          <div class="row p-3  " id="dashItems">
           
            <div class="col-12  rounded p-2  my-2" onClick={()=>renderComp('current')}> <div class="col-6 mx-auto"><span><i class= "fi fi-sr-cloud-download"></i> </span>  </div></div>
            <div class="col-12  rounded p-2  my-2" onClick={()=>renderComp('forecast')}><div class="col-6 mx-auto"><span><i class= "fi fi-sr-temperature-list" ></i> </span></div> </div>
            <div class="col-12  rounded p-2  my-2" onClick={()=>renderComp('historical')}><div class="col-6 mx-auto"><span><i class= "fi fi-sr-time-past" ></i> </span></div> </div>
            <div class="col-12  rounded p-2  my-2" onClick={()=>renderComp('future')}><div class="col-6 mx-auto"><span><i class= "fi fi-sr-time-forward" ></i> </span></div> </div>
            <div class="col-12  rounded p-2  my-2" onClick={()=>renderComp('marine')}><div class="col-6 mx-auto"><span><i class="fi fi-ss-anchor" ></i> </span>  </div></div>
            <div class="col-12  rounded p-2  my-2" onClick={()=>renderComp('astronomy')}><div class="col-6 mx-auto"><span><i class="fa-solid fa-satellite-dish"></i> </span></div>  </div>
            <div class="col-12  rounded p-2  my-2" onClick={()=>renderComp('timezone')}><div class="col-6 mx-auto"><span><i class="fa-solid fa-hourglass-end"></i> </span></div>  </div>
            <div class="col-12  rounded p-2  my-2" onClick={()=>renderComp('sports')}><div class="col-6 mx-auto"><span><i class= "fi fi-ss-trophy-star" ></i>  </span></div> </div>
            
          </div>
        </div>

        </div>


      <div id="box" class="p-lg-3 p-md-2 p-sm-1 p-xs-1">


       <div class="componentLoader" id="componentLoader"></div>
                {select}
      </div>
          
      
    </div>
  );
}

export default App;
