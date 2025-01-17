import Image from "next/image";
import Link from "next/link";

export function Footer() {
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
        </div>

        {/* Footer Bottom */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center text-text-secondary">
          <p>© 2025 Orpheo Digital. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link
              href="https://wa.me/+5541999189497?text=Ol%C3%A1%20*Orpheo%20Digital*%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20que%20voc%C3%AAs%20oferecem!"
              className="hover:text-text"
            >
              WhatsApp
            </Link>
            <Link
              href="https://www.instagram.com/orpheodigital"
              className="hover:text-text"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
