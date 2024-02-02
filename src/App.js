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
        //this is for mobile dashboard
    document.getElementById("dashboard").classList.remove("expandMe");

    await new Promise(resolve=>setTimeout(()=>setTimeout(()=>resolve("This is for loading Time"),200)));
         //stored available section for easy state change
    let sections=["welcome","current","forecast","historical","future","marine","astronomy","timezone","sports"]
     let components=[<Welcome/>,<Current/>,<Forecast/>,<Historical/>,<Future/>,<Marine/>,<Astronomy/>,<Timezone/>,<Sports/>];
      setSelect("");
      //displaying component loader for just some simulation
    document.getElementById("componentLoader").style.display="grid";
    await new Promise(resolve=>setTimeout(()=>setTimeout(()=>resolve("This is for loading Time"),500)));

    document.getElementById("componentLoader").style.display="none";
        //displaying selected section.
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
         {/*
          The App is designed to help the user navigate effortlessly. This is possible because of responsive design.
        
        We have implemented a dashboard which has two layouts. Appropiate layout will be activated based on the device width.
      
      
        Summary about some common sections in all the components
        There will a search, question/confused, loader, error and details sections.

        Search : Will have an icon, input element and a button for event Handling.
        Question/confused : This is just to guide the user for the first time.
        Loader : To display animations while the function is running behind.
        Error : To display the error in all possible cases.
        Details : If everything goes well this section will display real-time details fetched from the API.

        Note: For some components the layout might be a little different but the above sections would be present to handle the cases of all "User Interactions". 
         
         */}
         {//icon to handle navigation bar closing
         }
      <span id="dashToggle" ><i class="fa-solid fa-bars"></i></span>
          {//This is navigation bar.
            }
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

         {//This is the container holding all components
            }
      <div id="box" class="p-lg-3 p-md-2 p-sm-1 p-xs-1">

         {//This is component loader which runs during state change
            }
            <div class="componentLoader" id="componentLoader"></div>
                {select}
      </div>
          
      
    </div>
  );
}

export default App;
