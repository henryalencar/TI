import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* CONTATO */}
        <div className="footer-info">
          <h3>Contato</h3>
          <p>(11) 99999-9999</p>
          <p>contato@henrycar.com.br</p>
          <p>Rua Exemplo, 123 - São Paulo, SP</p>
        </div>

       
        <div className="footer-social">
          <h3>Redes Sociais</h3>

          <div className="social-icons">

            <a 
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/watsNV1.png" alt="WhatsApp" />
              <span>WhatsApp</span>
            </a>

            <a 
              href="https://instagram.com/seuusuario"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/instaNV1.png" alt="Instagram" />
              <span>Instagram</span>
            </a>

          </div>
        </div>

      </div>

      <p className="footer-copy">© 2026 HENRYCAR - Todos os direitos reservados</p>
    </footer>
  )
}

export default Footer