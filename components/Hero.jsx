import {
  FiArrowRight,
  FiShield,
  FiTool,
  FiHeart,
} from "react-icons/fi";

import {
  FaWhatsapp,
  FaHammer,
  FaHandshake,
} from "react-icons/fa";

export default function Hero() {
  return (
    <>
      <section className="hero hero-reference" id="inicio">

        <div className="hero-background">
          <img
            src="/images/cavalinho.png"
            alt="Cavalinho artesanal em madeira"
          />
        </div>

        <div className="hero-overlay"></div>

        <div className="container hero-reference-container">

          <div className="hero-reference-content">

            <div className="hero-badge">
              <span></span>
              MARCENARIA & SERRALHERIA ARTESANAL
            </div>

            <h1>
              Madeira, aço e arte
              <strong>
                que transformam
                <br />
                e criam memórias.
              </strong>
            </h1>

            <div className="hero-reference-features">

              <div>
                <FaHammer />

                <p>
                  Itens sofisticados para
                  <br />
                  ambientes autênticos
                </p>
              </div>

              <span className="feature-divider"></span>

              <div>
                <span className="sparkles">✦</span>

                <p>
                  Feito à Mão — cada peça
                  <br />
                  nasce com propósito
                </p>
              </div>

            </div>

            <a
              href="https://wa.me/5514998160781?text=Olá! Vim pelo site da Feito à Mão e gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="hero-reference-button"
            >
              <FaWhatsapp />

              <span>Solicitar orçamento</span>

              <FiArrowRight />
            </a>

          </div>

          <div className="hero-handmade-text">
            <span>Projetos</span>
            <span>sob medida</span>
            <span>para o seu</span>
            <span>espaço.</span>

            <i></i>
          </div>

        </div>
      </section>

      <section className="hero-benefits">
        <div className="container hero-benefits-grid">

          <article>
            <FiShield />

            <div>
              <strong>Qualidade</strong>
              <p>
                Materiais selecionados
                <br />
                e ótimo acabamento.
              </p>
            </div>
          </article>

          <article>
            <FiTool />

            <div>
              <strong>Personalização</strong>
              <p>
                Projetos feitos sob medida
                <br />
                para cada cliente.
              </p>
            </div>
          </article>

          <article>
            <FaHandshake />

            <div>
              <strong>Compromisso</strong>
              <p>
                Do primeiro contato
                <br />
                à entrega final.
              </p>
            </div>
          </article>

          <article>
            <FiHeart />

            <div>
              <strong>Tradição</strong>
              <p>
                Trabalho artesanal em
                <br />
                madeira e aço.
              </p>
            </div>
          </article>

        </div>
      </section>
    </>
  );
}