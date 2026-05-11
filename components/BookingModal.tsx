"use client";

import { useEffect, useMemo, useState } from "react";

const suites = [
  {
    name: "Suíte Mar",
    price: 780,
    description: "Vista para o mar, varanda privativa e clima de refúgio exclusivo.",
  },
  {
    name: "Suíte Jardim",
    price: 640,
    description: "Rodeada pelo verde, ideal para descansar em silêncio e privacidade.",
  },
  {
    name: "Suíte Conforto",
    price: 520,
    description: "Acolhedora, completa e perfeita para uma estadia leve à beira-mar.",
  },
];

type Step = 1 | 2 | 3;

export function BookingModal() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [suite, setSuite] = useState(suites[0].name);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const selectedSuite = suites.find((item) => item.name === suite) ?? suites[0];
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) return 1;
    const start = new Date(`${checkIn}T12:00:00`);
    const end = new Date(`${checkOut}T12:00:00`);
    const diff = Math.ceil((end.getTime() - start.getTime()) / 86400000);
    return Math.max(diff, 1);
  }, [checkIn, checkOut]);
  const total = selectedSuite.price * nights;

  useEffect(() => {
    function handleOpen() {
      setOpen(true);
      setStep(1);
    }

    window.addEventListener("open-booking", handleOpen);
    return () => window.removeEventListener("open-booking", handleOpen);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="booking-layer" role="dialog" aria-modal="true" aria-labelledby="booking-title">
      <button className="booking-backdrop" type="button" aria-label="Fechar reserva" onClick={() => setOpen(false)} />
      <section className="booking-modal">
        <div className="booking-hero">
          <button className="booking-close" type="button" aria-label="Fechar reserva" onClick={() => setOpen(false)}>
            ×
          </button>
          <p className="eyebrow">Reserva Mar Serena</p>
          <h2 id="booking-title">Planeje sua estadia com calma.</h2>
          <p>Escolha sua suíte, informe os detalhes da viagem e finalize sua pré-reserva em poucos passos.</p>
          <div className="booking-summary">
            <span>{suite}</span>
            <strong>{formatCurrency(total)}</strong>
            <small>{nights} diária{nights > 1 ? "s" : ""} estimada{nights > 1 ? "s" : ""}</small>
          </div>
        </div>

        <div className="booking-content">
          <ol className="booking-steps" aria-label="Etapas da reserva">
            <li className={step >= 1 ? "active" : ""}>Estadia</li>
            <li className={step >= 2 ? "active" : ""}>Contato</li>
            <li className={step >= 3 ? "active" : ""}>Pagamento</li>
          </ol>

          {step === 1 && (
            <div className="booking-panel">
              <div className="booking-fieldset">
                <span className="booking-label">Tipo de acomodação</span>
                <div className="suite-options">
                  {suites.map((item) => (
                    <label className={suite === item.name ? "suite-option selected" : "suite-option"} key={item.name}>
                      <input
                        type="radio"
                        name="suite"
                        value={item.name}
                        checked={suite === item.name}
                        onChange={() => setSuite(item.name)}
                      />
                      <span>
                        <strong>{item.name}</strong>
                        <small>{item.description}</small>
                        <em>{formatCurrency(item.price)} / diária</em>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="booking-two-columns">
                <label className="booking-field">
                  <span>Check-in</span>
                  <input type="date" value={checkIn} onChange={(event) => setCheckIn(event.target.value)} />
                </label>
                <label className="booking-field">
                  <span>Check-out</span>
                  <input type="date" value={checkOut} onChange={(event) => setCheckOut(event.target.value)} />
                </label>
              </div>

              <div className="guest-grid">
                <Counter label="Adultos" value={adults} min={1} onChange={setAdults} />
                <Counter label="Crianças" value={children} min={0} onChange={setChildren} />
              </div>

              <button className="booking-action" type="button" onClick={() => setStep(2)}>
                Prosseguir
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="booking-panel">
              <div className="booking-two-columns">
                <label className="booking-field">
                  <span>Nome completo</span>
                  <input type="text" placeholder="Seu nome" />
                </label>
                <label className="booking-field">
                  <span>E-mail</span>
                  <input type="email" placeholder="voce@email.com" />
                </label>
              </div>
              <label className="booking-field">
                <span>Contato</span>
                <input type="tel" placeholder="(47) 99999-9999" />
              </label>
              <label className="booking-field">
                <span>Observações da estadia</span>
                <textarea placeholder="Alguma preferência, horário de chegada ou pedido especial?" rows={4} />
              </label>
              <div className="booking-actions">
                <button className="booking-secondary" type="button" onClick={() => setStep(1)}>
                  Voltar
                </button>
                <button className="booking-action" type="button" onClick={() => setStep(3)}>
                  Prosseguir
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="booking-panel">
              <div className="payment-card">
                <div>
                  <span>Resumo da pré-reserva</span>
                  <strong>{suite}</strong>
                </div>
                <p>
                  {adults} adulto{adults > 1 ? "s" : ""} {children > 0 ? `e ${children} criança${children > 1 ? "s" : ""}` : ""}
                </p>
                <p>
                  {checkIn || "Check-in"} até {checkOut || "Check-out"} · {nights} diária{nights > 1 ? "s" : ""}
                </p>
                <strong className="payment-total">{formatCurrency(total)}</strong>
              </div>

              <div className="booking-two-columns">
                <label className="booking-field">
                  <span>Número do cartão</span>
                  <input inputMode="numeric" placeholder="0000 0000 0000 0000" />
                </label>
                <label className="booking-field">
                  <span>Nome no cartão</span>
                  <input type="text" placeholder="Como aparece no cartão" />
                </label>
              </div>
              <div className="booking-two-columns compact">
                <label className="booking-field">
                  <span>Validade</span>
                  <input placeholder="MM/AA" />
                </label>
                <label className="booking-field">
                  <span>CVV</span>
                  <input inputMode="numeric" placeholder="123" />
                </label>
              </div>
              <label className="payment-check">
                <input type="checkbox" />
                <span>Quero receber a confirmação e próximos passos por e-mail e WhatsApp.</span>
              </label>
              <div className="booking-actions">
                <button className="booking-secondary" type="button" onClick={() => setStep(2)}>
                  Voltar
                </button>
                <button className="booking-action" type="button" onClick={() => setOpen(false)}>
                  Finalizar pré-reserva
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

function Counter({
  label,
  value,
  min,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="counter">
      <span>{label}</span>
      <div>
        <button type="button" aria-label={`Diminuir ${label}`} onClick={() => onChange(Math.max(min, value - 1))}>
          −
        </button>
        <strong>{value}</strong>
        <button type="button" aria-label={`Aumentar ${label}`} onClick={() => onChange(value + 1)}>
          +
        </button>
      </div>
    </div>
  );
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}
