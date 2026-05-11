import Image from "next/image";
import { BookingButton } from "./BookingButton";

export function Hero() {
  return (
    <section id="home" className="hero">
      <Image
        className="hero-image"
        src="https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2400&q=85"
        alt="Varanda elegante de pousada boutique com vista para o mar ao por do sol"
        fill
        priority
        sizes="100vw"
      />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <p className="eyebrow">Sinta a paz. Viva o essencial.</p>
        <h1>Seu refúgio à beira-mar.</h1>
        <p className="hero-copy">
          Mais do que uma pousada, um convite para desacelerar e se reconectar com o que importa.
        </p>
        <BookingButton>
          Faça sua reserva
        </BookingButton>
      </div>
    </section>
  );
}
