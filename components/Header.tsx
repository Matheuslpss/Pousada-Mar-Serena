"use client";

import { useState } from "react";
import { BookingButton } from "./BookingButton";
import { WaveLogo } from "./icons";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "A Pousada", href: "#a-pousada" },
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Galeria", href: "#galeria" },
  { label: "Atrações", href: "#atracoes" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" aria-label="Cabecalho principal">
      <a className="brand" href="#home" aria-label="Pousada Mar Serena">
        <WaveLogo className="brand-icon" />
        <span>
          <small>Pousada</small>
          Mar Serena
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        aria-expanded={open}
        aria-controls="main-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav id="main-navigation" className={open ? "nav open" : "nav"} aria-label="Navegacao principal">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
        <span onClick={() => setOpen(false)}>
          <BookingButton variant="header">
          Reservar agora
          </BookingButton>
        </span>
      </nav>
    </header>
  );
}
