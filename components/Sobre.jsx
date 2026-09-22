import { FiCheck } from "react-icons/fi";

export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="container sobre-container">
        <div className="sobre-image">
          <img
            src="/images/cadeira.png"
            alt="Trabalho artesanal da Feito à Mão"
          />

          <div className="sobre-image-label">
            <strong>FEITO</strong>
            <span>À MÃO</span>
          </div>
        </div>

        <div className="sobre-content">
          <div className="section-eyebrow">
            <span></span>
            NOSSA ESSÊNCIA
          </div>

          <h2>
            Mais que matéria-prima.
            <span> Histórias ganham forma.</span>
          </h2>

          <p>
            A Feito à Mão nasceu da paixão por transformar madeira e aço em
            peças que carregam personalidade, utilidade e significado.
          </p>

          <p>
            Do móvel sob medida à restauração de uma peça antiga, cada projeto
            é tratado de maneira única, respeitando a ideia do cliente e as
            características de cada material.
          </p>

          <div className="sobre-points">
            <div>
              <FiCheck />
              Madeira & aço
            </div>

            <div>
              <FiCheck />
              Fabricação artesanal
            </div>

            <div>
              <FiCheck />
              Projetos personalizados
            </div>

            <div>
              <FiCheck />
              Restauração
            </div>
          </div>

          <a href="#contato" className="sobre-link">
            CONTE SUA IDEIA
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}