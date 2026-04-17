
import './App.css'
import FirstComponents from './components/FirstComponents'
import MyComponent from './components/MyComponent'
import TemplateExpressions from './components/TemplateExpressions'
import Events from './components/Events'
import lambo1 from "./assets/lamborg1.jpg";
import lambo2 from "./assets/lamborg2.jpg";



function App() {


  return (
    <>

      <div class="card">

        {/*SE PRECISAR PRA IMPORTAR AS PAGINAS
<MyComponent />
<FirstComponents />
<TemplateExpressions />
<Events />
*/}



      </div>

      <div className="img">

        <div>
          <img src="./porshe.jpg" alt="Porsche" />
          <h3>Porsche</h3>
        </div>

        <div>
          <img src="./audi.jpg" alt="Audi" />
          <h3>Audi</h3>
        </div>

      </div>

      <div className="cards-lambo">

        <div className="card-lambo">
          <img src={lambo1} alt="Lamborghini traseira" />
          <h3>Lamborghini</h3>
        </div>
        


        <div className="card-lambo">
          <img src={lambo2} alt="Lamborghini frente" />
          <h3>Lamborghini</h3>
        </div>
        <br />
        <br />


      </div>








    </>
  )
}

export default App
