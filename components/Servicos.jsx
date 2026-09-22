import {
  FiTool,
  FiRefreshCw,
  FiEdit3,
  FiHome,
  FiSettings,
  FiArrowUpRight,
} from "react-icons/fi";

const servicos = [
  {
    numero: "01",
    icon: <FiHome />,
    titulo: "Móveis artesanais",
    texto:
      "Móveis produzidos artesanalmente em madeira, aço ou na combinação dos dois materiais.",
  },
  {
    numero: "02",
    icon: <FiEdit3 />,
    titulo: "Projetos sob medida",
    texto:
      "Desenvolvimento de peças personalizadas de acordo com seu espaço, necessidade e ideia.",
  },
  {
    numero: "03",
    icon: <FiRefreshCw />,
    titulo: "Restauração",
    texto:
      "Recuperação e transformação de móveis antigos, preservando sua história e renovando seu visual.",
  },
  {
    numero: "04",
    icon: <FiSettings />,
    titulo: "Serralheria",
    texto:
      "Estruturas, bases, suportes e peças em aço produzidas para projetos personalizados.",
  },
  {
    numero: "05",
    icon: <FiTool />,
    titulo: "Reparos",
    texto:
      "Manutenção e reparação de peças em madeira e metal para prolongar sua vida útil.",
  },
];

export default function Servicos() {
  return (
    <section className="servicos" id="servicos">
      <div className="container">
        <div className="servicos-heading">
          <div>
            <div className="section-eyebrow">
              <span></span>
              O QUE FAZEMOS
            </div>

            <h2>
              Da ideia até
              <span> a última peça.</span>
            </h2>
          </div>

          <p>
            Madeira, aço e criatividade se encontram para transformar ideias
            em peças únicas.
          </p>
        </div>

        <div className="servicos-list">
          {servicos.map((servico) => (
            <article className="servico-row" key={servico.numero}>
              <span className="servico-number">{servico.numero}</span>

              <div className="servico-icon">{servico.icon}</div>

              <h3>{servico.titulo}</h3>

              <p>{servico.texto}</p>

              <div className="servico-arrow">
                <FiArrowUpRight />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}