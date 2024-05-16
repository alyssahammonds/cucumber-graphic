import './App.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import cucumber from './images/cucumber.png';
import frog from './images/frog.png';
import { CustomEase } from "gsap/CustomEase";


// npm install gsap @gsap/react


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(CustomEase);

function App() {
  return (
    <div className="App">
      <div className="title">
        <header>
          <div>This is a cucumber</div>
        </header>
      </div>
      <section className="image">
        <div className="cucumber">
          <img src={cucumber} alt='cucumber' width={750} height={500} className='rounded-lg' />
        </div>
        <div className="text-scroll">
          <p> Cucumber is a widely cultivated plant in the gourd family, Cucurbitaceae. It is a creeping vine that bears cucumiform fruits that are used as vegetables. There are three main varieties of cucumber: slicing, pickling, and seedless. Within these varieties, several cultivars have been created. In North America, the term "wild cucumber" refers to plants in the genera Echinocystis and Marah, but these are not closely related. The cucumber is originally from South Asia, but now grows on most continents. Many different types of cucumber are traded on the global market. </p>
        </div>

      </section>

      <section className="chanuthi-section">
        <div className="titleF"> 
          <header>
            <div>This is a frog</div>
          </header>
        </div>
        <div className="move">
        <div className="frog">
          <img src={frog} alt='frog' width={750} height={500} className='rounded-lg'/>    
        </div>
        </div>
      </section>
      
    </div>
  )
}

gsap.to(".title", { duration: 2, x: 100 }); 

// //bounce effect
gsap.to(".frog",{
  duration:2 ,
  ease: CustomEase.create("custom", "M0,0 C0.309,0 0.186,0.3 0.5,0.3 0.853,0.3 0.684,0.001 1,0 "),
  y: -500,repeat: -1},
);
// //move to the right effect
gsap.to(".move", {duration:10,x:"60%",repeat: -1, ease:"none"}) ;  
gsap.to(".titleF", {duration:1, x: 100,ease: "none"});       


gsap.config({
  nullTargetWarn: false 
});




export default App;
