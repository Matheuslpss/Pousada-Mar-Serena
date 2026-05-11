import Image from "next/image";
import { BookingButton } from "./BookingButton";

const rooms = [
  {
    title: "Suíte Mar",
    description: "Vista deslumbrante para o mar e todo o conforto para dias inesquecíveis.",
    image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Suíte Jardim",
    description: "Cercada pelo verde, perfeita para quem busca tranquilidade e conexão com a natureza.",
    image: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85",
  },
  {
    title: "Suíte Conforto",
    description: "Ambiente acolhedor e completo para você relaxar com praticidade e bem-estar.",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=85",
  },
];

export function RoomsSection() {
  return (
    <section id="acomodacoes" className="section rooms-section">
      <div className="container">
        <div className="section-heading centered">
          <p className="eyebrow teal">Acomodações</p>
          <h2>Conforto em cada detalhe</h2>
        </div>
        <div className="rooms-grid">
          {rooms.map((room) => (
            <article className="room-card" key={room.title}>
              <div className="room-image">
                <Image src={room.image} alt={room.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 45vw, 31vw" />
              </div>
              <div className="room-body">
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <BookingButton variant="link">Ver detalhes</BookingButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
