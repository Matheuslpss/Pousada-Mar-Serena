import Image from "next/image";

export function TestimonialSection() {
  return (
    <section id="galeria" className="testimonial-section">
      <div className="testimonial-image">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=85"
          alt="Praia tranquila ao por do sol"
          fill
          sizes="(max-width: 900px) 100vw, 46vw"
        />
      </div>
      <div className="testimonial-copy">
        <p className="eyebrow teal">Quem já viveu, recomenda</p>
        <span className="quote-mark" aria-hidden="true">
          “
        </span>
        <h2>Cada detalhe feito com carinho, para momentos que ficam na memória.</h2>
        <p>
          Lugar incrível, atendimento impecável e uma energia que só quem vai entende. Voltaremos com certeza!
        </p>
        <div className="guest">
          <Image
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80"
            alt="Juliana Ferreira"
            width={48}
            height={48}
          />
          <div>
            <strong>Juliana Ferreira</strong>
            <span>São Paulo - SP</span>
          </div>
        </div>
        <div className="dots" aria-hidden="true">
          <span className="active" />
          <span />
          <span />
        </div>
      </div>
    </section>
  );
}
