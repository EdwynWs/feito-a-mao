"use client";

import { useRef } from "react";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from "react-icons/fi";

const trabalhos = [
  {
    imagem: "/images/cadeira.png",
    categoria: "MARCENARIA",
    titulo: "Cadeiras artesanais",
    descricao: "Madeira trabalhada à mão, unindo conforto, resistência e acabamento.",
  },
  {
    imagem: "/images/banco-de-aço.png",
    categoria: "SERRALHERIA",
    titulo: "Estrutura em aço",
    descricao: "Estruturas metálicas produzidas sob medida para diferentes projetos.",
  },
  {
    imagem: "/images/arquibancada.png",
    categoria: "MARCENARIA",
    titulo: "Móvel restaurado",
    descricao: "Restauração e revitalização para dar uma nova história a cada peça.",
  },
  {
    imagem: "/images/carrinho.png",
    categoria: "PROJETO PERSONALIZADO",
    titulo: "Carrinho infantil",
    descricao: "Projetos exclusivos desenvolvidos artesanalmente do início ao fim.",
  },
  {
    imagem: "/images/cavalinho.png",
    categoria: "ARTESANATO",
    titulo: "Cavalinho de madeira",
    descricao: "Peças únicas que transformam madeira em lembranças para toda a vida.",
  },
];

export default function Trabalhos() {
  const sliderRef = useRef(null);

  const mover = (direcao) => {
    if (!sliderRef.current) return;

    const largura = sliderRef.current.clientWidth * 0.75;

    sliderRef.current.scrollBy({
      left: direcao === "direita" ? largura : -largura,
      behavior: "smooth",
    });
  };

  return (
    <section className="trabalhos" id="trabalhos">
      <div className="container">

        <div className="section-header">
          <div>
            <div className="section-eyebrow">
              <span></span>
              NOSSO TRABALHO
            </div>

            <h2>
              Feito à mão.
              <span> Feito para durar.</span>
            </h2>
          </div>

          <div className="section-header-right">
            <p>
              Cada projeto nasce de uma ideia e ganha forma através da
              madeira, do aço e do trabalho artesanal.
            </p>

            <div className="slider-buttons">
              <button
                onClick={() => mover("esquerda")}
                aria-label="Trabalho anterior"
              >
                <FiArrowLeft />
              </button>

              <button
                onClick={() => mover("direita")}
                aria-label="Próximo trabalho"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="trabalhos-slider" ref={sliderRef}>
          {trabalhos.map((trabalho, index) => (
            <article className="trabalho-card" key={index}>

              <div className="trabalho-image">
                <img
                  src={trabalho.imagem}
                  alt={trabalho.titulo}
                />

                <div className="trabalho-overlay"></div>

                <span className="trabalho-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="trabalho-arrow">
                  <FiArrowUpRight />
                </div>
              </div>

              <div className="trabalho-info">
                <span>{trabalho.categoria}</span>

                <h3>{trabalho.titulo}</h3>

                <p>{trabalho.descricao}</p>
              </div>

            </article>
          ))}
        </div>

        <div className="mobile-drag">
          <span></span>
          ARRASTE PARA VER MAIS
        </div>

      </div>
    </section>
  );
}