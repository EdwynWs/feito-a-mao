import { FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <a href="#inicio" className="footer-brand">
            <div className="footer-mark">
              <span>F</span>
              <span>M</span>
            </div>

            <div>
              <strong>Feito à Mão</strong>
              <small>MARCENARIA & SERRALHERIA</small>
            </div>
          </a>

          <p>
            Madeira, aço e trabalho artesanal transformados em peças feitas
            para durar e criar memórias.
          </p>

          <a href="#inicio" className="footer-top-button">
            <FiArrowUp />
          </a>
        </div>

        <div className="footer-middle">
          <nav>
            <a href="#inicio">Início</a>
            <a href="#trabalhos">Trabalhos</a>
            <a href="#servicos">Serviços</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <span>MADEIRA • AÇO • ARTE</span>
        </div>

        <div className="footer-bottom">
  <p>
    © {new Date().getFullYear()} Feito à Mão. Todos os direitos reservados.
  </p>

      <a
        href="https://edwyn-portfolio.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="footer-developer"
      >
        <span>Desenvolvido por</span>

        <strong>
          EWS TECH
          <span className="footer-arrow">↗</span>
        </strong>
      </a>
    </div>
      </div>
    </footer>
  );
}