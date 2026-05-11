import Image from "next/image";
import { LeafIcon } from "./icons";

export function AboutSection() {
  return (
    <section id="a-pousada" className="section about-section">
      <div className="container about-grid">
        <div className="about-copy">
          <span className="wave-mark" aria-hidden="true" />
          <h2>Aconchego que abraça. Natureza que renova.</h2>
          <p>
            A Pousada Mar Serena foi criada para proporcionar momentos únicos, em um ambiente acolhedor,
            cercado pela beleza natural do mar e pela tranquilidade que você merece.
          </p>
          <a className="text-link" href="#galeria">
            Conheça a pousada <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="about-image-wrap">
          <Image
            className="about-image"
            src="https://images.unsplash.com/photo-1602002418679-43121356bf41?auto=format&fit=crop&w=1400&q=85"
            alt="Fachada acolhedora de pousada com madeira, varanda e jardim tropical"
            width={900}
            height={590}
            sizes="(max-width: 900px) 100vw, 58vw"
          />
          <article className="floating-card">
            <LeafIcon />
            <h3>Sustentabilidade</h3>
            <p>Práticas conscientes para cuidar do hoje e preservar o amanhã.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
