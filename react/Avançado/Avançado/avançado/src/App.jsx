import { useState } from 'react'
import './App.css'

// imagens (assets)
import lambo1 from "./assets/lamborg1.jpg";
import lambo2 from "./assets/lamborg2.jpg";

// componentes IMPORTS
import ManageData2UseState from './components/UseState'
import ListRender from './components/ListRender'
import CondicionalRender from './components/CondicionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Fragment2 from './components/Fragment2'
import Container from './components/Container'
import ExecuteFunction from './components/ExecuteFunction'
import Message from './components/Message'
import ChangeMessageState from './components/ChangeMessageState'

function App() {

  const [userName] = useState("Henry")

  //  STATE LIFT PRA RODAR
  const [message, setMessage] = useState("Clique em um botão")

  const cars = [  
    {id: 1, brand: "Ferrari", color: "Vermelho", km: 0, novo: true},
    {id: 2, brand: "Ford", color: "Preto", km: 10000, novo: false},
    {id: 3, brand: "Audi", color: "Branco", km: 5000, novo: false}
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  // função que muda o estado
  const handleMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <>
      <div>

        <h1> AVANÇADO Projeto React</h1>

        {/* IMAGENS */}
        <h2>Carros</h2>

        <div className="img">
          <div>
            <img src="/porshe.jpg" alt="Porsche" />
            <h3>Porsche</h3>
          </div>

          <div>
            <img src="/audi.jpg" alt="Audi" />
            <h3>Audi</h3>
          </div>
        </div>

        <div className="cards-lambo">
          <div className="card-lambo">
            <img src={lambo1} alt="Lamborghini" />
            <h3>Lamborghini</h3>
          </div>

          <div className="card-lambo">
            <img src={lambo2} alt="Lamborghini" />
            <h3>Lamborghini</h3>
          </div>
        </div>

        <hr />

        {/* COMPONENTES */}
        <ManageData2UseState />
        <hr />

        <ListRender />
        <hr />

        <CondicionalRender />
        <hr />

        <ShowUserName name={userName} />
        <hr />

        <CarDetails brand="Ferrari" km={100000} color="Preto" novo={false}/>
        <CarDetails brand="Ford" color="Vermelho" km={0} novo={true}/>
        <hr />

        <h2>Loop de Objetos</h2>
        {cars.map((car) => (
          <CarDetails 
            key={car.id} 
            brand={car.brand} 
            color={car.color} 
            km={car.km} 
            novo={car.novo}
          />
        ))}

        <hr />

        <Fragment2 propFragment='teste'/>

        <hr />

        <Container propValor="Henry"> 
          <p>Conteúdo filho dentro do container</p>
        </Container>

        <hr />

        <ExecuteFunction myFunction={showMessage}/>

        <hr />

        {/*  STATE LIFT FUNCIONANDO */}
        <Message msg={message} />
        <ChangeMessageState changeMessage={handleMessage}/>
        <br/>

      </div>
    </>
  )
}

export default App