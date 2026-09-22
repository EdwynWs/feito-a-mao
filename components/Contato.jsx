import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export default function Contato() {
  return (
    <section className="contato" id="contato">
      <div className="container">
        <div className="contato-box">
          <div className="contato-decoration">FM</div>

          <div className="contato-content">
            <div className="section-eyebrow">
              <span></span>
              VAMOS CRIAR?
            </div>

            <h2>
              Tem uma ideia?
              <span> Vamos dar forma a ela.</span>
            </h2>

            <p>
              Conte o que você está imaginando. Podemos desenvolver uma solução
              personalizada para seu ambiente, projeto ou necessidade.
            </p>

            <a
              href="https://wa.me/5514998160781?text=Olá! Vim pelo site da Feito à Mão e gostaria de solicitar um orçamento."
              target="_blank"
              rel="noopener noreferrer"
              className="contato-button"
            >
              <div>
                <FaWhatsapp />

                <span>
                  <small>FALE PELO WHATSAPP</small>
                  Solicitar orçamento
                </span>
              </div>

              <FiArrowUpRight />
            </a>
          </div>

          <div className="contato-side">
            <span>PEÇAS ÚNICAS</span>
            <span>PROJETOS SOB MEDIDA</span>
            <span>MADEIRA & AÇO</span>
            <span>FEITO À MÃO</span>
          </div>
        </div>
      </div>
    </section>
  );
}