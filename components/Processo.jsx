"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Processo() {
  const sectionRef = useRef(null);
  const stageRef = useRef(null);
  const woodRef = useRef(null);
  const finalImageRef = useRef(null);
  const blueprintRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=3200",
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      /*
       * ETAPA 01
       * A matéria-prima entra.
       */

      timeline.fromTo(
        woodRef.current,
        {
          scale: 0.65,
          rotate: -8,
          opacity: 0,
        },
        {
          scale: 1,
          rotate: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
        }
      );

      timeline.fromTo(
        ".process-step-01",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
        },
        "<"
      );

      /*
       * ETAPA 02
       * Desenho técnico.
       */

      timeline.to(".process-step-01", {
        opacity: 0,
        y: -30,
        duration: 0.4,
      });

      timeline.to(
      woodRef.current,
      {
        scale: 1,
        opacity: 0.48,
        rotate: 0,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.inOut",
      },
      "<"
    );

      timeline.fromTo(
      blueprintRef.current,
      {
        opacity: 0,
        scale: 0.94,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
      },
      "<"
    );

      timeline.fromTo(
  ".blueprint-line",
  {
    strokeDashoffset: 1000,
    opacity: 0,
  },
  {
    strokeDashoffset: 0,
    opacity: 1,
    duration: 1.6,
    stagger: 0.035,
    ease: "power1.inOut",
  },
  "<"
);

      timeline.fromTo(
        ".process-step-02",
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
        },
        "<0.3"
      );

      /*
       * ETAPA 03
       * Construção.
       */

      timeline.to(".process-step-02", {
        opacity: 0,
        y: -25,
        duration: 0.4,
      });

      timeline.to(blueprintRef.current, {
        rotate: -3,
        scale: 1.08,
        duration: 0.7,
      });

      timeline.fromTo(
        ".process-step-03",
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
        },
        "<"
      );

      timeline.fromTo(
        ".process-particles span",
        {
          opacity: 0,
          scale: 0,
          x: 0,
          y: 0,
        },
        {
          opacity: 0.8,
          scale: 1,
          x: () => gsap.utils.random(-120, 120),
          y: () => gsap.utils.random(-100, 100),
          duration: 0.8,
          stagger: 0.03,
        },
        "<"
      );

      /*
       * ETAPA 04
       * Acabamento.
       */

      timeline.to(".process-step-03", {
        opacity: 0,
        duration: 0.4,
      });

      timeline.to(blueprintRef.current, {
        opacity: 0,
        scale: 1.2,
        duration: 0.8,
      });

      timeline.fromTo(
        finalImageRef.current,
        {
          opacity: 0,
          scale: 1.15,
          filter: "grayscale(100%) brightness(0.5)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "grayscale(0%) brightness(0.75)",
          duration: 1.4,
        }
      );

      timeline.fromTo(
        ".process-step-04",
        {
          opacity: 0,
          y: 35,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
        },
        "<0.3"
      );

      /*
       * FINAL
       */

      timeline.to(finalImageRef.current, {
        filter: "grayscale(0%) brightness(0.48)",
        scale: 1.03,
        duration: 0.8,
      });

      timeline.to(".process-step-04", {
        opacity: 0,
        duration: 0.4,
      });

      timeline.fromTo(
        ".process-final",
        {
          opacity: 0,
          scale: 0.92,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
        }
      );

      timeline.fromTo(
        ".process-final-line",
        {
          width: 0,
        },
        {
          width: 70,
          duration: 0.5,
        },
        "<0.2"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="processo" ref={sectionRef}>
      <div className="process-stage" ref={stageRef}>
        {/* TEXTO VERTICAL */}

        <div className="process-side-label">
          PROCESSO
          <span></span>
          FEITO À MÃO
        </div>

        {/* CONTADOR */}

        <div className="process-counter">
          <span className="process-counter-current">01</span>

          <i></i>

          <span>04</span>
        </div>

        {/* BLOCO DE MADEIRA */}

        <div className="process-wood" ref={woodRef}>
          <div className="wood-grain wood-grain-1"></div>
          <div className="wood-grain wood-grain-2"></div>
          <div className="wood-grain wood-grain-3"></div>

          <span>MATÉRIA</span>
        </div>

        {/* DESENHO TÉCNICO */}

        <div className="process-blueprint" ref={blueprintRef}>
  <svg
  viewBox="0 0 820 650"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  {/* =========================================
      CABEÇA / PESCOÇO
  ========================================= */}

  {/* Silhueta principal igual ao brinquedo real */}
  <path
    className="blueprint-line blueprint-main"
    d="
      M300 105

      C292 80 286 57 289 35
      C309 50 325 70 334 94

      C349 105 362 122 367 142

      C373 163 370 188 360 211

      L348 245
      L374 327

      L278 327

      L257 250

      C247 245 237 239 227 229

      C216 218 211 203 214 189

      C217 174 227 164 242 158

      L278 145

      C289 137 296 121 300 105
    "
  />

  {/* =========================================
      ORELHA TRASEIRA
  ========================================= */}

  <path
    className="blueprint-line blueprint-detail"
    d="
      M299 106
      C279 88 268 67 266 46
      C286 55 302 70 313 89
    "
  />

  {/* =========================================
      FOCINHO
  ========================================= */}

  <path
    className="blueprint-line blueprint-detail"
    d="
      M242 158
      C224 164 207 174 198 187
      C190 198 193 210 203 217
      C214 225 232 224 247 218
    "
  />

  {/* =========================================
      OLHO
  ========================================= */}

  <circle
    className="blueprint-line blueprint-detail"
    cx="312"
    cy="151"
    r="6"
  />

  {/* =========================================
      PEGADOR
  ========================================= */}

  <circle
    className="blueprint-line blueprint-detail"
    cx="298"
    cy="187"
    r="8"
  />

  <path
    className="blueprint-line blueprint-main"
    d="M298 187 L252 187"
  />

  {/* =========================================
      ASSENTO
  ========================================= */}

  <path
    className="blueprint-line blueprint-main"
    d="
      M273 310
      L535 310

      Q552 310 552 327

      L552 347

      Q552 356 542 356

      L282 356

      Q273 356 273 347

      Z
    "
  />

  {/* Linha do acabamento do assento */}

  <path
    className="blueprint-line blueprint-detail"
    d="
      M282 346
      L542 346
    "
  />

  {/* =========================================
      CORPO / CAIXA CENTRAL
  ========================================= */}

  <path
    className="blueprint-line blueprint-main"
    d="
      M302 356
      L311 435

      L500 435
      L522 356
    "
  />

  {/* Painel interno */}

  <path
    className="blueprint-line blueprint-detail"
    d="
      M329 375
      L485 375

      L477 416
      L335 416

      Z
    "
  />

  {/* Parafusos */}

  <circle
    className="blueprint-line blueprint-detail"
    cx="325"
    cy="389"
    r="5"
  />

  <circle
    className="blueprint-line blueprint-detail"
    cx="480"
    cy="389"
    r="5"
  />

  {/* =========================================
      PERNA ESQUERDA
  ========================================= */}

  <path
    className="blueprint-line blueprint-main"
    d="
      M335 435
      L296 520

      L344 526
      L380 435
    "
  />

  {/* =========================================
      PERNA DIREITA
  ========================================= */}

  <path
    className="blueprint-line blueprint-main"
    d="
      M450 435
      L486 526

      L534 518
      L495 435
    "
  />

  {/* =========================================
      TRAVESSA
  ========================================= */}

  <path
    className="blueprint-line blueprint-detail"
    d="
      M315 476
      L514 476
    "
  />

  {/* =========================================
      BALANÇO TRASEIRO
  ========================================= */}

  <path
    className="blueprint-line blueprint-detail rocker-back"
    d="
      M150 492

      C188 542
      274 570
      408 573

      C539 575
      628 548
      676 493
    "
  />

  {/* Pontas traseiras */}

  <path
    className="blueprint-line blueprint-detail"
    d="
      M150 492
      C135 475 129 456 132 439
    "
  />

  <path
    className="blueprint-line blueprint-detail"
    d="
      M676 493
      C692 475 699 455 696 438
    "
  />

  {/* =========================================
      BALANÇO PRINCIPAL
  ========================================= */}

  <path
    className="blueprint-line blueprint-main blueprint-rocker"
    d="
      M124 505

      C170 566
      270 602
      409 603

      C550 604
      652 568
      704 504
    "
  />

  {/* Ponta esquerda levantada */}

  <path
    className="blueprint-line blueprint-main"
    d="
      M124 505
      C104 483 96 457 102 432
    "
  />

  {/* Ponta direita levantada */}

  <path
    className="blueprint-line blueprint-main"
    d="
      M704 504
      C724 481 733 454 727 430
    "
  />

  {/* =========================================
      LIGAÇÕES PERNAS → BALANÇO
  ========================================= */}

  <path
    className="blueprint-line blueprint-detail"
    d="
      M296 520
      L272 555
    "
  />

  <path
    className="blueprint-line blueprint-detail"
    d="
      M534 518
      L554 554
    "
  />

  {/* =========================================
      MEDIDA VERTICAL
  ========================================= */}

  <path
    className="blueprint-line dimension"
    d="M65 35 L65 603"
  />

  <path
    className="blueprint-line dimension"
    d="M54 35 L76 35"
  />

  <path
    className="blueprint-line dimension"
    d="M54 603 L76 603"
  />

  <path
    className="blueprint-line blueprint-guide"
    d="M76 35 L289 35"
  />

  <path
    className="blueprint-line blueprint-guide"
    d="M76 603 L124 603"
  />

  {/* =========================================
      MEDIDA HORIZONTAL
  ========================================= */}

  <path
    className="blueprint-line dimension"
    d="M102 628 L727 628"
  />

  <path
    className="blueprint-line dimension"
    d="M102 617 L102 639"
  />

  <path
    className="blueprint-line dimension"
    d="M727 617 L727 639"
  />

  {/* =========================================
      LINHAS TÉCNICAS
  ========================================= */}

  <path
    className="blueprint-line blueprint-guide"
    d="M410 20 L410 610"
  />

  <path
    className="blueprint-line blueprint-guide"
    d="M90 310 L750 310"
  />

  <path
    className="blueprint-line blueprint-guide"
    d="M90 435 L750 435"
  />

  {/* =========================================
      TEXTOS
  ========================================= */}

  <text
    className="blueprint-text"
    x="35"
    y="340"
    transform="rotate(-90 35 340)"
  >
    620 mm
  </text>

  <text
    className="blueprint-text"
    x="375"
    y="648"
  >
    740 mm
  </text>

  <text
    className="blueprint-small-text"
    x="565"
    y="325"
  >
    ASSENTO
  </text>

  <text
    className="blueprint-small-text"
    x="545"
    y="465"
  >
    ESTRUTURA
  </text>

  <text
    className="blueprint-small-text"
    x="565"
    y="570"
  >
    BASE DE BALANÇO
  </text>
</svg>

  {/* MARCADORES EXTERNOS */}

  <div className="blueprint-tag blueprint-tag-one">
    <span></span>
    MADEIRA
  </div>

  <div className="blueprint-tag blueprint-tag-two">
    <span></span>
    ENCAIXE
  </div>

  <div className="blueprint-material">
    MADEIRA MACIÇA
    <span>PROJETO ARTESANAL</span>
  </div>
</div>

        {/* PARTÍCULAS */}

        <div className="process-particles">
          {Array.from({ length: 20 }).map((_, index) => (
            <span key={index}></span>
          ))}
        </div>

        {/* IMAGEM FINAL */}

        <img
          ref={finalImageRef}
          className="process-final-image"
          src="/images/cavalinho.png"
          alt="Cavalinho artesanal finalizado"
        />

        {/* ETAPA 1 */}

        <div className="process-copy process-step-01">
          <span className="process-number">01</span>

          <small>MATÉRIA-PRIMA</small>

          <h2>
            Tudo começa
            <em> na matéria.</em>
          </h2>

          <p>
            Madeira, aço e uma ideia esperando para ganhar forma.
          </p>
        </div>

        {/* ETAPA 2 */}

        <div className="process-copy process-step-02">
          <span className="process-number">02</span>

          <small>PROJETO</small>

          <h2>
            Primeiro,
            <em> imaginamos.</em>
          </h2>

          <p>
            Medidas, proporções e detalhes transformam uma ideia em projeto.
          </p>
        </div>

        {/* ETAPA 3 */}

        <div className="process-copy process-step-03">
          <span className="process-number">03</span>

          <small>CONSTRUÇÃO</small>

          <h2>
            Depois,
            <em> construímos.</em>
          </h2>

          <p>
            Corte, encaixe, solda e precisão. Cada etapa feita à mão.
          </p>
        </div>

        {/* ETAPA 4 */}

        <div className="process-copy process-step-04">
          <span className="process-number">04</span>

          <small>ACABAMENTO</small>

          <h2>
            O detalhe
            <em> transforma.</em>
          </h2>

          <p>
            Textura, acabamento e personalidade dão vida à peça.
          </p>
        </div>

        {/* FINAL */}

        <div className="process-final">
          <span className="process-final-small">
            FEITO À MÃO
          </span>

          <h2>
            Não criamos
            <br />
            apenas peças.
            <strong>Damos forma a histórias.</strong>
          </h2>

          <span className="process-final-line"></span>
        </div>

        {/* SCROLL */}

        <div className="process-scroll">
          <span></span>
          CONTINUE ROLANDO
        </div>
      </div>
    </section>
  );
}