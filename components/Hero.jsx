import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function Hero() {
  return (
    <section className="hero-new" id="inicio">

      {/* IMAGEM */}
      <div className="hero-new-background">
        <img
          src="/images/mesa.png"
          alt="Mesa artesanal em madeira e aço produzida pela Feito à Mão"
        />
      </div>

      {/* SOMBREAMENTO */}
      <div className="hero-new-overlay"></div>

      {/* CONTEÚDO */}
      <div className="container hero-new-container">

        <div className="hero-new-content">

          <div className="hero-new-eyebrow">
            <span></span>
            MARCENARIA & SERRALHERIA ARTESANAL
          </div>

          <h1>
            Madeira e aço
            <strong>
              que transformam
              <br />
              espaços.
            </strong>
          </h1>

          <p className="hero-new-description">
            Móveis, estruturas e peças exclusivas produzidas
            artesanalmente para transformar ideias em projetos únicos.
          </p>

          <div className="hero-new-actions">

            <a
              href="https://wa.me/5514998160781?text=Olá! Vim pelo site da Feito à Mão e gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-new-primary"
            >
              <FaWhatsapp />

              <span>Solicitar orçamento</span>

              <FiArrowRight />
            </a>

            <a
              href="#trabalhos"
              className="hero-new-secondary"
            >
              Ver nossos trabalhos

              <FiArrowRight />
            </a>

          </div>

        </div>

        {/* TEXTO DECORATIVO */}
        <div className="hero-new-signature">
          <span>MADEIRA</span>
          <i></i>
          <span>AÇO</span>
          <i></i>
          <span>PROPÓSITO</span>
        </div>

      </div>

      {/* RODAPÉ DO HERO */}
      <div className="hero-new-bottom">

        <div className="container hero-new-bottom-inner">

          <div className="hero-new-scroll">
            <span className="hero-scroll-line"></span>

            <p>DESCUBRA NOSSO TRABALHO</p>
          </div>

          <p className="hero-new-made">
            FEITO À MÃO
            <span> / </span>
            PEÇAS COM PROPÓSITO
          </p>

        </div>

      </div>

    </section>
  );
}