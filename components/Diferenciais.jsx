import {
  FiAward,
  FiHeart,
  FiMaximize,
  FiUser,
} from "react-icons/fi";

const diferenciais = [
  {
    icon: <FiHeart />,
    titulo: "Feito à mão",
    texto: "Cada peça recebe atenção em todas as etapas do processo.",
  },
  {
    icon: <FiMaximize />,
    titulo: "Sob medida",
    texto: "Projetos adaptados ao espaço, necessidade e estilo do cliente.",
  },
  {
    icon: <FiAward />,
    titulo: "Materiais selecionados",
    texto: "Madeira e aço trabalhados buscando resistência e acabamento.",
  },
  {
    icon: <FiUser />,
    titulo: "Atendimento direto",
    texto: "Sua ideia é discutida diretamente com quem vai transformá-la em realidade.",
  },
];

export default function Diferenciais() {
  return (
    <section className="diferenciais">
      <div className="container">
        <div className="diferenciais-title">
          <div className="section-eyebrow">
            <span></span>
            NOSSO JEITO DE FAZER
          </div>

          <h2>
            Cada detalhe
            <span> tem propósito.</span>
          </h2>
        </div>

        <div className="diferenciais-grid">
          {diferenciais.map((item, index) => (
            <article className="diferencial-card" key={item.titulo}>
              <span className="diferencial-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="diferencial-icon">{item.icon}</div>

              <h3>{item.titulo}</h3>

              <p>{item.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}