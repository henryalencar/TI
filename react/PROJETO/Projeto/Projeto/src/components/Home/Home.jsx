import './Home.css'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "../Card/Card";

const Home = () => {
  const location = useLocation();

  //  Scroll suave ao mudar hash
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  //  DADOS DOS VEÍCULOS EM CARDS (USANDO MAP E PROPS) OLHAR NO Card.jsx
const veiculos = [
  { id: 1, nome: "Mercedes AMG SUV", preco: "$ 350.000", imagem: "/mercedesP.jpg" },
  { id: 2, nome: "Mercedes Sport", preco: "$ 320.000", imagem: "/mercedes2.jpg" },
  { id: 3, nome: "Mercedes Black", preco: "$ 400.000", imagem: "/mercedes5.jpg" },
  { id: 4, nome: "Mercedes Luxo", preco: "$ 450.000", imagem: "/mercedesLuxo.jpg" },
  { id: 5, nome: "Mustang", preco: "$ 450.000", imagem: "/mustang.jpg" },
  { id: 6, nome: "McLaren", preco: "$ 900.000", imagem: "/mclaren.jpg" },

  { id: 7, nome: "Yamaha R1", preco: "$ 110.000", imagem: "/moto1.jpg" },
  { id: 8, nome: "Honda CBR", preco: "$ 75.000", imagem: "/moto2.jpg" },
  { id: 9, nome: "Kawasaki Ninja", preco: "$ 80.000", imagem: "/moto3.jpg" },
  { id: 10, nome: "BMW S1000RR", preco: "$ 110.000", imagem: "/moto5.jpg" },

  { id: 11, nome: "Harley Davidson Classic", preco: "$ 95.000", imagem: "/motoVintage1.jpg" },
  { id: 12, nome: "Royal Enfield Bullet", preco: "$ 70.000", imagem: "/motoVintage2.jpg" },

  { id: 13, nome: "Corvette Clássico", preco: "$ 750.000", imagem: "/carroVintage1.jpg" },
  { id: 14, nome: "Luxo Vintage", preco: "$ 1.200.000", imagem: "/carroVintage2.jpg" },

  { id: 15, nome: "SUV Mercedes", preco: "$ 1.300.000", imagem: "/suvMercedes.jpg" },
  { id: 16, nome: "Lamborghini SUV", preco: "$ 1.590.000", imagem: "/lamboSuv.jpg" },
  { id: 17, nome: "Rolls Royce", preco: "$ 2.500.000", imagem: "/suvExec.jpg" },

  { id: 18, nome: "Caminhonete Ford", preco: "$ 2.500.000", imagem: "/caminhonete1.jpg" },
  { id: 19, nome: "Caminhonete Luxo", preco: "$ 2.000.000", imagem: "/caminhonete2.jpg" },
  { id: 20, nome: "Caminhonete Toyota", preco: "$ 900.000", imagem: "/caminhonete3.jpg" },
  { id: 21, nome: "Caminhonete Chevrolet", preco: "$ 900.000", imagem: "/caminhonete6.jpg" },
];


  return (
    <main>
      
      {/* HERO */}
      
      <section id="home" className="hero">
        
        <h1>Bem-vindo à HENRYCAR</h1>
        <p>Carros e motos com os melhores preços</p>
        <button onClick={() => document.getElementById('cards').scrollIntoView({ behavior: 'smooth' })}> {/* scrol pra ROLAGEM  */}
          Ver veículos
        </button>
      </section>
      

      {/* SOBRE A EMPRSA */}
      <section id="sobre" className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>Sobre a HenryCar</h2>
            <p>
              A <strong>HenryCar</strong> é uma empresa especializada na venda de carros e motos de alta qualidade. 
              Nosso objetivo é oferecer veículos confiáveis, modernos e com preços competitivos, garantindo 
              uma experiência de compra transparente e segura.
            </p>
            <p>
              Com anos de experiência no mercado automotivo, nossa equipe está pronta para atender 
              cada cliente de forma personalizada, ajudando na escolha do veículo ideal.
            </p>
          </div>

          <div className="about-image">
            <img src="/logoHenry2.png" alt="Veículos HenryCar" />
          </div>
        </div>
      </section>

      {/* CARDSS */}
      <section id="cards" className="cards">
  <h2 className="section-title">Nossos Veículos</h2>

  {/* CARDS */}
  <div className="cards-container">
    {veiculos.map((v) => (
      <Card
        key={v.id}
        nome={v.nome}
        preco={v.preco}
        imagem={v.imagem}
      />
    ))}
  </div>

  {/* BOTÕES */}
  <div className="social-float">
    <a 
      href="https://wa.me/5511999999999" 
      target="_blank"
      rel="noopener noreferrer"
      className="btn whatsapp"
    >
      <img src="/watsNV1.png" alt="WhatsApp" />
    </a>

    <a 
      href="https://instagram.com/seuusuario" 
      target="_blank"
      rel="noopener noreferrer"
      className="btn instagram"
    >
      <img src="/instaNV1.png" alt="Instagram" />
    </a>
  </div>
</section>


{/* CONTATO */}
<section id="contato" className="contato">
  <div className="contato-container">
    <h2>Fale Conosco</h2>
    <p>Entre em contato com a HenryCar para dúvidas, sugestões ou orçamentos.</p>

    <form className="form-contato">
      <input type="text" placeholder="Nome" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Mensagem"></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</section>
    </main>
  )
}

export default Home