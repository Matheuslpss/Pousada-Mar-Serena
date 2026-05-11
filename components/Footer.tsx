import { WaveLogo } from "./icons";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "A Pousada", href: "#a-pousada" },
  { label: "Acomodações", href: "#acomodacoes" },
  { label: "Galeria", href: "#galeria" },
  { label: "Atrações", href: "#atracoes" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-grid">
        <div>
          <a className="brand footer-brand" href="#home" aria-label="Pousada Mar Serena">
            <WaveLogo className="brand-icon" />
            <span>
              <small>Pousada</small>
              Mar Serena
            </span>
          </a>
          <p className="footer-copy">
            Seu refúgio à beira-mar. Aqui, o tempo desacelera e o essencial permanece.
          </p>
          <div className="social-links" aria-label="Redes sociais">
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="WhatsApp">w</a>
          </div>
        </div>

        <div>
          <h3>Navegação</h3>
          <nav className="footer-links" aria-label="Navegacao do rodape">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h3>Informações</h3>
          <address>
            <a href="tel:+5547999999999">(47) 99999-9999</a>
            <a href="mailto:contato@marserena.com.br">contato@marserena.com.br</a>
            <span>Rua das Conchas, 123</span>
            <span>Praia Serena - SC</span>
          </address>
        </div>

        <div>
          <h3>Receba novidades</h3>
          <p>Assine nossa newsletter e receba ofertas exclusivas.</p>
          <form className="newsletter">
            <label className="sr-only" htmlFor="newsletter-email">
              Seu melhor e-mail
            </label>
            <input id="newsletter-email" type="email" placeholder="Seu melhor e-mail" />
            <button type="submit" aria-label="Enviar e-mail">
              →
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Pousada Mar Serena. Todos os direitos reservados.</span>
        <span>Desenvolvido por Seu Nome</span>
      </div>
    </footer>
  );
}
