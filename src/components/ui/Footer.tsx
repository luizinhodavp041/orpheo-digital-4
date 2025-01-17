import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const footerLinks = {
    servicos: [
      { name: "Marketing Digital", href: "#" },
      { name: "Desenvolvimento", href: "#" },
      { name: "Design", href: "#" },
      { name: "Automação", href: "#" },
    ],
    empresa: [
      { name: "Sobre nós", href: "#" },
      { name: "Contato", href: "#" },
    ],
    legal: [
      { name: "Privacidade", href: "#" },
      { name: "Termos de uso", href: "#" },
      { name: "Cookies", href: "#" },
    ],
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 flex justify-center text-center">
          {/* Brand Column */}
          <div className="max-w-md">
            <div className="flex items-center gap-2 mb-4 justify-center">
              <div className="h-10 w-10 rounded-lg bg-accent relative overflow-hidden">
                <Image
                  src="/icon.png"
                  alt="ícone"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="text-xl font-bold">
                Orpheo Digital
                <span className="text-xl font-bold text-accent">.</span>
              </span>
            </div>
            <p className="text-text-secondary">
              Transformando negócios através de soluções digitais inovadoras e
              resultados mensuráveis.
            </p>
          </div>

          {/* Links Columns */}
          {/* <div>
            <h3 className="font-semibold mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-text transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center text-text-secondary">
          <p>© 2025 Orpheo Digital. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="https://wa.me/+5541999189497?text=Ol%C3%A1%20*Orpheo%20Digital*%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20oferecem!" className="hover:text-text">
              WhatsApp
            </Link>
            <Link href="https://www.instagram.com/orpheodigital" className="hover:text-text">
              Instagram
            </Link>
            {/* <Link href="#" className="hover:text-text">
              LinkedIn
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
