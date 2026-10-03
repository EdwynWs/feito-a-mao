"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const fecharMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="container header-container">

        <a href="#inicio" className="brand" onClick={fecharMenu}>
          <div className="brand-logo-wrapper">
          <img
            src="/images/logo.jpg"
            alt="Feito à Mão - Marcenaria e Serralheria Artesanal"
            className="brand-logo"
          />
        </div>
          <div className="brand-text">
            <strong>Feito à Mão</strong>
            <span>Marcenaria & Serralheria</span>
          </div>
        </a>

        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <a href="#inicio" onClick={fecharMenu}>
            Início
          </a>

          <a href="#trabalhos" onClick={fecharMenu}>
            Trabalhos
          </a>

          <a href="#servicos" onClick={fecharMenu}>
            Serviços
          </a>

          <a href="#sobre" onClick={fecharMenu}>
            Sobre
          </a>

          <a href="#contato" onClick={fecharMenu}>
            Contato
          </a>

          <a
            href="https://wa.me/5514998160781?text=Olá! Vim pelo site da Feito à Mão e gostaria de solicitar um orçamento."
            target="_blank"
            rel="noopener noreferrer"
            className="nav-budget"
          >
            Pedir orçamento
          </a>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>
    </header>
  );
}