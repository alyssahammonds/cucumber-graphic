import './App.css';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import cucumber from './images/cucumber.png';


// npm install gsap @gsap/react


gsap.registerPlugin(useGSAP);

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
    hiiiiii
      </section>
      
    </div>
  )
}

gsap.to(".title", { duration: 2, x: 100 });

gsap.config({
  nullTargetWarn: false
});




export default App;
