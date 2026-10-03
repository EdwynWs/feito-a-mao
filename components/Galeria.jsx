"use client";

import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const fotos = Array.from({ length: 15 }, (_, index) => ({
  src: `/images/${index}.jpg`,
  alt: `Processo artesanal da Feito à Mão - foto ${index + 1}`,
}));

export default function Galeria() {
  const sliderRef = useRef(null);

  const mover = (direcao) => {
    if (!sliderRef.current) return;

    const largura = sliderRef.current.clientWidth * 0.8;

    sliderRef.current.scrollBy({
      left: direcao === "direita" ? largura : -largura,
      behavior: "smooth",
    });
  };

  return (
    <section className="galeria-real" id="oficina">
      <div className="container">

        <div className="galeria-real-header">
          <div className="galeria-real-title">
            <div className="section-eyebrow">
              <span></span>
              NOSSA OFICINA
            </div>

            <h2>
              Aqui você vê o
              <span> trabalho de verdade.</span>
            </h2>
          </div>

          <div className="galeria-real-header-right">
            <p>
              Do primeiro corte ao acabamento final. Madeira, aço,
              ferramentas e trabalho artesanal transformando ideias
              em peças feitas para durar.
            </p>

            <div className="slider-buttons">
              <button
                onClick={() => mover("esquerda")}
                aria-label="Foto anterior"
              >
                <FiArrowLeft />
              </button>

              <button
                onClick={() => mover("direita")}
                aria-label="Próxima foto"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="galeria-real-slider" ref={sliderRef}>
          {fotos.map((foto, index) => (
            <figure className="galeria-real-card" key={foto.src}>
              <div className="galeria-real-image">
                <img
                  src={foto.src}
                  alt={foto.alt}
                  loading="lazy"
                />

                <div className="galeria-real-shade"></div>

                <div className="galeria-real-info">
                  <span>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p>FEITO À MÃO</p>
                </div>
              </div>
            </figure>
          ))}
        </div>

        <div className="galeria-real-bottom">
          <span></span>
          ARRASTE PARA CONHECER NOSSO TRABALHO
        </div>

      </div>
    </section>
  );
}